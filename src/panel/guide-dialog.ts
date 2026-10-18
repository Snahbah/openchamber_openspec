import { mountButton } from "@openchamber/sdk/ui";

export function mountGuideDialog(
  root: HTMLElement,
  callbacks: {
    setup?: () => void;
    canSetup?: () => boolean;
  },
) {
  const dialog = document.createElement("dialog");
  dialog.className = "guide-dialog";
  dialog.style.width = "min(640px, calc(100vw - 32px))";
  dialog.style.maxHeight = "85vh";
  dialog.style.overflowY = "auto";
  dialog.style.padding = "20px";
  dialog.style.border = "1px solid var(--oc-border, #30363c)";
  dialog.style.borderRadius = "10px";
  dialog.style.background = "var(--oc-bg, #15191c)";
  dialog.style.color = "inherit";

  const heading = document.createElement("h2");
  heading.id = "guide-title";
  heading.style.marginTop = "0";
  heading.style.marginBottom = "8px";
  heading.textContent = "OpenSpec Aid-Mémoire & Command Guide";
  dialog.setAttribute("aria-labelledby", heading.id);

  const intro = document.createElement("p");
  intro.style.fontSize = "13px";
  intro.style.color = "var(--oc-muted, #a0a9b1)";
  intro.style.marginTop = "0";
  intro.style.marginBottom = "16px";
  intro.textContent =
    "Quick reference for starting repositories, co-authoring PRDs, and running tasks on the OpenSpec Board.";

  const commandsTitle = document.createElement("h3");
  commandsTitle.style.fontSize = "14px";
  commandsTitle.style.margin = "14px 0 8px";
  commandsTitle.textContent = "Essential Slash Commands";

  const commandsList = document.createElement("div");
  commandsList.style.display = "grid";
  commandsList.style.gap = "8px";
  commandsList.style.fontSize = "13px";

  const commands = [
    {
      cmd: "/blueprint [Client] [Name]",
      desc: "Scaffold new repo, claim Job ID (e.g. TS181), seed PRD-01, set Git guard, and stage initial card.",
    },
    {
      cmd: "/prd-draft [path]",
      desc: "Co-author a PRD through a 4-question plain English interview with the AI.",
    },
    {
      cmd: "/spec-from-prd [path]",
      desc: "Convert any PRD's acceptance criteria into a live card on this board.",
    },
    {
      cmd: "/spec-plan <name>",
      desc: "Draft plan, specifications, and tasks for a new feature or change.",
    },
    {
      cmd: "/spec-build <name>",
      desc: "Implement tasks: test-first (RED -> GREEN), zero stubs, and atomic [JOB_ID] commits.",
    },
    {
      cmd: "/spec-review <name>",
      desc: "Verify quality gates: zero stubs, passing tests, and British English spelling.",
    },
    {
      cmd: "/spec-archive <name>",
      desc: "Archive a completed change from the board and mark it finished.",
    },
  ];

  commands.forEach(({ cmd, desc }) => {
    const item = document.createElement("div");
    item.style.padding = "8px 10px";
    item.style.background = "var(--oc-elevated, #1d2226)";
    item.style.borderRadius = "6px";
    item.style.border = "1px solid var(--oc-border, #30363c)";

    const code = document.createElement("code");
    code.style.fontFamily = "var(--oc-mono, monospace)";
    code.style.fontWeight = "600";
    code.style.color = "var(--oc-primary-text, #97c8bb)";
    code.textContent = cmd;

    const text = document.createElement("div");
    text.style.marginTop = "3px";
    text.style.color = "var(--oc-fg, #e6edf3)";
    text.textContent = desc;

    item.append(code, text);
    commandsList.append(item);
  });

  const workflowTitle = document.createElement("h3");
  workflowTitle.style.fontSize = "14px";
  workflowTitle.style.margin = "16px 0 8px";
  workflowTitle.textContent = "The 4 Board Columns";

  const workflowText = document.createElement("div");
  workflowText.style.fontSize = "12.5px";
  workflowText.style.color = "var(--oc-muted, #a0a9b1)";
  workflowText.style.lineHeight = "1.5";
  workflowText.innerHTML = `
    <strong>1. Planning:</strong> Feature logged, needs task checklist. Click <em>Plan</em>.<br/>
    <strong>2. Ready:</strong> Plan and tasks agreed. Click <em>Build</em>.<br/>
    <strong>3. In Progress:</strong> AI implementing test-first tasks.<br/>
    <strong>4. Complete:</strong> All tasks green. Click <em>Review</em> then <em>Archive</em>.
  `;

  const footer = document.createElement("div");
  footer.style.display = "flex";
  footer.style.alignItems = "center";
  footer.style.justifyContent = "space-between";
  footer.style.marginTop = "20px";
  footer.style.paddingTop = "12px";
  footer.style.borderTop = "1px solid var(--oc-border, #30363c)";

  const setupSlot = document.createElement("span");
  let setupBtn: ReturnType<typeof mountButton> | null = null;
  if (callbacks.setup) {
    setupBtn = mountButton(setupSlot, {
      label: "Initialise OpenSpec (Set-up)",
      variant: "secondary",
      size: "sm",
      onClick: () => {
        close();
        callbacks.setup?.();
      },
    });
  }

  const closeSlot = document.createElement("span");
  const closeBtn = mountButton(closeSlot, {
    label: "Close",
    size: "sm",
    onClick: close,
  });

  footer.append(setupSlot, closeSlot);

  function close() {
    dialog.close();
  }

  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    close();
  });

  dialog.append(heading, intro, commandsTitle, commandsList, workflowTitle, workflowText, footer);
  root.append(dialog);

  return {
    open() {
      setupBtn?.update({ disabled: callbacks.canSetup ? !callbacks.canSetup() : true });
      dialog.showModal();
    },
    update() {
      setupBtn?.update({ disabled: callbacks.canSetup ? !callbacks.canSetup() : true });
    },
    dispose() {
      closeBtn.dispose();
      setupBtn?.dispose();
      dialog.remove();
    },
  };
}
