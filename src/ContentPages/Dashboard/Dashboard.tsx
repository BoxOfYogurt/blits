import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { AppContentContainer } from '../../Components/AppContentContainer/AppContentContainer';
import { Timeline } from '../../Components/TimeLine/TimeLine';
import { StyledContainer } from '../../StyledComponents';

type DashboardProps = {
  active: boolean;
  className?: string;
};

const DashboardComponent = ({ className }: DashboardProps) => {
  const theme = useTheme();
  return (
    <AppContentContainer>
      <div className={className}>
        <StyledContainer height='100%'>
          <Timeline />
        </StyledContainer>
      </div>
    </AppContentContainer>
  );
};

export const Dashboard = styled(DashboardComponent)((props) => ({
  height: '100%',
  width: '100%',
}));
