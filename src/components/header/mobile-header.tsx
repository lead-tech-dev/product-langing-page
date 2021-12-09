import React, { FC } from "react";
import IconClose from "../icons/icon-close";

interface MobileHeaderProps {
  handleMobile: (e: any) => void;
}
const MobileHeader: FC<MobileHeaderProps> = ({ handleMobile }) => {
  return (
    <div className="mobile-area" onClick={(e) => handleMobile(e)}>
      <div className="mobile-content">
        <div className="mobile-close">
          <IconClose />
        </div>
        <div className="mobile-nav">
          <ul>
            <li>
              <a href="#0">Collections</a>
            </li>

            <li>
              <a href="#0">Mens</a>
            </li>

            <li>
              <a href="#0">Womans</a>
            </li>

            <li>
              <a href="#0">About</a>
            </li>

            <li>
              <a href="#0">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
