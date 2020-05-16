export const componentFile = `
import React, { ReactNode, ReactElement } from 'react';

import * as S from './styled';

interface Props {
  children: ReactNode;
}

const {component} = (props: Props): ReactElement => {
  const {
    children,
  } = props;

  return (
    <S.Comp>{children}</S.Comp>
  );
};

export default {component};
`;
