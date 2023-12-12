import React from 'react'

const Top = () => {
  return (
    <section className="top">
      <h1 className="top__title">
        Developpeur web <br/><span>frontend</span>
      </h1>
      <div className="top__main">
        <div className="top__main--left">
          <div className="top__texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        
        <div className="top__main--right">
          <div>
            <div className="top__right--image">
              <img src="/imgs/thomas.jpg" alt="" width="350"/>
            </div>
            <div className="magnetize-button">
              <div className="innerCircle"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="moving-text">
        <p className="moving-text__text">React.js Next.js HTML SCSS Javascript Prestashop Wordpress Drupal React.js Next.js HTML SCSS Javascript Prestashop Wordpress Drupal</p>
      </div>
    </section>
  )
}

export default Top