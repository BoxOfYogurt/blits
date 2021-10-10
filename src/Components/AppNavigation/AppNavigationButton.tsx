import styled from '@emotion/styled';

type ExtendButtonProps = {
  className?: string;
  extended: boolean;
  onClick: (extended: boolean) => void;
  icon?: string;
  children: React.ReactNode;
};

const ExtendButton = ({
  className,
  extended,
  onClick,
  icon,
  children,
}: ExtendButtonProps) => {
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    onClick(!extended);
  return (
    <button onClick={handleOnClick} className={className} type='button'>
      {children}
    </button>
  );
};

export const StyledButton = styled(ExtendButton)((props) => ({
  boxSizing: 'border-box',
  padding: props.theme.spacing('small'),
  backgroundColor: props.extended
    ? props.theme.palette.blue.dark
    : props.theme.palette.blue.main,
  height: '3rem',
  width: '100%',
  border: 'none',
  transitionDelay: '200ms',
  transition: 'background-color 200ms ease-in',
  marginTop: 'auto',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: props.theme.palette.blue.light,
  },
}));
