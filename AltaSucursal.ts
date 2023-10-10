import { Sucursal } from "./Sucursal";

export class AltaSucursal{
    private sucursales:Sucursal[];
    public constructor(sucursales:Sucursal[]){
           this.sucursales=sucursales;
    }
    public obtenerAlta(sucur:Sucursal){
        let existe=false;
        let i=0;
        while(!existe&&i<this.sucursales.length){
            if(this.sucursales[i].getCuit==sucur.getCuit){
                console.log("La sucursal ya había sido registrada anteriormente.");
            }else{
                sucur.obtenerIdRandom;
                this.sucursales.push(sucur);
                console.log("Alta exitosa.")
            }
            i++;
        }
    }
    public mostrarSucursalAlta(sucur:Sucursal){
        console.log("Nombre de la sucursal: ",sucur.getNombre);
        console.log("El cuit es: ", sucur.getCuit);
        console.log("Id de la sucursal ",sucur.getNombre, " es: ",sucur.getIdSuc);
    }
}