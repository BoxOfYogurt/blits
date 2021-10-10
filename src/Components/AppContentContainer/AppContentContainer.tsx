import styled from '@emotion/styled';

type ContentContainerProps = {
  children: React.ReactNode;
  className?: string;
  bg?: string;
};

const ContentContainer = ({ children, className }: ContentContainerProps) => {
  return <div className={className}>{children}</div>;
};

export const AppContentContainer = styled(ContentContainer)((props) => ({
  maxWidth: '100%',
  maxHeight: '100%',
  height: '100%',
  boxSizing: 'border-box',
  padding: props.theme.spacing('small'),
  overflow: 'auto',
  backgroundColor: props.bg ? props.bg : props.theme.palette.blue.main,
}));
