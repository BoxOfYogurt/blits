export interface WorkTask {
  id: number | null;
  title: string;
  description?: string;
  date: string;
  period: { from: Date; to: Date };
  labelId: number;
  includeInMetric: boolean;
  notification?: boolean;
}

export interface ExtendedWorkTask extends Omit<WorkTask, 'id'> {
  id: number;
  periodTotalTime: number;
}

export interface WorkMetric {
  labelId: number; // label means the userdefined labels. could be named categories
  totalTime: number; // time in ms
}

export interface WorkLabel {
  labelId: number;
  color: string;
  labelName: string;
  labelIcon: string;
  includeInMetric: boolean;
  tasks: number[];
}

export interface TaskStore {
  workTasks: ExtendedWorkTask[];
  metrics: WorkMetric[];
  labels: WorkLabel[];
}

export enum TaskStoreActionEnum {
  ADD,
  EDIT,
  DELETE,
}

export interface TaskStoreAction {
  action: TaskStoreActionEnum;
  payload: WorkTask;
}
