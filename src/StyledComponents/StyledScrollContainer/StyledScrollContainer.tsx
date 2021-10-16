import styled from '@emotion/styled';

type BasicProps = {
  pl?: boolean;
  pt?: boolean;
  pr?: boolean;
  pb?: boolean;
};

export const StyledScrollContainer = styled.div<BasicProps>((props) => ({
  position: 'relative',
  backgroundColor: props.theme.palette.blue.dark,
  boxSizing: 'border-box',
  border: `10px solid ${props.theme.palette.blue.dark}`,
  borderTop: 'none',
  borderRight: 'none',
  borderLeft: 'none',
  width: '100%',
  height: '100%',
  borderRadius: props.theme.spacing('xsmall'),
  overflow: 'auto',
  '&::-webkit-scrollbar-thumb': {
    background: props.theme.palette.blue.light,
    borderColor: props.theme.palette.blue.dark,
    // boxShadow: `inset 0 0 5px ${props.theme.palette.black.light}`,
  },
  '::-webkit-scrollbar-corner': {
    backgroundColor: 'transparent',
  },
  paddingTop: props.pt ? props.theme.spacing('xsmall') : '0',
  paddingRight: props.pr ? props.theme.spacing('xsmall') : '0',
  paddingBottom: props.pb ? props.theme.spacing('xsmall') : '0',
  paddingLeft: props.pl ? props.theme.spacing('xsmall') : '0',
}));
