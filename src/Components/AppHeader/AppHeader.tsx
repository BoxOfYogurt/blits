import styled from '@emotion/styled';

type HeaderComponentProps = {
  className?: string;
};
const HeaderComponent = ({ className }: HeaderComponentProps) => {
  return <div className={className}>Header</div>;
};

export const AppHeader = styled(HeaderComponent)((props) => ({
  height: props.theme.spacing('regular'),
  backgroundColor: props.theme.palette.blue.dark,
  width: '100%',
  gridColumn: '1/3',
}));
