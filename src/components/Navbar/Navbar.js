import './Navbar.css'
import elevenlogo from './assets/Elevenlogo.png'
import lupa from './assets/lupa.png'
import corazon from './assets/corazon.png'
import instagram from './assets/Instagram.png'
import facebook from './assets/Facebook.png'
import tiktok from './assets/Tiktok.png'
import CartWidget from '../CartWidget/CartWidget.js'

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark flex-column p-3 text-white navegador fixed-top'>
            <div className='container flex-lg-column'>
                <a href="../index.html" class="navbar-brand">
                    <img src={elevenlogo} alt="elevenLogo" className='elevenLogo'/>
                </a>
                <button className='navbar-toggler' type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id="navbarTogglerDemo02">
                    <ul className='navbar-nav me-auto mb-2 flex-lg-column'>
                        {/* <!-- ICONOS LUPA CARRITO Y CORAZON --> */}
                        <div className='container panelNav'>
                            <a href="">
                                <img src={lupa} alt="Lupa"/>
                            </a>
                            <a className='active2' href="./carrito.html">
                                <CartWidget />
                            </a>
                            <a href="">
                                <img src={corazon} alt="Corazon"/>
                            </a>
                        </div>
                        {/* <!-- CATEGORIAS --> */}
                        <li className='nav-item'>
                            <a className='nav-link' aria-current="page" href="./nuevosIngresos.html">NUEVOS INGRESOS</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="./conjuntos.html">Conjuntos</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="./blusasytops.html">Blusas y Tops</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="./pantalones.html">Pantalones</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="./sweaters.html">Sweaters y Cárdigans</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">Básicos</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">Remeras</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">Vestidos y Monos</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">Faldas y Shorts</a>
                        </li>
                        <li className='linea'></li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">ACCESORIOS</a>
                        </li>
                        <li className='linea'></li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">OFF SALE</a>
                        </li>
                        <li className='linea'></li>
                        <li className='nav-item'>
                            <a className='nav-link fw-bold' href="./locales.html">LOCALES</a>
                        </li>
                        <li className='linea'></li>
                        <li className='nav-item'>
                            <a className='nav-link' href="./contacto.html">CONTACTO</a>
                        </li>
                        <li className='linea'></li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">Seguinos En:</a>
                        </li>
                        {/* <!-- ICONOS REDES --> */}
                        <div class="container Redes">
                            <a href="https://www.instagram.com/eleven11ok/" target="_blank">
                                <img src={instagram} alt="Instagram Icono" className='iconoRedesA'/>
                            </a>
                            <a href="https://www.facebook.com/eleven11ok" target="_blank">
                                <img src={facebook} alt="Facebook Icono" className='iconoRedesB'/>
                            </a>
                            <a href="https://www.tiktok.com/@eleven11ok" target="_blank">
                                <img src={tiktok} alt="Tiktok Icono" className='iconoRedesC'/>
                            </a>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;