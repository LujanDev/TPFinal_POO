import { Veterinaria } from "./Veterinaria";
import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import {Proveedor} from "./Proveedor";
import * as readlineSync from 'readline-sync';


export class Sucursal extends Veterinaria{
    private clientes:Cliente[];
    private pacientes:Paciente[];
    private proveedores:Proveedor[];
    private idSuc:number;

public constructor(clientes:Cliente[], pacientes:Paciente[], nombre:string, domicilio:string,
 horarios:string, cuit:number, fechaInscripcion:string){
   super( nombre, domicilio, horarios, cuit, fechaInscripcion);
   this.clientes=clientes;
   this.pacientes=pacientes;
}
public getClientes():Cliente[]{
    return this.clientes;
}
public getPacientes():Paciente[]{
    return this.pacientes;
}
public setPacientes(listaPacientes:Paciente[]){
    this.pacientes=listaPacientes;
}
public getProveedores():Proveedor[]{
    return this.proveedores;
}
public setProveedores(listaProveedores:Proveedor[]){
    this.proveedores=listaProveedores;
}
public getIdSuc():number{
    return this.idSuc;
}
public setIdSuc(modificarId:number){
    this.idSuc=modificarId;
}

//Métodos para generar ID para el proveedor y el cliente
 public obtenerIdProveedor(){
    let id= Math.floor(Math.random()*1000000)+1;
    for(let i:number=0;i<this.proveedores.length;i++){
        while(this.proveedores[i].getId()==id){
           id=Math.random()*Number.MAX_VALUE;
        }
    }
    return id;
}
public obtenerIdCliente(){
    let id= Math.floor(Math.random()*1000000)+1;
    for(let i:number=0;i<this.clientes.length;i++){
        while(this.clientes[i].getId()==id){
           id=Math.random()*Number.MAX_VALUE;
        }
    }
    return id;
}
//Métodos para mostrar datos de las listas de clientes y pacientes
   public mostrarListaClientes(){
    this.clientes.forEach((cl) => console.log(cl));
   }
   public mostrarListaPacientes(){
    this.pacientes.forEach((pac) => console.log(pac));
   }
//Alta, baja y modificación del cliente
public altaCliente(cl:Cliente){
    let existe=false;
    let i=0;
    while(!existe&& i<this.clientes.length){
        if(this.clientes[i].getTelefono()==cl.getTelefono()){
            existe=true;
        }if(!existe){
            cl.setIdCliente(this.obtenerIdCliente());
            this.clientes.push(cl);
        }else{
            console.log('existe el usuario en la sucursal');
        }
        i++;
    }
}
public validaCliente(dni:string){
    let encontro=-1;
    for(let i:number=0; i<this.clientes.length;i++){
        if(this.clientes[i].getDni()==dni){
            encontro=i;
        }
    }
    return encontro;

}
public bajaCliente(dni:string){
    let enc:number=this.validaCliente(dni);
    if(enc>=0){
        this.clientes.splice(
           enc, 1
          );
    }
    return "El cliente no se encuentra registrado";
}
public modificarDatosCliente(cl:Cliente){
    let nuevoNombre= readlineSync.question("Introduce el nombre del cliente: ");
    cl.setNombre(nuevoNombre);
    let nuevoApellido= readlineSync.question("Introduce el apellido de ",nuevoNombre,": ");
    cl.setApellido(nuevoApellido);
    let nuevoTelefono= readlineSync.question("Teléfono: ");
    cl.setTelefono(nuevoTelefono);
    let nuevaDireccion= readlineSync.question("Domicilio: ");
    cl.setDireccion(nuevaDireccion);
}

//Alta, baja y modificacion de un proveedor
public altaProveedor(provee:Proveedor){
    let existe=false;
    let i=0;
    while(!existe&& i<this.proveedores.length){
        if(this.proveedores[i].getTelefono()==provee.getTelefono()){
            existe=true;
        }if(!existe){
            provee.setIdProv(this.obtenerIdProveedor());
            this.proveedores.push(provee);
        }else{
            console.log('El proveedor ya se encuentra registrado en la sucursal');
        }
        i++;
    }
}
public validaProveedor(telefono:string){
    let encontro=-1;
    for(let i:number=0; i<this.proveedores.length;i++){
        if(this.proveedores[i].getTelefono()==telefono){
            encontro=i;
        }
    }
    return encontro;
}
public bajaProveedor(telefono:string){
    let enc:number=this.validaCliente(telefono);
    if(enc>=0){
        this.clientes.splice(
           enc, 1
          );
    }
    return "El proveedor no se encuentra registrado";

}

//Alta, baja y modificación de pacientes
public altaPaciente(pac:Paciente){
    let existe=false;
    let i=0;
    while(!existe&& i<this.pacientes.length){
        if(this.pacientes[i].getNumHistoriaClinica()==pac.getNumHistoriaClinica()){
            existe=true;
        }if(!existe){
            this.pacientes.push(pac);
        }else{
            console.log('El paciente ha sido registrado.');
        }
        i++;
    }
}
public validaPaciente(numHistClinica:number){
    let encontro=-1;
    for(let i:number=0; i<this.pacientes.length;i++){
        if(this.pacientes[i].getNumHistoriaClinica()==numHistClinica){
            encontro=i;
        }
    }
    return encontro;

}
public bajaPaciente(numHistClinica:number){
    let enc:number=this.validaPaciente(numHistClinica);
    if(enc>=0){
        this.pacientes.splice(
           enc, 1
          );
    }
    return "Operación realizada.";

}
public modificarDatosPaciente(pac:Paciente){
    let nuevoNombre= readlineSync.question("Introduce el nombre del paciente: ");
    pac.setNombre(nuevoNombre);
    let edadActual= readlineSync.question("Introduce la edad actual de ",nuevoNombre,": ");
    pac.setEdad(edadActual);
}

}