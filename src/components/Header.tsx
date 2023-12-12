import React, { useState } from 'react'

const Header = () => {
  const [open, setopen] = useState(false);

  const handleMenuOpening = (e: any) => {
    e.preventDefault();
    setopen(!open);
  }

  return (
    <>
      <header className="header">
          <div className="top-menu">
            <a href="/" className="logo">
              <div className="logo__text">
                <span className="logo__text--top">Thomas</span><span className="logo__text--bottom">Supervil</span>
              </div>
            </a>

            <button className="menu-trigger" onClick={(e) => handleMenuOpening(e)}>
              {open ? (
                <span className="menu-trigger__text">fermer</span>
              ) : (
                <span className="menu-trigger__text">menu</span>
              )}
            </button>
          </div>
        </header>

        <div className={open ? "overlay__menu overlay__menu--open" : "overlay__menu"}>
          <nav>
            <ul>
              <li>
                <a href="">
                  01. Experiences
                </a>
              </li>
              <li>
                <a href="">
                  02. Diplomes
                </a>
              </li>
              <li>
                <a href="">
                  03. Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
    </>
  )
}

export default Header