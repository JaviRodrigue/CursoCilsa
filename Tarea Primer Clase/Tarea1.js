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

//Mensaje de exito al envio de datos
document.getElementById('btn-submit').addEventListener('click',function(event){
    const form = document.getElementById('form-data');
    if(form.checkValidity()){
        alert('Se enviaron los datos correctamente');
    }

})