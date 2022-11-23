import './styles'
import { Container, HeaderPage, Logo, Menu, Nav, StartedButton } from './styles';
import BettermentLogo from '../../assets/Betterment-Logo.png'

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
                    <li><a href="/" className='active'>INDIVIDUALS</a></li>
                    <li><a href="/">EMPLOYERS</a></li>
                    <li><a href="/">ADVISORS</a></li>
                </ul>
            </HeaderPage>
            <Container>
                <Logo id="logo" href='/'>
                    <img src={BettermentLogo} alt="Betterment Logo" />
                </Logo>

                <Nav id="nav">
                    <button aria-label="Abrir menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="false" onClick={(event) => toggleMenu(event)}>Menu
                        <span id="hamburguer"></span>
                    </button>
                    <Menu id="menu" role="menu">
                        <li><a href="/">Investing</a></li>
                        <li><a href="/">Cash</a></li>
                        <li><a href="/">Planning</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Education</a></li>
                    </Menu>
                    <div>
                        <a href="/">Log in</a>
                        <StartedButton>Get started</StartedButton>
                    </div>
                </Nav>
            </Container>
        </>
    )
}