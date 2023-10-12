
export class Persona{
    private nombre:string;
    private apellido:string;
    private telefono:string;
    private id:number;
    private direccion:string;

    public constructor(nombre:string, apellido:string, telefono:string, direccion?:string|undefined){
        this.nombre=nombre;
        this.apellido=apellido;
        this.telefono=telefono;
    }
    public getNombre():string{
        return this.nombre;
    }
    public setNombre(nuevoNombre:string){
        this.nombre=nuevoNombre;
    }
    public getApellido():string{
        return this.apellido;
    }
    public setApellido(apellidoModificado){
        this.apellido=apellidoModificado;
    }
    public getTelefono():string{
        return this.telefono;
    }
    public setTelefono(nuevoTelefono){
        this.telefono=nuevoTelefono;
    }
    public getId():number{
        return this.id;
    }
    public getDireccion():string{
        return this.direccion;
    }
    public setDireccion(otraDireccion){
        this.direccion=otraDireccion;
    }
}  