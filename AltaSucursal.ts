import { Sucursal } from "./Sucursal";
import * as readlineSync from 'readline-sync';

export class AltaSucursal{
    private sucursales:Sucursal[];
    public constructor(sucursales:Sucursal[]){
           this.sucursales=sucursales;
    }
    public obtenerIdRandom(){
        let id= Math.floor(Math.random()*1000000)+1;
        for(let i:number=0;i<this.sucursales.length;i++){
            while(this.sucursales[i].getId()==id){
               id=Math.random()*Number.MAX_VALUE;
            }
        }
        return id;
    }
    public obtenerAlta(sucur:Sucursal){
        let i=0;
            for(i=0; i<this.sucursales.length; i++){
            if(this.sucursales[i].getCuit()==sucur.getCuit()){
                console.log("La sucursal ya había sido registrada anteriormente.");
            }else{
                sucur.setIdSuc(this.obtenerIdRandom());
                this.sucursales.push(sucur);
                console.log("Alta exitosa.")
            }
        }
    }
    public mostrarSucursalAlta(sucur:Sucursal){
        console.log("Nombre de la sucursal: "+sucur.getNombre());
        console.log("El cuit es: "+ sucur.getCuit());
        console.log("Id de la sucursal "+sucur.getNombre(), " es: "+sucur.getIdSuc());
    }
    public mostrarListaSucursales(){
        this.sucursales.forEach((suc) => console.log(suc));
       }
       //método modificación de los datos de cada sucursal
    public modificarDatosSucursal(sucur:Sucursal){
        let nuevoNombre= readlineSync.question("Introduce el nombre de la sucursal: ");
        sucur.setNombre(nuevoNombre);
        let nuevoDomicilio= readlineSync.question("Introduce el domicilio de "+nuevoNombre+": ");
        sucur.setDomicilio(nuevoDomicilio);
        let nuevosHorarios= readlineSync.question("Introduce los horarios de la veterinaria: ");
        sucur.setHorarios(nuevosHorarios);
    }
}