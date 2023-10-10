import { Persona } from "./Persona";
import { Paciente } from "./Paciente";

export class Cliente extends Persona{
    private dni:string;
    private fechaNacim:string;
    private numeroVisitas:number=0;
    private esVip:boolean=false;
    private paciente:Paciente[];

    public constructor(paciente:Paciente[],nombre:string, apellido:string, telefono:string, direccion:string, dni:string, fechaNacim:string){
    super(nombre, apellido, telefono, direccion);
    this.dni=dni;
    this.fechaNacim=fechaNacim;
    this.paciente=paciente;
    if(this.numeroVisitas>=5){
        this.esVip=true;
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
    public registrarVisita(){
        this.numeroVisitas=this.numeroVisitas+1;
    }

}