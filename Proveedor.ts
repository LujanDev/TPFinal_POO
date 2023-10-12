import { Persona } from "./Persona";

export class Proveedor extends Persona{
    private cuit:string;
    private idProv:number;

    public constructor(cuit:string,nombre:string, apellido:string, telefono:string, direccion:string){
        super(nombre, apellido, telefono, direccion);
    }
    public getIdProv():number{
        return this.idProv;
    }
    public setIdProv(id:number){
        this.idProv=id;
    }
    public getCuit():string{
        return this.cuit;
    }
    public setCuit(cuitCorregido:string){
        this.cuit=cuitCorregido;
    }

}