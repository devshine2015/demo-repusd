import Connectbutton from './Connectbutton'

function Topmenu() {
    return (
        <header id="header" className="logo_menu">
            <nav className="navbar">
                <a className="navbar-brand change_logo" href="#1"><img src="img/logo_icon.png" className="img-fluid" alt="" /> <b>Rep</b>USD</a>
                <Connectbutton/>
            </nav>
        </header>
    );
}

export default Topmenu;
