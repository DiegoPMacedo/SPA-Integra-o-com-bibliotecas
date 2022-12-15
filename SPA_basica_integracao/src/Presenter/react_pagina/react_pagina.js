import { loadModal } from '../../main/_indexSharedModules.js';

import { ButtonContator } from "../../components/react/_components.js";

const reactPagina = (async () => {

  await import("../../libs/react/react.dev.18.2.0.js");
  await import("../../libs/react/react-dom.dev.18.js");

  const { createElement, useState } = React;
  const { createRoot } = ReactDOM;

  const pg = document.querySelector('[data-pg=react_pagina]');

  const App = props => {

    const showModal = () => {
      const modal_content = `<h1>${props.modalMsg}</h1>`;
      loadModal(modal_content);
    }

    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "w3-container" },
        React.createElement(
          "h1",
          null,
          props.message
        )
      ),
      React.createElement(
        "p",
        null,
        React.createElement(ButtonContator, null)
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "button",
          { onClick: showModal, className: "w3-btn w3-blue-gray" },
          "Abrir Modal"
        )
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "a",
          { href: "#pagina_dinamica", className: "w3-btn w3-teal" },
          "Ir para a página dinâmica"
        )
      )
    );
  };
  const root = createRoot(pg);
  root.render(React.createElement(App, {
    message: "Página do React",
    modalMsg: "Modal do React"
  })
  );

})();