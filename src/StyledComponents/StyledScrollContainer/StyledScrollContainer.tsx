import styled from '@emotion/styled';

export const StyledScrollContainer = styled.div((props) => ({
  position: 'relative',
  backgroundColor: props.theme.palette.blue.dark,
  boxSizing: 'border-box',
  width: '100%',
  height: '50vh',
  padding: '0 0 1em 1em',
  borderRadius: props.theme.spacing('xsmall'),
  overflow: 'auto',
  '&::-webkit-scrollbar-thumb': {
    background: props.theme.palette.blue.light,
    boxShadow: `inset 0 0 5px ${props.theme.palette.black.light}`,
  },
  '::-webkit-scrollbar-corner': {
    backgroundColor: 'transparent',
  },
}));
