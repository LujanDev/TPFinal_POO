import { Cliente } from './Cliente';
import { Sucursal } from './Sucursal';
import { Paciente } from './Paciente';
import { Proveedor } from './Proveedor';
export class Util extends Sucursal{
    public constructor(clientes:Cliente[], pacientes:Paciente[], nombre:string, domicilio:string, horarios:string, cuit:number, fechaInscripcion:string){
        super(clientes, pacientes, nombre,domicilio, horarios, cuit, fechaInscripcion);

    }

    public getNumberRandom(){
        let id;
        let obtenerId:boolean=false;
        while(!obtenerId){
            let id=Math.random()*Number.MAX_VALUE;
        if(!this.existeId(id)){
            obtenerId=true;
            return id;
        }
    }
    }
    public existeId(id:number):boolean{
        let existe=false;
        let i=0;
        while(!existe&&i<this.getClientes.length){
            if(this.getClientes[i].getId()==id){
                existe=true;
            }
            i++;
        }
        return existe;
     }
}