import { subirImage } from "./http-provider";

const body = document.body;

let inputFile,imgFoto;

const crearInputFileHtml = () =>{
    const html = `
    <h1 class="mt-5"> Subir archivos </h1>

   <hr>

   <label>Seleccione una fotografía: </label>

   <input type="file" accept="image/png, image/jpg"/>

   <br>

   <img id="foto" class="img-thumbnail"  src="" >
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');

}


const events = () => {
    inputFile.addEventListener('change',(event) =>{
        const file = event.target.files[0];
        subirImage(file).then(url => imgFoto.src=url);
});
}




export const init = () => {
    crearInputFileHtml();
    events();
}