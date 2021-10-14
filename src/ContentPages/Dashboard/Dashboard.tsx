import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { ContainerMenu } from '../../AppDesignComponents/ContainerMenu/ContainerMenu';
import { IconMenuLabel } from '../../AppDesignComponents/IconMenuLabel/IconMenuLabel';
import { useTaskStore } from '../../AppStore';
import { TaskStoreActionEnum } from '../../AppStore/TaskStore/TaskStore.types';
import { AppContentContainer } from '../../Components/AppContentContainer/AppContentContainer';
import { Timeline } from '../../Components/TimeLine/TimeLine';
import { StyledScrollContainer } from '../../StyledComponents';

type DashboardProps = {
  active: boolean;
  className?: string;
};

const DashboardComponent = ({ className }: DashboardProps) => {
  const theme = useTheme();
  const { taskStore, taskStoreDispatch } = useTaskStore();

  const handleAddTask = () => {
    taskStoreDispatch({
      action: TaskStoreActionEnum.ADD,
      payload: {
        title: 'testTitle',
        date: [new Date(2021, 9, 15).getTime().toString()],
        period: {
          from: new Date(2021, 9, 15, 8, 0, 0, 0),
          to: new Date(2021, 9, 15, 10, 10, 10),
        },
        periodTotalTime: 60000,
        label: {
          labelId: 2,
          color: 'red',
          text: 'testTask',
          labelIconName: 'add',
        },
        includeInMetric: true,
      },
    });
  };

  return (
    <AppContentContainer>
      <div className={className}>
        <StyledScrollContainer>
          <ContainerMenu fixed>
            <IconMenuLabel
              label='Add task'
              icon='plus'
              onClick={handleAddTask}
            />
          </ContainerMenu>
          <Timeline />
        </StyledScrollContainer>
        <div>
          {taskStore.workTasks.map((task) => (
            <p key={task.id}>{task.title}</p>
          ))}
        </div>
      </div>
    </AppContentContainer>
  );
};

export const Dashboard = styled(DashboardComponent)((props) => ({
  height: '100%',
  width: '100%',
}));
