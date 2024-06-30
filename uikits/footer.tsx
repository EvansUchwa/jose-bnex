import React from "react";
import {
  PhFacebookLogoBold,
  PhInstagramLogoBold,
  PhLinkedinLogoBold,
  PhTwitterLogoBold,
} from "./icons";

function Footer() {
  return (
    <footer>
      <div>
        <a href="">
          <PhFacebookLogoBold />{" "}
        </a>
        <a href="">
          <PhLinkedinLogoBold />{" "}
        </a>
        <a href="">
          <PhInstagramLogoBold />{" "}
        </a>
        <a href="">
          <PhTwitterLogoBold />{" "}
        </a>
      </div>
      <p>© 2024 BNEX Group. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
