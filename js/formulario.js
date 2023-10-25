const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const formulario1 = document.getElementById('formulario1');
const inputs1 = document.querySelectorAll('#formulario1 input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
    nombre: false,
    apellido: false,
    mail1: false,
    password1: false,
    mail: false,
    password: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "mail":
            validarCampo(expresiones.correo, e.target, 'mail');
            break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            break;
    }
};

const validarFormulario1 = (e) => {
    switch (e.target.name) {
        case "firstname":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "lastname":
            validarCampo(expresiones.apellido, e.target, 'apellido');
            break;
        case "mail1":
            validarCampo(expresiones.correo, e.target, 'mail1');
            break;
        case "password1":
            validarCampo(expresiones.password, e.target, 'password1');
            validarPassword2();
            break;
        case "password2":
            validarPassword2();
            break;
    }
};

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo_${campo}`).classList.remove('grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('grupo-correcto');
        document.querySelector(`#grupo_${campo} .input-error`).classList.remove('input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo_${campo}`).classList.add('grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.remove('grupo-correcto');
        document.querySelector(`#grupo_${campo} .input-error`).classList.add('input-error-activo');
        campos[campo] = false;
    }
}

const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password1');
    const inputPassword2 = document.getElementById('password2');

    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`grupo_password2`).classList.add('grupo-incorrecto');
        document.getElementById(`grupo_password2`).classList.remove('grupo-correcto');
        document.querySelector(`#grupo_password2 .input-error`).classList.add('input-error-activo');
        campos[password1] = false;
    } else {
        document.getElementById(`grupo_password2`).classList.remove('grupo-incorrecto');
        document.getElementById(`grupo_password2`).classList.add('grupo-correcto');
        document.querySelector(`#grupo_password2 .input-error`).classList.remove('input-error-activo');
        campos[password1] = true;
    }

}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campos.mail && campos.password) {
        formulario.reset();

        document.getElementById('mensaje-exito1').classList.add('mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('mensaje-exito1').classList.remove('mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.grupo-correcto').forEach((borde) => {
            borde.classList.remove('grupo-correcto');
        })

    } else {
        document.getElementById('mensaje').classList.add('mensaje-activo');
        setTimeout(() => {
            document.getElementById('mensaje').classList.remove('mensaje-activo');
        }, 5000);
    }
});

inputs1.forEach((input) => {
    input.addEventListener('keyup', validarFormulario1);
    input.addEventListener('blur', validarFormulario1);
});

formulario1.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campos.nombre && campos.apellido && campos.mail1 && campos.password1) {
        formulario1.reset();

        document.getElementById('mensaje-exito').classList.add('mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('mensaje-exito').classList.remove('mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.grupo-correcto').forEach((borde) => {
            borde.classList.remove('grupo-correcto');
        })

    } else {
        document.getElementById('mensaje1').classList.add('mensaje-activo');
        setTimeout(() => {
            document.getElementById('mensaje1').classList.remove('mensaje-activo');
        }, 5000);
    }
});