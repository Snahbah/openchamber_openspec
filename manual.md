# OpenSpec Board & Repository Starter Guide: A Plain English Manual

Welcome! This guide explains how to start a brand new project, draft clear specifications (PRDs), and use the **OpenSpec Board** in OpenChamber to plan, build, and track every task with your AI assistant—without needing to know how to code.

---

## 1. What is this board for?

When working with an AI assistant, it is easy for it to jump straight into editing files before you have agreed on what you actually want. 

The **OpenSpec Board** is a visual workflow tracker (like a Trello or Kanban board) embedded inside OpenChamber that keeps you and your AI aligned. It breaks every new project or feature into clear, manageable steps:

```
[New Repo & Job ID] ➔ [PRD / Spec] ➔ [OpenSpec Cards] ➔ [Build & Code] ➔ [Review] ➔ [Done]
```

---

## 2. Starting a New Project: The `/blueprint` Command

Whenever you or the team start a new repository, you don't need to manually create folders, copy rules, or look up numbers. OpenChamber does this for you with a single command:

### How to run it:
In the OpenChamber chat box at the bottom, type:
```text
/blueprint
```
*(Or specify the client and project right away, e.g. `/blueprint TS Halo Customer Portal`)*

### What the AI does automatically:
1. **Claims the next Job Number:** It reads the shared Master Job Sheet, takes the next available slot (e.g. `TS181` for The Smugglers or `CP182` for CP Lime), records the client name, project description, and today's date, and saves the ledger.
2. **Creates the Master Folder Layout:**
   ```text
   TS181-halo-customer-portal/
   ├── src/             # Application source code
   ├── docs/            # Project documentation & PRDs
   ├── tests/           # Automated test suites
   └── scratchpad/      # AI working thoughts (ignored by Git)
   ```
3. **Applies the Starter Documents:**
   - **`AGENTS.md`**: The master AI rulebook. It tells the AI:
     - *Spec Before Code*: Never write code before the PRD is agreed.
     - *Test-First*: Write failing tests first, prove they work, then build the code.
     - *Zero Stubs Invariant*: No placeholder `// TODO` or fake code.
     - *British English*: Always use British spelling (`colour`, `initialise`, etc.).
   - **`README.md`**: Project overview, client details, and quickstart commands.
   - **`.gitignore` & `.env.example`**: Clean setups protecting secrets and scratch files.
   - **`docs/PRD-TS181-01.md`**: The first Product Requirement Document ready to fill in.
4. **Initialises Git & Sets Job Commits:** It runs `git init` and makes the first commit prefixed with the job number:
   `TS181 chore: scaffold repository structure and PRD-01`
5. **Stages Your First Ticket on OpenSpec:** It creates the initial change proposal (`prd-01-core-implementation`) on the OpenSpec Board so you are ready to plan and build immediately.

---

## 3. Understanding Job Numbers & The Master Sheet

Every piece of client or internal work receives a unique prefix:
- **`TS`** = The Smugglers / House (e.g. `TS172`, `TS179`, `TS181`)
- **`CP`** = CP Lime (e.g. `CP173`, `CP178`, `CP180`)
- **Other Clients** = Any 2–3 letter agency code.

The Master Ledger lives in `Halo Documents/Structure/Job Number Master.md`. When `/blueprint` runs, it updates this sheet automatically so you never have conflicting numbers or forgotten job codes.

Every Git commit made throughout the project will start with this number (e.g. `TS181 feat(nav): add customer header`), making client billing and changelog history completely traceable.

---

## 4. The PRD: How to Draft It (Creating PRD-01 and Beyond)

A **PRD** (Product Requirement Document) is simply an agreement between you and the AI about what is going to be built.

Your scaffolded project places the first PRD in `docs/PRD-[JOB_ID]-01.md`. For larger projects, you can have multiple PRDs for different phases (`PRD-01: Core Setup`, `PRD-02: User Login`, `PRD-03: Export to PDF`).

The template has 9 clear sections:

| Section | What it is | Plain English Example |
| :--- | :--- | :--- |
| **1. Objective & Context** | Why are we building this? | *"A secure portal where customers can download their monthly soil analysis reports."* |
| **2. API Contracts & Schema** | What data goes in and comes out? | The shape of the user profile, form fields, or report download links. |
| **3. Acceptance Criteria** | The exact checklist of what must work. | *"Given a valid login, when the user clicks 'Download', a PDF is generated within 2 seconds."* |
| **4. Technical Constraints** | Non-negotiable quality rules. | Strict typing, British English spelling, zero fake placeholder code. |
| **5. Verification Plan** | How we prove it works. | The automated test file the AI must write *before* writing the feature. |
| **6. Observability** | How we monitor errors and speed. | Error logging and health checks. |
| **7. Performance Boundaries** | Speed and size limits. | Pages must load in under 500ms. |
| **8. Dependencies & Rollout** | What blocks this or where it deploys. | Third-party services or API credentials required. |
| **9. Out of Scope** | What we are **NOT** doing right now. | Prevents the AI from wandering into unrequested features (e.g. *"No payment gateway in this version"*). |

> [!TIP]
> You can ask the AI to help you draft the PRD! Simply say:  
> *"Help me fill in PRD-01 for a new report download feature. Interview me with 4 questions to get the details."*

---

## 5. Turning the PRD into Tickets on OpenSpec

Once your PRD is drafted, it is turned into actionable tickets on the OpenSpec Board.

1. **Automatic from Blueprint:** `/blueprint` automatically stages the first card (`prd-01-core-implementation`) on your board.
2. **Adding Subsequent Features:**
   - Click the **+ New change** button at the top right of the board.
   - Enter a friendly title (e.g. `User password reset`).
   - Describe the goal in 1–2 sentences.
   - Click **Create**. A new card appears in the **Planning** column.
3. **Or using chat:**
   Type `/spec-plan <feature-name>` (e.g. `/spec-plan user-password-reset`).

The AI reads the Acceptance Criteria from your PRD and breaks them down into individual checkboxes in `tasks.md`.

---

## 6. Running the Tickets: The 4 Stages on the Board

Cards move across columns from left to right as work progresses:

```
[Planning] ➔ [Ready] ➔ [In Progress] ➔ [Complete]
```

| Column | What it means | What you do |
| :--- | :--- | :--- |
| **Planning** | A feature or PRD is logged, but needs its task breakdown. | Click **Plan** on the card. The AI reads the requirements and drafts the checklist. |
| **Ready** | The plan and task checklist are complete and agreed. | Click **Build** on the card. The AI starts writing tests and code. |
| **In Progress** | Work is underway; tasks are being ticked off in real time. | Watch the progress bar advance. Click **Continue** if paused or resuming. |
| **Complete** | All tasks and tests are green! | Click **Review** to verify, then **Archive** to mark done and clear the card. |

### How the AI builds each task:
When you click **Build**, the AI follows the strict **Stage-Gate Lifecycle**:
1. **Failing Test First:** It writes the test and proves it fails.
2. **Clean Implementation:** It writes the code to make the test pass. No stubs, no fake placeholders.
3. **Verification:** It runs the full suite to confirm green exit code 0.
4. **Job Commit:** It commits the change to Git with your job prefix (`TS181 feat(reports): implement PDF streaming`).

---

## 7. Toolbar Buttons Explained

- **Set-up**: Initialises OpenSpec in a new project if it isn't set up yet. (Run automatically by `/blueprint`).
- **Refresh**: Updates the cards and task progress bars with the latest files on disk.
- **Archive all**: Cleans up all completed cards from the board, keeping your workspace neat and uncluttered.
- **New change**: Opens the window to create a new task or feature.

---

## 8. Easy Chat Commands (Slash Commands)

If you prefer typing in chat rather than clicking board buttons, use these simple commands:

| Command | What it does | Example |
| :--- | :--- | :--- |
| `/blueprint [Client] [Name]` | Scaffolds a new repo, claims a job number, sets up folders, rules, PRD-01, Git hook, and OpenSpec card. | `/blueprint TS Customer Portal` |
| `/prd-draft [path]` | Co-authors or refines a PRD through a simple 4-question plain English interview. | `/prd-draft docs/PRD-TS181-02.md` |
| `/spec-from-prd [path]` | Converts any agreed PRD directly into an OpenSpec card with test-first tasks. | `/spec-from-prd docs/PRD-TS181-02.md` |
| `/spec-plan <name>` | Plans a new feature, generating specifications and tasks before writing code. | `/spec-plan report-download` |
| `/spec-build <name>` | Builds and implements the tasks for a planned change. | `/spec-build report-download` |
| `/spec-review <name>` | Reviews and tests that the code matches the PRD before finishing. | `/spec-review report-download` |
| `/spec-explore` | Brainstorms ideas, architectural options, and trade-offs before deciding on a plan. | `/spec-explore` |
| `/spec-archive <name>` | Archives a completed change and marks it done. | `/spec-archive report-download` |
| `/spec-update <name>` | Revises an existing plan when client requirements change. | `/spec-update report-download` |
| `/spec-sync` | Updates the main project documentation with the newly landed changes. | `/spec-sync` |

---

## 9. Wingman: The Invisible Quality Guardian

While you work on the OpenSpec Board, **Wingman** runs quietly in the background inside OpenChamber.

Wingman uses the `AGENTS.md` file and your PRD Quality Gates as the project's **Canon**. If an AI model ever tries to:
- Output unfinished stubs (`// TODO: implement later`)
- Drift off-scope from the agreed PRD
- Skip automated test suites
- Break British English spelling

Wingman immediately detects the drift, flags it, and guides the session back onto the rails.

---

## 10. Summary Checklist: Starting Your Next Job
 
 ```text
 1. Open OpenChamber chat.
 2. Type: /blueprint [Client] [Project Name]
 3. Switch workspace: File ➔ Open Folder (select your new project).
 4. Type: /prd-draft (answer 4 friendly questions to nail down your PRD).
 5. Type: /spec-from-prd docs/PRD-[JOB_ID]-01.md (to load tickets onto the board).
 6. Click "Build" on the OpenSpec Board (or run /spec-build <change-name>).
 7. Watch tests turn green, review, and celebrate!
 ```
