"use strict";
exports.__esModule = true;
exports.AltaSucursal = void 0;
var AltaSucursal = /** @class */ (function () {
    function AltaSucursal(sucursales) {
        this.sucursales = sucursales;
    }
    AltaSucursal.prototype.obtenerAlta = function (sucur) {
        var existe = false;
        var i = 0;
        while (!existe && i < this.sucursales.length) {
            if (this.sucursales[i].getCuit == sucur.getCuit) {
                console.log("La sucursal ya había sido registrada anteriormente.");
            }
            else {
                sucur.obtenerIdRandom;
                this.sucursales.push(sucur);
                console.log("Alta exitosa.");
            }
            i++;
        }
    };
    AltaSucursal.prototype.mostrarSucursalAlta = function (sucur) {
        console.log("Nombre de la sucursal: ", sucur.getNombre);
        console.log("El cuit es: ", sucur.getCuit);
        console.log("Id de la sucursal ", sucur.getNombre, " es: ", sucur.getIdSuc);
    };
    return AltaSucursal;
}());
exports.AltaSucursal = AltaSucursal;
