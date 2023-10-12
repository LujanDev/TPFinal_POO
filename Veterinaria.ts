
export class Veterinaria{
    private nombre:string;
    private domicilio: string;
    private id:number;
    private horarios:string
    private cuit:number;
    private fechaInscripcion:string;
   

    public constructor( nombre:string, domicilio:string, horarios:string, cuit:number, fechaInscripcion:string){
        this.nombre=nombre;
        this.domicilio=domicilio;
        this.horarios=horarios;
        this.cuit=cuit;
        this.fechaInscripcion=fechaInscripcion;

    }
    public getNombre():string{
        return this.nombre;
    }
    public setNombre(nuevoNombre:string){
        this.nombre=nuevoNombre;
    }
    public getDomicilio():string{
        return this.domicilio;
    }
    public setDomicilio(nuevoDomicilio:string){
        this.domicilio=nuevoDomicilio;
    }
    public getId():number{
        return this.id;
    }
    public getHorarios():string{
        return this.horarios;
    }
    public setHorarios(nuevoHorario:string){
        this.horarios=nuevoHorario;
    }
    public getFechaInscripcion():string{
        return this.fechaInscripcion;
    }
    public getCuit():number{
        return this.cuit;
    }

}