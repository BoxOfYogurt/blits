export interface WorkTask {
  id?: number;
  title: string;
  date: string;
  period: { from: Date; to: Date };
  periodTotalTime: number;
  label: {
    labelId: number;
    // LabelColorType
    color: string;
    text: string;
    // LabelIconName
    labelIconName: string;
  };
  includeInMetric: boolean;
  notification?: boolean;
}

export interface WorkMetric {
  labelId: number; // label means the userdefined labels. could be named categories
  totalTime: number; // time in ms
}

export interface TaskStore {
  workTasks: WorkTask[];
  metrics: WorkMetric[];
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
