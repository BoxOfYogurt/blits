import styled from '@emotion/styled';
import React from 'react';

type ContainerMenuProps = {
  className?: string;
  height?: string;
  fixed?: boolean;
  children: React.ReactNode;
};

const ContainerMenuComponent = ({
  className,
  children,
}: ContainerMenuProps) => {
  return <div className={className}>{children}</div>;
};

export const ContainerMenu = styled(ContainerMenuComponent)((props) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  alignSelf: 'flex-start',
  width: 'auto',
  top: 0,
  position: props.fixed ? 'sticky' : 'initial',
  backgroundColor: props.theme.palette.blue.dark,
  height: props.height ? props.height : props.theme.spacing('regular'),
  zIndex: 999,
}));
