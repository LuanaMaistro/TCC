import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import TelaPrincipal from "./TelaCamera/TelaPrincipal";
import TelaInicial from "./TelaInicial/TelaInicial";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { TelaInicial }  path="/" exact />
           <Route component = { TelaPrincipal }  path="/tela-principal" />
       </BrowserRouter>
   )
}

export default Routes;


