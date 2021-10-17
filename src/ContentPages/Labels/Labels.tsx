import styled from '@emotion/styled';
import React from 'react';
import { useTaskStore } from '../../AppStore';
import { WorkLabel } from '../../AppStore/TaskStore/TaskStore.types';
import { AppContentContainer } from '../../Components/AppContentContainer/AppContentContainer';
import { LabelBox } from '../../Components/LabelBox/LabelBox';

type LabelsProps = {};

export const Labels = () => {
  const { taskStore } = useTaskStore();

  const labelContainerMemoProps: WorkLabel = React.useMemo(
    () => ({
      color: labelColor.Purple,
      includeInMetric: true,
      labelIcon: 'align-left',
      labelId: 2,
      labelName: 'Feature',
      tasks: [1, 2, 3],
    }),
    []
  );
  return (
    <ScrollContainer>
      <AppContentContainer>
        <FlexContainer>
          <LabelBox {...labelContainerMemoProps} />
          <LabelBox {...labelContainerMemoProps} />
          <LabelBox {...labelContainerMemoProps} />
          <LabelBox {...labelContainerMemoProps} />
          <LabelBox {...labelContainerMemoProps} />
          <LabelBox {...labelContainerMemoProps} />
          <LabelBox {...labelContainerMemoProps} />
        </FlexContainer>
      </AppContentContainer>
    </ScrollContainer>
  );
};

const FlexContainer = styled.div((props) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${props.theme.spacing(
    'xlarge'
  )}, 1fr))`,
  width: 'min-content',
  maxWidth: '100%',
  height: 'min-content',
  rowGap: props.theme.spacing('small'),
  columnGap: props.theme.spacing('small'),
  justifyItems: 'center',
}));

type BasicProps = {
  pl?: boolean;
  pt?: boolean;
  pr?: boolean;
  pb?: boolean;
};

const ScrollContainer = styled.div<BasicProps>((props) => ({
  position: 'relative',
  backgroundColor: props.theme.palette.blue.main,
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  borderRadius: props.theme.spacing('xsmall'),
  overflow: 'auto',
  '&::-webkit-scrollbar-thumb': {
    borderColor: props.theme.palette.blue.main,
    backgroundColor: props.theme.palette.blue.light,
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

const Box = styled('div')((props) => ({
  height: props.theme.spacing('xlarge'),
  borderRadius: props.theme.radi('small'),
  width: props.theme.spacing('xlarge'),
  backgroundColor: 'red',
}));

const labelColor = {
  'Blue Bell': '#8a89c0',
  Tuscany: '#cda2ab',
  'Mountain Meadow': '#09bc8a',
  Ming: '#006d77',
  'Non Photo Blue': '#8ae1fc',
  Purple: '#531cb3',
  Crimson: '#d91e36',
  'Antique Ruby': '#8b2635',
  'Carrot Orange': '#f18f01',
  Cream: '#f1ffc4',
};
