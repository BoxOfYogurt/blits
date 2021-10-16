import { DateUtils } from '../../util/DateUtils';
import {
  ExtendedWorkTask,
  TaskStore,
  TaskStoreAction,
  TaskStoreActionEnum,
} from './TaskStore.types';

// Reducer
export const TaskStoreReducer: React.Reducer<TaskStore, TaskStoreAction> = (
  store,
  action
) => {
  let copyStore = { ...store };

  const taskId = mapTaskId(action.payload.id, copyStore.workTasks);
  const taskPeriodTotalTime = DateUtils.timeDiff(
    action.payload.period.from,
    action.payload.period.to
  );

  switch (action.action) {
    case TaskStoreActionEnum.ADD:
      copyStore.workTasks = [
        ...copyStore.workTasks,
        { ...action.payload, id: taskId, periodTotalTime: taskPeriodTotalTime },
      ];
      const metricIndex = copyStore.metrics.findIndex(
        (metricStore) => metricStore.labelId === action.payload.labelId
      );
      const labelIndex = copyStore.labels.findIndex(
        (labelStore) => labelStore.labelId === action.payload.labelId
      );
      /** should never fail */
      if (metricIndex !== -1 && labelIndex !== -1) {
        /** update metrics */
        copyStore.metrics = [
          ...copyStore.metrics,
          {
            ...copyStore.metrics[metricIndex],
            totalTime:
              copyStore.metrics[labelIndex].totalTime + taskPeriodTotalTime,
          },
        ];
        /** Update labels */
        copyStore.labels = [
          ...copyStore.labels,
          {
            ...copyStore.labels[labelIndex],
            tasks: [...copyStore.labels[labelIndex].tasks, taskId],
          },
        ];
      }
      setLocalStorageTaskStore(copyStore);
      console.log(copyStore);
      return copyStore;
    case TaskStoreActionEnum.EDIT:
      setLocalStorageTaskStore(copyStore);
      console.log('EDIT');
      return copyStore;
    case TaskStoreActionEnum.DELETE:
      console.log('DELETE');
      setLocalStorageTaskStore(copyStore);
      return copyStore;
    default:
      return copyStore;
  }
};

const setLocalStorageTaskStore = (store: TaskStore) => {
  localStorage.setItem('taskStore', JSON.stringify(store));
};

const mapTaskId = (id: number | null, store: ExtendedWorkTask[]): number => {
  if (id) {
    return id;
  }
  if (store.length) {
    return store[store.length - 1].id + 1;
  }
  return 1;
};
