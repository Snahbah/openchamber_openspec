import type { Stage } from "../model.js";

export const stages: { id: Stage; label: string; action: string }[] = [
  { id: "planning", label: "Planning", action: "Plan" },
  { id: "ready", label: "Ready", action: "Build" },
  { id: "progress", label: "In Progress", action: "Continue" },
  { id: "complete", label: "Complete", action: "Archive" },
];

export const workflowLabel = (stage: Stage) => stages.find((item) => item.id === stage)!.action;
export const stageLabel = (stage: Stage) => stages.find((item) => item.id === stage)!.label;
