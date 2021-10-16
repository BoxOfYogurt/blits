import styled from '@emotion/styled';

type BasicContainerProps = {
  row?: boolean;
  column?: boolean;
  pl?: boolean;
  pt?: boolean;
  pr?: boolean;
  pb?: boolean;
};

export const BasicContainer = styled('div')<BasicContainerProps>((props) => ({
  display: 'flex',
  flexDirection: props.row ? 'row' : props.column ? 'column' : 'unset',
  backgroundColor: props.theme.palette.blue.dark,
  width: '100%',
  boxSizing: 'border-box',
  borderRadius: props.theme.spacing('xsmall'),
  paddingTop: props.pt ? props.theme.spacing('xsmall') : '0',
  paddingRight: props.pr ? props.theme.spacing('xsmall') : '0',
  paddingBottom: props.pb ? props.theme.spacing('xsmall') : '0',
  paddingLeft: props.pl ? props.theme.spacing('xsmall') : '0',
}));
