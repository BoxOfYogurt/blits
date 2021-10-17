import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { AppIcon } from '../../AppDesignComponents/AppIcon/AppIcon';
import { BasicContainer } from '../../StyledComponents';
import { DateUtils } from '../../util/DateUtils';

type TimeLineSelectorProps = {
  onDateChange: (selectedDate: Date) => void;
  selectedDate: Date;
};

export const TimeLineSelector = ({
  onDateChange,
  selectedDate,
}: TimeLineSelectorProps) => {
  const theme = useTheme();
  console.log(selectedDate);
  const handleNewSelection = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      onDateChange(new Date(selectedDate.setDate(selectedDate.getDate() - 7)));
    } else {
      onDateChange(new Date(selectedDate.setDate(selectedDate.getDate() + 7)));
    }
  };

  return (
    <BasicContainer row>
      <BasicButton type='button' onClick={() => handleNewSelection('prev')}>
        <AppIcon
          name='angle-left'
          iconColor={theme.palette.grey.light}
          size='regular'
        />
      </BasicButton>
      <BasicBox>
        <p>{DateUtils.formatMonth(selectedDate)}</p>
      </BasicBox>
      <BasicButton type='button' onClick={() => handleNewSelection('next')}>
        <AppIcon
          name='angle-right'
          iconColor={theme.palette.grey.light}
          size='regular'
        />
      </BasicButton>
    </BasicContainer>
  );
};

const BasicButton = styled('button')((props) => ({
  boxSizing: 'border-box',
  padding: `${props.theme.spacing('xsmall')} ${props.theme.spacing('small')}`,
  width: 'min-content',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
}));

const BasicBox = styled('div')((props) => ({
  display: 'flex',
  boxSizing: 'border-box',
  padding: `${props.theme.spacing('xsmall')} ${props.theme.spacing('small')}`,
  height: '100%',
  width: 'min-content',
  justifyContent: 'center',
  alignItems: 'center',
  '& p': {
    fontWeight: 600,
    fontSize: '14px',
    '&:first-letter': {
      textTransform: 'capitalize',
    },
  },
}));
