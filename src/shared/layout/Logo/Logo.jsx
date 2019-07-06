import React from "react";
import image from "../../media/image.png";
import storage from "../../../utils/storage.utils";

// Components
import { Link } from "react-router-dom/";

const Logo = () => (
  <Link to="/" onClick={() => storage.store("user", {})}>
    <div>
      <img src={image} className="d-inline-block align-top" />
    </div>{" "}
  </Link>
);

export default Logo;
