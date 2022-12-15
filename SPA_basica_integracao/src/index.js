var store = {};

const index = async ()=>{

    const { loadPg, closeModal } = await import("./main/_indexSharedModules.js");
    const { qs, initIndex } = await import("./main/_indexModules.js");

    initIndex();

    window.addEventListener("hashchange", async function () {
        //capturar a hash e eliminar o # no início da palavra
        const pg = location.hash.slice(1);
        loadPg(pg);
    });

    qs("#modal").addEventListener("click",function (e) {
        const id = e.target.id;
        if (id === "modal" || id === "modal_close") closeModal();
    });

}

window.onload = function(){
    index();
}