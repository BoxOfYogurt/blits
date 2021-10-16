import styled from '@emotion/styled';
import { useState } from 'react';
import { ContainerMenu } from '../../AppDesignComponents/ContainerMenu/ContainerMenu';
import { IconMenuLabel } from '../../AppDesignComponents/IconMenuLabel/IconMenuLabel';
import { AppContentContainer } from '../../Components/AppContentContainer/AppContentContainer';
import { Timeline } from '../../Components/TimeLine/TimeLine';
import { TimeLineSelector } from '../../Components/TimeLineSelector/TimeLineSelector';
import { StyledScrollContainer } from '../../StyledComponents';

export const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  /** handle method to set new selected date */
  const handleSelectionDate = (dateSelected: Date) =>
    setSelectedDate(dateSelected);

  console.log('selected Date', selectedDate);
  return (
    <AppContentContainer>
      <DashboardLayout>
        <TimeLineSelector
          onDateChange={handleSelectionDate}
          selectedDate={selectedDate}
        />
        <StyledScrollContainer>
          <ContainerMenu fixed>
            <IconMenuLabel label='Add task' icon='plus' onClick={() => {}} />
          </ContainerMenu>
          <Timeline selectedDate={selectedDate} />
        </StyledScrollContainer>
      </DashboardLayout>
    </AppContentContainer>
  );
};

const DashboardLayout = styled('div')((props) => ({
  height: '100%',
  width: '100%',
  display: 'grid',
  gridTemplateRows: `${props.theme.spacing('regular')} 1fr`,
  rowGap: props.theme.spacing('xsmall'),
}));
