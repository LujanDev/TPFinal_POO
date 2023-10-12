"use strict";
exports.__esModule = true;
exports.Paciente = void 0;
var Paciente = /** @class */ (function () {
    function Paciente(numHistoriaClinica, nombre, especie, edad, fechaIngreso) {
        this.numHistoriaClinica = numHistoriaClinica;
        this.nombre = nombre;
        this.edad = edad;
        if (especie != "perro" && especie != "gato") {
            this.especie = "exotica";
        }
        this.fechaIngreso = fechaIngreso;
    }
    Paciente.prototype.getNumHistoriaClinica = function () {
        return this.numHistoriaClinica;
    };
    Paciente.prototype.setNumHistoriaClinica = function (numHistClinica) {
        this.numHistoriaClinica = numHistClinica;
    };
    Paciente.prototype.getNombre = function () {
        return this.nombre;
    };
    Paciente.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Paciente.prototype.getIdDuenio = function () {
        return this.idDuenio;
    };
    Paciente.prototype.setIdDuenio = function (id) {
        this.idDuenio = id;
    };
    Paciente.prototype.getEspecie = function () {
        return this.especie;
    };
    Paciente.prototype.setEspecie = function (nuevaEspecie) {
        this.especie = nuevaEspecie;
    };
    Paciente.prototype.getEdad = function () {
        return this.edad;
    };
    Paciente.prototype.setEdad = function (ingresaEdad) {
        this.edad = ingresaEdad;
    };
    Paciente.prototype.getFechaIngreso = function () {
        return this.fechaIngreso;
    };
    Paciente.prototype.setFechaIngreso = function (fechaIngCorregida) {
        this.fechaIngreso = fechaIngCorregida;
    };
    return Paciente;
}());
exports.Paciente = Paciente;
