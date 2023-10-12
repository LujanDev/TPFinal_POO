"use strict";
exports.__esModule = true;
exports.AltaSucursal = void 0;
var readlineSync = require("readline-sync");
var AltaSucursal = /** @class */ (function () {
    function AltaSucursal(sucursales) {
        this.sucursales = sucursales;
    }
    AltaSucursal.prototype.obtenerIdRandom = function () {
        var id = Math.floor(Math.random() * 1000000) + 1;
        for (var i = 0; i < this.sucursales.length; i++) {
            while (this.sucursales[i].getId() == id) {
                id = Math.random() * Number.MAX_VALUE;
            }
        }
        return id;
    };
    AltaSucursal.prototype.obtenerAlta = function (sucur) {
        var i = 0;
        for (i = 0; i < this.sucursales.length; i++) {
            if (this.sucursales[i].getCuit() == sucur.getCuit()) {
                console.log("La sucursal ya había sido registrada anteriormente.");
            }
            else {
                sucur.setIdSuc(this.obtenerIdRandom());
                this.sucursales.push(sucur);
                console.log("Alta exitosa.");
            }
        }
    };
    AltaSucursal.prototype.mostrarSucursalAlta = function (sucur) {
        console.log("Nombre de la sucursal: " + sucur.getNombre());
        console.log("El cuit es: " + sucur.getCuit());
        console.log("Id de la sucursal " + sucur.getNombre(), " es: " + sucur.getIdSuc());
    };
    AltaSucursal.prototype.mostrarListaSucursales = function () {
        this.sucursales.forEach(function (suc) { return console.log(suc); });
    };
    //método modificación de los datos de cada sucursal
    AltaSucursal.prototype.modificarDatosSucursal = function (sucur) {
        var nuevoNombre = readlineSync.question("Introduce el nombre de la sucursal: ");
        sucur.setNombre(nuevoNombre);
        var nuevoDomicilio = readlineSync.question("Introduce el domicilio de " + nuevoNombre + ": ");
        sucur.setDomicilio(nuevoDomicilio);
        var nuevosHorarios = readlineSync.question("Introduce los horarios de la veterinaria: ");
        sucur.setHorarios(nuevosHorarios);
    };
    return AltaSucursal;
}());
exports.AltaSucursal = AltaSucursal;
