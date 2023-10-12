import { Persona } from "./Persona";
import { Paciente } from "./Paciente";

export class Cliente extends Persona{
    private dni:string;
    private fechaNacim:string;
    private numeroVisitas:number;
    private esVip:boolean=false;
    private paciente:Paciente[];
    private idCliente:number;

    public constructor(paciente:Paciente[],nombre:string, apellido:string, telefono:string, direccion:string, dni:string, fechaNacim:string, numeroVisitas:number){
    super(nombre, apellido, telefono, direccion);
    this.dni=dni;
    this.fechaNacim=fechaNacim;
    this.paciente=paciente;
    if(this.numeroVisitas>=5){
        this.esVip=true;
    }
    //recorro cada paciente del cliente y le seteo el id del dueño
    for(let i:number=0; i<paciente.length;i++){
        paciente[i].setIdDuenio(this.idCliente);
    }
    }

    public getDni():string{
        return this.dni;
    }
    public setDni(dniCorregido){
        this.dni=dniCorregido;
    }

    public getFechaNacim():string{
        return this.fechaNacim;
    }
    public setFechaNacim(fechaModificada){
        this.fechaNacim=fechaModificada;
    }
    public getPaciente(){
        return this.paciente;
    }
    public setPaciente(listaPaciente:Paciente[]){
        this.paciente=listaPaciente;
    }
    public getIdCliente():number{
        return this.idCliente;
    }
    public setIdCliente(id:number){
        this.idCliente=id;
    }
    public getNumeroVisitas():number{
        return this.numeroVisitas;
    }
    public setNumeroVisitas(numVisita){
        this.numeroVisitas=numVisita;
    }
    public registrarVisita(){
        this.numeroVisitas=this.numeroVisitas+1;
    }
    
}