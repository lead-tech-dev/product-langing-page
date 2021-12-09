import React, { Fragment, useContext, useEffect, useReducer } from "react";
import IconGroup from "src/components/header/icon-group";
import Logo from "src/components/header/logo";
import MobileHeader from "src/components/header/mobile-header";
import Navbar from "src/components/header/navbar";
import IconMenu from "src/components/icons/icon-menu";
import { ProductContext } from "src/context/productContext";

const Header = () => {
  const { state, dispatch } = useContext(ProductContext);

  const handleMobile = (e: any) => {
    e.preventDefault();
    const target = document.querySelector(".mobile-area");
    target?.classList.toggle("mobile-open");
  };
  return (
    <Fragment>
      <div className="header-area">
        <div className="header-left">
          <div className="icon-menu" onClick={(e) => handleMobile(e)}>
            <IconMenu />
          </div>
          <Logo />
          <Navbar />
        </div>
        <div className="header-right">
          <IconGroup products={state.products} />
        </div>
      </div>
      <MobileHeader handleMobile={handleMobile} />
    </Fragment>
  );
};

export default Header;
