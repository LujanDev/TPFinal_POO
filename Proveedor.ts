import { Persona } from "./Persona";

export class Proveedor extends Persona{
    private cuit:string;

    public constructor(cuit:string,nombre:string, apellido:string, telefono:string, direccion:string){
        super(nombre, apellido, telefono, direccion);
    }

    public getCuit():string{
        return this.cuit;
    }
    public setCuit(cuitCorregido:string){
        this.cuit=cuitCorregido;
    }

}