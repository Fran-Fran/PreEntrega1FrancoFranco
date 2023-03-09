import logo from '/public/logo.svg'
import styles from './navbar.module.scss'

const Navbar = ({ children }) => {
    return (
        <header className={styles.container}>
            <img className={styles.logo} src={logo} alt="Paw Pets" />
            <nav className={styles.navbar}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#catalogo">Catálogo</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
            { children }
        </header>
    )
}

export default Navbar