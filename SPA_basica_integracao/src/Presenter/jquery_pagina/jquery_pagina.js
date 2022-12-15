import { loadModal } from "../../main/_indexSharedModules.js";
import Jquery from "../../libs/jquery/jquery.module.js";

const jqueryPagina = (async () => {

    const $ = el => Jquery(`div[data-pg='jquery_pagina'] ${el}`);
    const texto = $("#texto");


    const mudarTexto = () => {
        const novo_texto = prompt("Digite o que quiser", texto.val());
        texto.val(novo_texto);
    } 

    
    const showModal = () => {
        const modal_content = `<h1>Seu texto é ${texto.val()}</h1>`;
        loadModal(modal_content);
    }

    //eventos
    $("#muda").on("click", mudarTexto);
    $("#bt_modal").on("click", showModal);

})();