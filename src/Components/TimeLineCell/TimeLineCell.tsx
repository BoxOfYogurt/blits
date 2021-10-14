import styled from '@emotion/styled';
import { useTaskStore } from '../../AppStore';
import { TaskStoreActionEnum } from '../../AppStore/TaskStore/TaskStore.types';

type TimeLineCellProps = {
  className?: string;
  time: number;
  date: string;
};

const TimeLineCellComponent = ({
  className,
  time,
  date,
}: TimeLineCellProps) => {
  const { taskStoreDispatch } = useTaskStore();

  // creates a new task with default values
  const handleOnClick = () => {
    taskStoreDispatch({
      action: TaskStoreActionEnum.ADD,
      payload: {
        title: 'SomeTitle',
        date,
        period: {
          from: new Date(time),
          to: new Date(time + 3600000),
        },
        periodTotalTime: 3600000,
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
    <button
      type='button'
      className={className}
      onClick={handleOnClick}></button>
  );
};

export const TimeLineCell = styled(TimeLineCellComponent)((props) => ({
  boxSizing: 'border-box',
  backgroundColor: 'transparent',
  border: `1px solid ${props.theme.palette.blue.dark}`,
  cursor: 'pointer',
  '&:hover': {
    borderColor: props.theme.popper.light[100],
  },
}));
