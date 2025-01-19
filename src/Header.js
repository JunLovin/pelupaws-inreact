import './App.css'
import Logo from './assets/img/logo.png'
import Moon from './assets/img/moon.svg'
import Sun from './assets/img/sun.svg'

function Header() {
    function toggleDarkMode() {
        const body = document.body;
        body.classList.toggle('dark');
    }
    return (
        <>
            <header>
                    <a href="https://github.com/JunLovin" target="_blank" rel="noreferrer"><img src={Logo} alt="pelupawsLogo" className="header-logo"/></a>
                <nav>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#info">Información</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    <img src={Moon} alt="Change to dark mode" className="moon" onClick={toggleDarkMode}/>
                    <img src={Sun} alt="Change to light mode" className="sun" onClick={toggleDarkMode}/>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;