import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { ContainerMenu } from '../../AppDesignComponents/ContainerMenu/ContainerMenu';
import { IconMenuLabel } from '../../AppDesignComponents/IconMenuLabel/IconMenuLabel';
import { AppContentContainer } from '../../Components/AppContentContainer/AppContentContainer';
import { Timeline } from '../../Components/TimeLine/TimeLine';
import { StyledScrollContainer } from '../../StyledComponents';

type DashboardProps = {
  active: boolean;
  className?: string;
};

const DashboardComponent = ({ className }: DashboardProps) => {
  const theme = useTheme();
  return (
    <AppContentContainer>
      <div className={className}>
        <StyledScrollContainer>
          <ContainerMenu fixed>
            <IconMenuLabel
              label='Add task'
              icon='plus'
              onClick={() => {
                console.log('clicked');
              }}
            />
          </ContainerMenu>
          <Timeline />
        </StyledScrollContainer>
      </div>
    </AppContentContainer>
  );
};

export const Dashboard = styled(DashboardComponent)((props) => ({
  height: '100%',
  width: '100%',
}));
