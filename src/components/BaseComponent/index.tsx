import * as Styled from './styles';

export type BaseComponentProps = {
  title?: string;
};

export function BaseComponent({ title = 'Change me' }: BaseComponentProps) {
  return (
    <Styled.Wrapper>
      <h1>{title}</h1>
    </Styled.Wrapper>
  );
}
