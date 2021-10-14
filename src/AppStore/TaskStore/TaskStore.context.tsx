import React, { createContext, useContext } from 'react';
import { TaskStore, TaskStoreAction } from './TaskStore.types';

// Context
export type TaskStoreContextType = {
  taskStore: TaskStore;
  taskStoreDispatch: React.Dispatch<TaskStoreAction>;
};
export const TaskStoreContext = createContext<TaskStoreContextType>(
  {} as TaskStoreContextType
);

export const useTaskStore = () => useContext(TaskStoreContext);
