import styled from '@emotion/styled';
import { WorkLabel } from '../../AppStore/TaskStore/TaskStore.types';

export const LabelBox = (props: WorkLabel) => {
  return <LabelContainer labelColor={props.color}></LabelContainer>;
};

type LabelContainerProps = {
  labelColor: string;
};

const LabelContainer = styled.div<LabelContainerProps>((props) => ({
  height: '10rem',
  borderRadius: props.theme.radi('small'),
  width: '100%',
  backgroundColor: props.theme.palette.blue.main,
  boxSizing: 'border-box',
  padding: props.theme.spacing('xsmall'),
  border: `2px solid ${props.labelColor}`,
  display: 'grid',
  gridTemplateRows: `repeat(2, ${props.theme.spacing('regular')}) 1fr`,

  gridTemplateColumns: '1fr',
}));
