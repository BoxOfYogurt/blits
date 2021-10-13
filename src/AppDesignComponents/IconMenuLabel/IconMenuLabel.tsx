import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { AppIcon } from '../AppIcon/AppIcon';
import { IconNames } from '../AppIcon/iconNames';

type IconMenuItemProps = {
  icon: IconNames;
  label: string;
  onClick: () => void;
  className?: string;
};

const IconMenuComponent = ({
  icon,
  label,
  onClick,
  className,
}: IconMenuItemProps) => {
  const theme = useTheme();

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick();
  };
  return (
    <button className={className} type='button' onClick={handleOnClick}>
      <AppIcon
        iconColor={theme.palette.grey.light}
        name={icon}
        size='regular'
      />
      <p>{label}</p>
    </button>
  );
};

export const IconMenuLabel = styled(IconMenuComponent)((props) => ({
  display: 'grid',
  border: 'none',
  alignItems: 'center',
  height: 'min-content',
  columnGap: props.theme.spacing('small'),
  backgroundColor: 'transparent',
  gridTemplateColumns: `1fr 1fr`,
  width: 'min-content',
  boxSizing: 'border-box',
  padding: props.theme.spacing('xsmall'),
  cursor: 'pointer',
  '& p': {
    color: props.theme.palette.grey.light,
    whiteSpace: 'nowrap',
  },
}));
