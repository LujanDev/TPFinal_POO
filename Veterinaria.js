"use strict";
exports.__esModule = true;
exports.Veterinaria = void 0;
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombre, domicilio, horarios, cuit, fechaInscripcion) {
        this.nombre = nombre;
        this.domicilio = domicilio;
        this.horarios = horarios;
        this.cuit = cuit;
        this.fechaInscripcion = fechaInscripcion;
    }
    Veterinaria.prototype.getNombre = function () {
        return this.nombre;
    };
    Veterinaria.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Veterinaria.prototype.getDomicilio = function () {
        return this.domicilio;
    };
    Veterinaria.prototype.setDomicilio = function (nuevoDomicilio) {
        this.domicilio = nuevoDomicilio;
    };
    Veterinaria.prototype.getId = function () {
        return this.id;
    };
    Veterinaria.prototype.getHorarios = function () {
        return this.horarios;
    };
    Veterinaria.prototype.setHorarios = function (nuevoHorario) {
        this.horarios = nuevoHorario;
    };
    Veterinaria.prototype.getFechaInscripcion = function () {
        return this.fechaInscripcion;
    };
    Veterinaria.prototype.getCuit = function () {
        return this.cuit;
    };
    return Veterinaria;
}());
exports.Veterinaria = Veterinaria;
