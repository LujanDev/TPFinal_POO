"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Sucursal = void 0;
var Veterinaria_1 = require("./Veterinaria");
//import { Util } from "./Util";
//import * as readlineSync from 'readline-sync';
var Sucursal = /** @class */ (function (_super) {
    __extends(Sucursal, _super);
    function Sucursal(clientes, pacientes, nombre, domicilio, horarios, cuit, fechaInscripcion) {
        var _this = _super.call(this, nombre, domicilio, horarios, cuit, fechaInscripcion) || this;
        _this.clientes = clientes;
        _this.pacientes = pacientes;
        return _this;
    }
    Sucursal.prototype.getClientes = function () {
        return this.clientes;
    };
    Sucursal.prototype.getPacientes = function () {
        return this.pacientes;
    };
    Sucursal.prototype.setPacientes = function (listaPacientes) {
        this.pacientes = listaPacientes;
    };
    Sucursal.prototype.getProveedores = function () {
        return this.proveedores;
    };
    Sucursal.prototype.setProveedores = function (listaProveedores) {
        this.proveedores = listaProveedores;
    };
    Sucursal.prototype.getIdSuc = function () {
        return this.idSuc;
    };
    Sucursal.prototype.setIdSuc = function (modificarId) {
        this.idSuc = modificarId;
    };
    Sucursal.prototype.obtenerIdRandom = function () {
        var id = Math.random() * Number.MAX_VALUE;
        this.idSuc = id;
    };
    /*public getNumberRandom(){
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
     }*/
    Sucursal.prototype.mostrarListaClientes = function () {
        this.clientes.forEach(function (cl) { return console.log(cl); });
    };
    Sucursal.prototype.mostrarListaPacientes = function () {
        this.pacientes.forEach(function (pac) { return console.log(pac); });
    };
    //Alta, baja y modificación del cliente
    Sucursal.prototype.altaCliente = function (cl) {
        var existe = false;
        var i = 0;
        while (!existe && i < this.clientes.length) {
            if (this.clientes[i].getTelefono() == cl.getTelefono()) {
                existe = true;
            }
            if (!existe) {
                this.clientes.push(cl);
            }
            else {
                console.log('existe el usuario en la sucursal');
            }
            i++;
        }
    };
    Sucursal.prototype.validaCliente = function (dni) {
        var encontro = -1;
        for (var i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].getDni() == dni) {
                encontro = i;
            }
        }
        return encontro;
    };
    Sucursal.prototype.bajaCliente = function (dni) {
        var enc = this.validaCliente(dni);
        if (enc >= 0) {
            this.clientes.splice(enc, 1);
        }
        return "El cliente no se encuentra registrado";
    };
    //Alta, baja y modificacion de un proveedor
    Sucursal.prototype.altaProveedor = function (provee) {
        var existe = false;
        var i = 0;
        while (!existe && i < this.proveedores.length) {
            if (this.proveedores[i].getTelefono() == provee.getTelefono()) {
                existe = true;
            }
            if (!existe) {
                this.proveedores.push(provee);
            }
            else {
                console.log('El proveedor ya se encuentra registrado en la sucursal');
            }
            i++;
        }
    };
    Sucursal.prototype.validaProveedor = function (telefono) {
        var encontro = -1;
        for (var i = 0; i < this.proveedores.length; i++) {
            if (this.proveedores[i].getTelefono() == telefono) {
                encontro = i;
            }
        }
        return encontro;
    };
    Sucursal.prototype.bajaProveedor = function (telefono) {
        var enc = this.validaCliente(telefono);
        if (enc >= 0) {
            this.clientes.splice(enc, 1);
        }
        return "El proveedor no se encuentra registrado";
    };
    //Alta, baja y modificación de pacientes
    Sucursal.prototype.altaPaciente = function (pac) {
        var existe = false;
        var i = 0;
        while (!existe && i < this.pacientes.length) {
            if (this.pacientes[i].getNumHistoriaClinica == pac.getNumHistoriaClinica) {
                existe = true;
            }
            if (!existe) {
                this.pacientes.push(pac);
            }
            else {
                console.log('El paciente ha sido registrado.');
            }
            i++;
        }
    };
    Sucursal.prototype.validaPaciente = function (numHistClinica) {
        var encontro = -1;
        for (var i = 0; i < this.pacientes.length; i++) {
            if (this.pacientes[i].getNumHistoriaClinica() == numHistClinica) {
                encontro = i;
            }
        }
        return encontro;
    };
    Sucursal.prototype.bajaPaciente = function (numHistClinica) {
        var enc = this.validaPaciente(numHistClinica);
        if (enc >= 0) {
            this.pacientes.splice(enc, 1);
        }
        return "El paciente no se encuentra registrado.";
    };
    return Sucursal;
}(Veterinaria_1.Veterinaria));
exports.Sucursal = Sucursal;
