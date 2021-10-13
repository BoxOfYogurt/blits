import styled from '@emotion/styled';
import React from 'react';
import { IconNames } from './iconNames';
import { Icons } from './Icons';

type IconSize = 'xsmall' | 'small' | 'regular' | 'large' | 'xlarge';

export type AppIconProps = {
  name: IconNames;
  size: IconSize;
  className?: string;
  iconColor?: string;
};

const IconComponent = ({ name, className }: AppIconProps) => {
  return <span className={className}>{Icons[name]}</span>;
};

export const AppIcon = styled(IconComponent)((props) => ({
  display: 'flex',
  '& svg': {
    fill: props.iconColor ? props.iconColor : props.theme.palette.grey.light,
    height: iconSize(props.size),
    width: 'min-content',
  },
}));

const iconSize = (size: IconSize) => {
  switch (size) {
    case 'xsmall':
      return '0.2rem';
    case 'small':
      return '0.5rem';
    case 'regular':
      return '1rem';
    case 'large':
      return '1.5rem';
    case 'xlarge':
      return '3rem';
  }
};
