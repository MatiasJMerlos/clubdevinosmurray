const formulario = document.getElementsByClassName('formulario');
const inputs = document.querySelectorAll('.formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	password: /^.{4,12}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/
}

const validarFormulario = (e) => {
    switch (e.target.name){
        case "firstname":
            if (expresiones.nombre.test(e.target.value)) {
                
            } else {
                document.getElementById('')
            }
        break;

        case "lastname":
        break;

        case "date":
        break;

        case "email":
        break;

        case "password":
        break;

        case "password1":
        break;
    }
};

inputs.forEach((input) => {
    input.addEvenListener('keyup', validarFormulario)
    input.addEvenListener('blur', validarFormulario)

});

formulario.addEvenListener('submit', (e) => {
    e.preventDefault();
});