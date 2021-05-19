import React from 'react';
import ReactDOM from 'react-dom';
import { MiamiUnderground } from './MiamiUnderground';

import './styles/styles.scss'

ReactDOM.render(
  <MiamiUnderground />,
  document.getElementById('root')
);

// NO AGREGAR LA PALABRA STYLES A MIS COMENTARIOS

/* PARA CONTENEDORES APLICAR METODOLOGIA BEM */
// CONTAINER CONTAINER__HEADER
/* PARA MODIFICADORES APLICAR */
// BTN 
// BTN--RED

// BLOQUE -- PARTES QUE SE PUEDEN REUTILIZAR BTN ARTICLE SECTION
// ELEMENTO -- DISTINTAS PARTES DE UN BLOQUE BLOQUE__ELEMENTO .MENU .MENU__LOGO .MENU__BUTTON
// MODIFICADOR