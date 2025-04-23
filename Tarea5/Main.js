

function validarForm(event){
    event.preventDefault();

    //declaracion de variables a utilizar
    const caracteres = /^[A-Za-zÁÉÍÓÚáéíóú\s]+$/;
    const form = document.getElementById("form-data");
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const fecha = document.getElementById("fecha");

    let validacion = true;

    //validacion de datos del formulario, apartado nombre
    if(!nombre.value.match(caracteres)){
        alert("El nombre solo debe contener letras y/o espacios");
        validacion = false;
    }

    //validacion de datos del formulario, apartado apellido
    if(!apellido.value.match(caracteres)){
        alert("El apellido solo debe contener letras y/o espacios");
        validacion = false;
    }

    //validacion de datos del formulario, apartado email
    if(!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)){
        alert("Por favor ingrese un correo valido");
        validacion = false;
    }

    //validacion de datos del formulario, apartado fecha
    if(new Date(fecha.value) > new Date()){
        alert("Por favor, ingrese una fecha valida")
        validacion = false;
    }
    
    //si se valida correctamente el formulario, mostrara un mensaje de exito
    if(validacion){
        document.getElementById('btn-submit');
        const form = document.getElementById('form-data');
        if(form.checkValidity()){
            alert('Se enviaron los datos correctamente');
            form.reset();
        }
    }
}

//cambiar de color a alto contraste+
document.getElementById('btn-style2').addEventListener('click',function(){
    document.body.classList.add('dark-mode');
    document.querySelector('.container').classList.add('dark-mode');
});

//Cambiar de color al predeterminado
document.getElementById('btn-style1').addEventListener('click',function(){
    document.body.classList.remove('dark-mode');
    document.querySelector('.container').classList.remove('dark-mode');
})

