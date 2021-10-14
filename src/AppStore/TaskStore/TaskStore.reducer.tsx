import {
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
  switch (action.action) {
    case TaskStoreActionEnum.ADD:
      copyStore.workTasks = [
        ...copyStore.workTasks,
        { ...action.payload, id: copyStore.workTasks.length + 1 },
      ];
      if (action.payload.includeInMetric) {
        const index = copyStore.metrics.findIndex(
          (x) => x.labelId === action.payload.label.labelId
        );
        if (index !== -1) {
          copyStore.metrics[index] = {
            ...copyStore.metrics[index],
            totalTime:
              copyStore.metrics[index].totalTime +
              action.payload.periodTotalTime,
          };
        } else {
          copyStore.metrics = [
            ...copyStore.metrics,
            {
              labelId: action.payload.label.labelId,
              totalTime: action.payload.periodTotalTime,
            },
          ];
        }
      }
      setLocalStorageTaskStore(copyStore);
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
