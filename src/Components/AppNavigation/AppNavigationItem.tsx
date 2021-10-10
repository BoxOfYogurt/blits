import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { AppIcon } from '../AppIcon/AppIcon';
import { IconNames } from '../AppIcon/iconNames';
import { AppRoutes } from './util';

type AppNavigationItemType = {
  routeName: AppRoutes;
  className?: string;
  onClick: (routeName: AppRoutes) => void;
  iconName: IconNames;
  active?: boolean;
};

export const AppNavigationItem = ({
  className,
  onClick,
  routeName,
  iconName,
  active,
}: AppNavigationItemType) => {
  const theme = useTheme();
  const handleOnClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    onClick(routeName);
  };
  return (
    <li className={className} onClick={handleOnClick}>
      <AppIcon
        size='regular'
        name={iconName}
        iconColor={active ? theme.popper.punch[200] : theme.popper.light[200]}
      />
    </li>
  );
};

type StyledNavigationItemProps = {
  active?: boolean;
};

export const StyledNavigationItem = styled(
  AppNavigationItem
)<StyledNavigationItemProps>(
  {
    boxSizing: 'border-box',
    height: '3rem',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    transition: 'background-color 300ms ease',
    cursor: 'pointer',
  },
  (props) => ({
    backgroundColor: props.active
      ? props.theme.palette.blue.main
      : props.theme.palette.blue.dark,
    padding: props.theme.spacing('small'),
    '&:hover': {
      backgroundColor: props.active
        ? props.theme.palette.blue.main
        : props.theme.palette.blue.light,
    },
  })
);
