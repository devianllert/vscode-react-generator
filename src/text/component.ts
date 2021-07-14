export const componentFile = `
import * React from 'react';

import * as S from './styled';

export interface {component}Props {
  /**
   * The content
   */
  children: React.ReactNode;
}

export const {component} = (props: {component}Props): JSX.Element => {
  const {
    children,
  } = props;

  return (
    <S.Comp>{children}</S.Comp>
  );
};
`;
