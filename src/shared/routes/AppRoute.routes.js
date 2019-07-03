import React, { Fragment } from "react";
// ? Container
import Login from "../../containers/login/Login.container";
import Forgot from "../../containers/forgot/Forgot.container";
import Perfil from "../../containers/perfil/Perfil.container";
import App from "../../containers/app/App.container";
import User from "../../containers/user/User.container";
import Gallery from "../../containers/gallery/GalleryContainer";
import Muro from "../../containers/muro/Muro.container";

// * Components
import Error404 from "../layout/Error404.component";
import Header from "../layout/Header/Header";
import Header2 from "../layout/HeaderSesion/Header2";

// ! routes
import { Route, Switch } from "react-router-dom";

const AppRoute = () => {
  let login = true; //Bandera que me dice si muestro ruta privada o pública
  return (
    <App>
      {login ? (
        <Fragment>
          <Header2 />
          <Switch>
            {" "}
            {/*el que ve si pasa o no (solo permite pasar a uno) */}
            <Route exact path="/" component={User} />
            <Route exact path="/muro" component={Muro} />
            <Route exact path="/gallery" component={Gallery} />
            <Route component={Error404} />
          </Switch>
        </Fragment>
      ) : (
        <Fragment>
          {" "}
          <Header />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/forgot" component={Forgot} />
            <Route exact path="/perfil" component={Perfil} />
            <Route component={Error404} />
          </Switch>
        </Fragment>
      )}
    </App>
  );
};

export default AppRoute;
