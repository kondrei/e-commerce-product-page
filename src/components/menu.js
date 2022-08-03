import '../css/menu.css';

const openMenu = () => {
    console.log('haha');
}

const Menu = () => {
    return (
        <nav>
            <div className="burger-lines" onClick={openMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="logo">
                <img src="../images/logo.svg" alt="" />
            </div>
            <div className="mobile-menu">
                <ul>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="cart right">
                <img src="../images/icon-cart.svg" alt="" />
            </div>
            <div className="avatar">
                <img src="../images/image-avatar.png" alt="" />
            </div>
        </nav>
    )
}

export default Menu;