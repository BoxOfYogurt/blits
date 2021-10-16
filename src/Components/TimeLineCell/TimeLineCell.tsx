import styled from '@emotion/styled';
import { useTaskStore } from '../../AppStore';
import { useSettingStore } from '../../AppStore/SettingStore/SettingStore.context';
import { TaskStoreActionEnum } from '../../AppStore/TaskStore/TaskStore.types';
import { TimeLineUtils } from '../../util/TimeLineUtils';

type TimeLineCellProps = {
  time: number;
  date: string;
};

export const TimeLineCell = ({ time, date }: TimeLineCellProps) => {
  const { taskStoreDispatch } = useTaskStore();
  const { settingStore } = useSettingStore();

  const inCoreTime = TimeLineUtils.inRange(new Date(time).getHours(), {
    from: settingStore.coreTime?.from,
    to: settingStore.coreTime?.to,
  });

  // creates a new task with default values
  const handleOnClick = () => {
    taskStoreDispatch({
      action: TaskStoreActionEnum.ADD,
      payload: {
        id: null,
        title: 'SomeTitle',
        date,
        period: {
          from: new Date(time),
          to: new Date(time + 600000),
        },
        labelId: 0,
        includeInMetric: true,
      },
    });
  };

  return (
    <CellButton inCoreTime={inCoreTime} type='button' onClick={handleOnClick} />
  );
};

type CellButtonProps = {
  inCoreTime?: boolean;
};

const CellButton = styled('button')<CellButtonProps>((props) => ({
  boxSizing: 'border-box',
  backgroundColor: props.inCoreTime
    ? props.theme.palette.blue.light
    : 'transparent',
  border: `1px solid ${props.theme.palette.blue.dark}`,
  cursor: 'pointer',
  '&:hover': {
    borderColor: props.theme.popper.light[100],
  },
}));
