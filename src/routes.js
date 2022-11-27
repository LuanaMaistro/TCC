import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import TelaPrincipal from "./TelaCamera/TelaPrincipal";
import TelaInicial from "./TelaInicial/TelaInicial";
import TelaSobre from "./TelaSobre/TelaSobre";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { TelaInicial }  path="/" exact />
           <Route component = { TelaPrincipal }  path="/tela-principal" />
           <Route component = { TelaSobre }  path="/tela-sobre" />
       </BrowserRouter>
   )
}

export default Routes;


