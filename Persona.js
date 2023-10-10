"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, telefono, direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.setApellido = function (apellidoModificado) {
        this.apellido = apellidoModificado;
    };
    Persona.prototype.getTelefono = function () {
        return this.telefono;
    };
    Persona.prototype.setTelefono = function (nuevoTelefono) {
        this.telefono = nuevoTelefono;
    };
    Persona.prototype.getId = function () {
        return this.id;
    };
    Persona.prototype.getDireccion = function () {
        return this.direccion;
    };
    Persona.prototype.setDireccion = function (otraDireccion) {
        this.direccion = otraDireccion;
    };
    return Persona;
}());
exports.Persona = Persona;
