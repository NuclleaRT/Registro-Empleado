let arrayEmpleados = [];

function Empleados (nombre, apellido, fechaNacimiento, cargo){
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.cargo = cargo;
}


function guardarDatos(){   

let nombres = document.getElementById('nombre').value; 
let apellidos = document.getElementById('apellido').value;
let fNacimientos = document.getElementById('fechaNacimiento').value;
let cargos = document.getElementById('cargo').value;


let nuevoEmpleado = new Empleados(nombres, apellidos,fNacimientos,cargos);

arrayEmpleados.push(nuevoEmpleado);

alert("El empleado fue agregado correctamente");
   
limpiarEmpleados();

}

function mostrarDatos(){
    let texto = "";
    for(let empleado of arrayEmpleados){
        for(let prop in empleado){
            texto = texto + prop.toUpperCase() + ": " + empleado[prop] + "\n";
        }
        texto = texto +  "\n" + "\n";
    }
    alert(texto);
}

function limpiarEmpleados(){
    let nombre = document.getElementById('nombre').value = "";
    let apellido = document.getElementById('apellido').value = "";
    let nacimiento = document.getElementById('fechaNacimiento').value = "";
    let cargo = document.getElementById('cargo').value = "";
}