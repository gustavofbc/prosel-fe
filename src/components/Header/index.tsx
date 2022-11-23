import './styles'
import { Container, HeaderPage, Logo, Menu, Nav, SubMenu } from './styles';
import BettermentLogo from '../../assets/Betterment-Logo.png'
import { AiOutlineRight } from 'react-icons/ai'
import Button from '../Button';

export default function Header() {
    function toggleMenu(event: any) {
        if (event.type === "touchstart") event.preventDefault();

        const nav = document.getElementById('nav');
        if (nav) {
            nav.classList.toggle('ativo');
            // ! ACESSIBILIDADE: serve para o leitor de HTML da página identificar quando o elemento pode ser expandido (se a classe ativo existir, significa que sim e está expadido, se não, permanece como "false")
            const ativado = nav.classList.contains('ativo');
            event.currentTarget.setAttribute('aria-expanded', ativado);
            //  ! ACESSIBILIDADE: serve para alterar o texto do leitor para o botão. Se está aberto o botão terá o label de fechar, se está fechado o terá o valor de abrir.
            if (ativado) {
                event.currentTarget.setAttribute('aria-label', "Fechar menu")
            } else {
                event.currentTarget.setAttribute('aria-label', "Abrir menu")
            }
        }
    }

    return (
        <>
            <HeaderPage>
                <ul>
                    <li><a href="/" className='header-item active'>INDIVIDUALS</a></li>
                    <li><a href="/" className='header-item'>EMPLOYERS</a></li>
                    <li><a href="/" className='header-item'>ADVISORS</a></li>
                </ul>
            </HeaderPage>
            <Container>
                <Logo id="logo" href='/'>
                    <img src={BettermentLogo} alt="Betterment Logo" />
                </Logo>

                <Nav id="nav">
                    <button aria-label="Abrir menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="false" onClick={(event) => toggleMenu(event)}>
                        <span id="hamburguer"></span>
                    </button>
                    <div className='content'>

                        <Menu id="menu" role="menu">
                            <li>
                                <a className='item'>Investing</a>
                                <SubMenu className='options'>
                                    <li><a href="/">Automated investing <AiOutlineRight className='arrow' size={12} /></a></li>
                                    <li><a href="/">IRAs and 401(k) <AiOutlineRight className='arrow' size={12} /></a></li>
                                    <li><a href="/">Socially responsible investing <AiOutlineRight className='arrow' size={12} /></a></li>
                                    <li><a href="/">Crypto investing <AiOutlineRight className='arrow' size={12} /></a></li>
                                </SubMenu>
                            </li>
                            <li>
                                <a className='item'>Cash</a>
                                <SubMenu className='options'>
                                    <li><a href="/">High-yield cash account <AiOutlineRight className='arrow' size={12} /></a></li>
                                    <li><a href="/">Checking account <AiOutlineRight className='arrow' size={12} /></a></li>
                                    <li><a href="/">Rewards <AiOutlineRight className='arrow' size={12} /></a></li>
                                </SubMenu>
                            </li>
                            <li>
                                <a className='item'>Planning</a>
                                <SubMenu className='options'>
                                    <li><a href="/">Retirement Planning <AiOutlineRight className='arrow' size={12} /></a></li>
                                    <li><a href="/">Track your goals <AiOutlineRight className='arrow' size={12} /></a></li>
                                    <li><a href="/">All-in-one dashboard <AiOutlineRight className='arrow' size={12} /></a></li>
                                </SubMenu>
                            </li>
                            <li>
                                <a className='item'>About</a>
                                <SubMenu className='options'>
                                    <li><a href="/">Who we are <AiOutlineRight className='arrow' size={12} /></a></li>
                                    <li><a href="/">Investment philosophy <AiOutlineRight className='arrow' size={12} /></a></li>
                                    <li><a href="/">Pricing <AiOutlineRight className='arrow' size={12} /></a></li>
                                    <li><a href="/">Press <AiOutlineRight className='arrow' size={12} /></a></li>
                                </SubMenu>
                            </li>
                            <li>
                                <a className='item'>Education</a>
                                <SubMenu className='options'>
                                    <li><a href="/">For individuals and families <AiOutlineRight className='arrow' size={12} /></a></li>
                                    <li><a href="/">For employees <AiOutlineRight className='arrow' size={12} /></a></li>
                                    <li><a href="/">Help center <AiOutlineRight className='arrow' size={12} /></a></li>
                                    <li><a href="/">FAQ <AiOutlineRight className='arrow' size={12} /></a></li>
                                </SubMenu>
                            </li>
                        </Menu>
                        <div>
                            <a href="/" className='login'>Log in</a>
                            <Button />
                        </div>
                    </div>
                </Nav>
            </Container>
        </>
    )
}