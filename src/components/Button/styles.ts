import styled from 'styled-components'

export const StartedButton = styled.button`
  width: 9rem;
  height: 3.2rem;
  border: none;
  border-radius: .25rem;
  font-weight: bold;

  background: var(--blue);
  color: var(--white);

  &:hover {
    background: var(--blue-300);
  }
`