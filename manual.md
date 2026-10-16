# OpenSpec Board: A Plain English Guide

Welcome! This guide explains how to use the **OpenSpec Board** in OpenChamber to plan, build, and track changes to your projects with your AI assistant—without needing to know how to code.

---

## 1. What is this board for?

When working with an AI assistant, it is easy for it to jump straight into editing files before you've agreed on what you actually want. 

The OpenSpec Board is a visual workflow tracker (like a Trello or Kanban board) that keeps you and your AI aligned. It breaks every new feature or fix into clear, manageable steps:

```
[Idea / Goal] ➔ [Plan & Tasks] ➔ [Build & Code] ➔ [Review] ➔ [Done]
```

---

## 2. The 4 Stages on the Board

Cards move across columns from left to right as work progresses:

| Stage | What it means | What you do |
| :--- | :--- | :--- |
| **Planning** | A new feature or change has been logged, but needs a plan. | Click **Plan** to have the AI draft the specification and task checklist. |
| **Ready** | The plan and task checklist are complete and agreed. | Click **Build** to tell the AI to start writing the code and tests. |
| **In Progress** | Work is underway; tasks are being ticked off. | Watch the progress bar, or click **Continue** to resume where it left off. |
| **Complete** | All tasks are finished. | Click **Review** to check the work, or **Archive** to mark it done. |

---

## 3. How to create a new feature or change

1. Click the **+ New change** button at the top right of the board.
2. Enter a **Change name**:
   - You can type normally in plain English (e.g. `Add dark mode toggle` or `Contact page form`). The board automatically formats this into a clean identifier behind the scenes.
3. Enter the **Goal**:
   - Describe what you want in everyday language.
   - *Example:* *"Add a button in the top navigation that lets the user switch between light and dark modes, remembering their preference."*
4. Click **Create**. Your new card will appear in the **Planning** column.

---

## 4. How to run an action with the AI

The buttons on each card help you guide the AI assistant:

1. **Click the action button on the card:**
   - **Plan** (on a Planning card): Asks the AI to write down the plan and task breakdown.
   - **Build** (on a Ready card): Asks the AI to begin implementing the tasks.
   - **Continue** (on an In Progress card): Tells the AI to carry on with unfinished tasks.
   - **Review**: Asks the AI to double-check that the code meets the plan and test it.
   - **Explore**: Have an open brainstorming discussion about options and trade-offs before committing to a plan.
2. **Look at the chat composer at the bottom:**
   - The board will automatically prepare a clear, formatted message for you.
   - A notification will pop up: *"Prompt ready in chat. Press Enter to send to the assistant."*
3. **Press Enter (or click Send):**
   - The AI assistant will read the instruction and start working.
4. **Click Refresh on the board:**
   - When the AI finishes, click **Refresh** on the board toolbar to see tasks update and cards advance to the next column.

---

## 5. Toolbar Buttons Explained

- **Set-up**: Initialises OpenSpec in a new project so tracking works properly. Run this once if the board ever says the project isn't set up yet.
- **Refresh**: Updates the cards and task progress with the latest files on disk.
- **Archive all**: Cleans up all completed cards from the board, keeping your workspace neat.
- **New change**: Opens the window to create a new task or feature.

---

## 6. Helpful Tips

- **Keep goals focused:** One feature per card works best (e.g. "Add contact form" rather than "Build entire website").
- **Review before building:** Read the plan that the AI produces during the **Plan** stage. If something looks wrong, tell the AI in the chat to adjust it before clicking **Build**.
- **Don't panic if something is interrupted:** You can always click **Refresh** to see current progress, and **Continue** to pick up where you left off.
