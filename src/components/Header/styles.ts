import styled from 'styled-components'

export const HeaderPage = styled.header`
  width: 100%;
  max-width: 1650px;
  background: var(--black);
  padding: 0.8rem;

  ul {
    display: flex;
    justify-content: end;
    list-style: none;
  }
  
  .header-item {
    margin: 1rem;
    font-family: 'GTAmericaBold';
    font-size: .75rem;
    padding-bottom: .2rem;
    color: var(--white);

    &:hover{
      opacity: .8;
    }

    &.active {
      border-bottom: 2px solid var(--white);
    }
  }

  @media (max-width: 1075px){
    display: none;
  }
`

export const Container = styled.header`
  width: 100%;
  max-width: 1650px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: .5rem 2rem;
  box-sizing: border-box;
  background: var(--yellow);

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

  .login {
    border-bottom: 2px solid var(--yellow);
    padding-bottom: .25rem;
    margin-right: 1rem;
    transition: .3s;
    
    &:hover {
      border-bottom: 2px solid var(--blue);
    }

  }

  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  #btn-mobile {
    display: none;
  }

  @media (max-width: 1075px) {
      justify-content: end;
      
      .content{
      background: red;
      display: block;
      position: absolute;
      width: 100%;
      top: 70px;
      right: 0px;
      background: #e7e7e7;
      z-index: 1000;
      /* tamanho inicial do menu */
      height: 0px;
      transition: 0.6s;
      /* macete: para esconder o menu pois não pode ter mudança de display nesse elemento quando a classe "ativo" é adiciona, caso haja a transição não funciona! */
      visibility: hidden;
      /* USABILIDADE: quando a quantidade de itens do menu é muito grande e maior que a tela, este atributo cria um scroll para que naveguemos até o fim */
      overflow-y: hidden;
    
      a {
        padding: 1rem 0rem;
        margin: 0rem 1rem;
        border-bottom: 2px solid rgba(0, 0, 0, 0.05);
      }

      
    }

  #btn-mobile {
    display: flex;
    background: red;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;
    gap: 0.5rem;
  }

  #hamburguer {
    display: block;
    border-top: 2px solid;
    width: 20px;
  }

  #hamburguer::after, #hamburguer::before {
    content: '';
    display: block;
    width: 20px;
    height: 2px;
    /* pega o valor da cor atual do elemento e aplica aqui*/
    background: currentColor;
    margin-top: 5px;
    transition: 0.3s;
    /* serve para que o #nav.ativo #hamburguer::after possa atribur o "top" pois só funciona em position fixed, relative ou absolute */
    position: relative;
  }

  &.ativo {
    #hamburguer {
    /* este é o elemento criado no #hamburguer */
    border-top: transparent;
  }
}
  
  &.ativo {
    #hamburguer::before {
      transform: rotate(135deg);
    }
  }

  &.ativo {
    #hamburguer::after {
      transform: rotate(-135deg);
      top: -7px;
    }
  }
  
  
  }

`

export const Menu = styled.ul`
  display: flex;
  list-style: none;

  li {
    display: block;
    text-align: center;
    padding: 1rem;
    transition: 5s;

    &:hover {
      .options{
        display: block;
      }
    }
  }

  a.item {
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

  @media (max-width: 1075px){
    background: red;
  }

`

export const SubMenu = styled.ul`
  display: none;
  color: var(--black);
  background-color: white;
  border-radius: .25rem;
  box-shadow: 0px 0px 4px 4px rgba(0,0,0, 0.1);
  
  position: absolute;
  margin-top: 1rem;
  margin-left: -10px;

  li  {
    width: 100%;
    text-align: start;

    &:hover {
      color: var(--blue);

      a {
        color: var(--blue);
      }

      .arrow {
        color: var(--blue);
      }
    }

    .arrow {
      color: white;
    }

  }
  
`