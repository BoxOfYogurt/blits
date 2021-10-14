import React, { useReducer } from 'react';
import { TaskStoreContext } from './TaskStore.context';
import { TaskStoreReducer } from './TaskStore.reducer';
import { TaskStore, TaskStoreAction } from './TaskStore.types';

const getLocalStorageTaskStore = (): TaskStore => {
  const storeValues = localStorage.getItem('taskStore');
  if (storeValues) {
    return JSON.parse(storeValues) as TaskStore;
  }
  return {
    workTasks: [],
    metrics: [],
  };
};

// Provider
export const TaskStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [taskStore, taskStoreDispatch] = useReducer<
    React.Reducer<TaskStore, TaskStoreAction>
  >(TaskStoreReducer, getLocalStorageTaskStore());

  return (
    <TaskStoreContext.Provider value={{ taskStore, taskStoreDispatch }}>
      {children}
    </TaskStoreContext.Provider>
  );
};
