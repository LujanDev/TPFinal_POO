export class Paciente{
    private numHistoriaClinica:number;
    private nombre:string;
    private idDuenio:number;
    private especie:string;
    private edad:number;
    private fechaIngreso:string;

    public constructor(numHistoriaClinica:number, nombre:string, especie:string, edad:number, fechaIngreso:string){
        this.numHistoriaClinica=numHistoriaClinica;
        this.nombre=nombre;
        this.edad=edad;
        if(especie!="perro" &&especie!="gato"){
            this.especie="exotica";
        }
        this.fechaIngreso=fechaIngreso;
    }
    public getNumHistoriaClinica():number{
        return this.numHistoriaClinica;
    }
    public setNumHistoriaClinica(numHistClinica:number){
        this.numHistoriaClinica=numHistClinica;
    }
    public getNombre():string{
        return this.nombre;
    }
    public setNombre(nuevoNombre:string){
        this.nombre=nuevoNombre;
    }
    public getIdDuenio():number{
        return this.idDuenio;
    }
    public getEspecie():string{
        return this.especie;
    }
    public setEspecie(nuevaEspecie:string){
        this.especie=nuevaEspecie;
    }
    public getEdad():number{
        return this.edad;
    }
    public setEdad(ingresaEdad){
        this.edad=ingresaEdad;
    }
    public getFechaIngreso():string{
        return this.fechaIngreso;
    }
    public setFechaIngreso(fechaIngCorregida){
        this.fechaIngreso=fechaIngCorregida;
    }
}