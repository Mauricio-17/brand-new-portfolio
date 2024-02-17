import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const handleLinkClick = (event, offset) => {
    event.preventDefault();
    
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - offset;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });

      setActive(false); // Close the menu after clicking a link
    }
  };

  return (
    <header className={`header`}>
      <div className="container header_menu">
        <div className="header_logo">
          <a href="/" className="mau" >MSolis</a>
          <button
            onClick={() => {
              setActive(!active);
            }}
            className="btn_menu"
          >
            Menu
          </button>
        </div>
        <nav className={`header_nav ${active ? "activate_btn" : ""} `}>
          <a onClick={(e) => handleLinkClick(e, 100)} href="#inicio">Inicio</a>
          <a onClick={(e) => handleLinkClick(e, 85)} href="#acerca_de">Acerca De</a>
          <a onClick={(e) => handleLinkClick(e, 65)} href="#servicios">Servicios</a>
          <a onClick={(e) => handleLinkClick(e, 50)} href="#proyectos">Proyectos</a>
          <a onClick={(e) => handleLinkClick(e, 100)} href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
