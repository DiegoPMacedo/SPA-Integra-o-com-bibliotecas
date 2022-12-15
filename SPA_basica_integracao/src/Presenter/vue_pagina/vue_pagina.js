import { loadModal } from '../../main/_indexSharedModules.js';

import { createApp } from '../../libs/vue/vue3.js';
import { ButtonContator } from "../../components/vue/_components.js";

const vuePagina = (() => {

    const pg = '[data-pg=vue_pagina]';

    const showModal = function() {
        const modal_content = `<h1>${this.modalMsg}</h1>`;
        loadModal(modal_content);
    }

    const components = {
        ButtonContator
    };

    const data = () =>( {
        message: 'Página do Vue!',
        modalMsg: 'Janela Modal do Vue'
    });

    const methods = {
        showModal
    };

    const app = {components, data, methods};

    createApp(app).mount(pg);

})();