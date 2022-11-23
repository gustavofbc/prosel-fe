import styled from 'styled-components'

export const HeaderPage = styled.header`
  width: 100%;
  max-width: 1650px;
  background: var(--black);
  padding: 1rem;

  ul {
    display: flex;
    justify-content: end;
    list-style: none;
  }
  
  a {
    margin: 1rem;
    font-family: 'GTAmericaBold';
    font-size: .75rem;
    color: var(--white);

    &:hover{
      opacity: .8;
    }

    &.active {
      border-bottom: 2px solid var(--white);
    }
  }
`

export const Container = styled.header`
  width: 100%;
  max-width: 1650px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: .5rem 1rem;
  box-sizing: border-box;
  background: var(--yellow);

  #btn-mobile {
    display: none;
  }
`

export const Logo = styled.a`
  width: 200px;

  img {
    max-width: 9rem;
  }
`
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;

  li {
    display: block;
    text-align: center;
    padding: 1rem;
  }

  a {
    display: flex;
    align-items: center;
    
    &::after {
    border: 4px solid transparent;
    border-bottom: none;
    border-top-color: currentcolor;
    content: " ";
    display: block;
    height: 0;
    margin-left: 8px;
    margin-top: 4px;
    width: 0;
}
  }

`

export const StartedButton = styled.button`
  width: 9rem;
  height: 3.2rem;
  border: none;
  border-radius: .25rem;
  font-weight: bold;
  margin: 0 1rem;

  background: var(--blue);
  color: var(--white);
`