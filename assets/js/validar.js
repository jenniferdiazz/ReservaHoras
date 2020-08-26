function validar(){

    var nombres, apellidos, correo, usuario, pass, telefono, expresion, saludo, expresionLetra;
    var e = document.getElementById("especialidad");
    var opc_esp=e.options[e.selectedIndex].value;

    var h = document.getElementById("hora");
    var opc_hor=h.options[h.selectedIndex].value;
    console.log(opc_hor);
//nombre y apellido
expresionLetra=/^[A-Za-z\s]+$/;

//edad
var expresionEdad=/^\d{1,3}$/g;

//mail
var expresionMail=/^\w+[@]\w+\.\D{2,3}$/;

//rut
var expresionRut=/^\d{7,8}[-]\d{1}$/g;

//fecha
var expresionFecha=/^\d{2}[-]\d{2}[-]\d{4}$/g;

    rut=document.getElementById("rut").value;
    nombres=document.getElementById("nombres").value;
    apellidos = document.getElementById("apellidos").value;
    edad=document.getElementById("edad").value;
    correo=document.getElementById("correo").value;
    fecha=document.getElementById("fecha").value;
    
    expresionLetra=/^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
    expresionNumero=/^([0-9])*$/;
    if(nombres==="" || correo==="" || telefono==="" || apellidos==="" || usuario==="" || pass==="" ){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(!expresionRut.test(rut)){
        alert("rut no valido. Ingresar en el formato xxxxxxxx-x");
        return false;
    }
    else if(!expresionMail.test(correo)){
        alert("correo no valido");
        return false;
    }
    else if(!expresionLetra.test(nombres)||!expresionLetra.test(apellidos)){
        alert("El campo nombres o apellidos solo acepta letras");
        return false;
    }
    else if(!expresionEdad.test(edad) ||edad<=0){
        alert("edad no valida");
        return false;
    }
    else if(!expresionFecha.test(fecha)){
        alert("fecha no valida. Ingresar en el formato dd-mm-yyyy");
        return false;
    }
    saludo="Estimada(o) " + nombres + " " + apellidos+", su hora para "+opc_esp+" ha sido reservada para el día  " +
    fecha+" a las "+ opc_hor +" HRS. Ademas se le envió un mensaje a su correo " + correo+" con el detalle de su cita. " +
    "\n Gracias por preferirnos"
    alert(saludo);
}