import styled from '@emotion/styled';

export const AppContentContainer = styled.div((props) => ({
  maxWidth: '100%',
  maxHeight: '100%',
  height: '100%',
  boxSizing: 'border-box',
  padding: props.theme.spacing('small'),
  overflow: 'auto',
  backgroundColor: props.theme.palette.blue.main,
}));
