export const componentTemplate = `import * as React from 'react';

import * as S from './{fileComponent}.styled';

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
    <S.{component}Root>{children}</S.{component}Root>
  );
};
`;