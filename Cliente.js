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
exports.Cliente = void 0;
var Persona_1 = require("./Persona");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(paciente, nombre, apellido, telefono, direccion, dni, fechaNacim, numeroVisitas) {
        var _this = _super.call(this, nombre, apellido, telefono, direccion) || this;
        _this.esVip = false;
        _this.dni = dni;
        _this.fechaNacim = fechaNacim;
        _this.paciente = paciente;
        if (_this.numeroVisitas >= 5) {
            _this.esVip = true;
        }
        //recorro cada paciente del cliente y le seteo el id del dueño
        for (var i = 0; i < paciente.length; i++) {
            paciente[i].setIdDuenio(_this.idCliente);
        }
        return _this;
    }
    Cliente.prototype.getDni = function () {
        return this.dni;
    };
    Cliente.prototype.setDni = function (dniCorregido) {
        this.dni = dniCorregido;
    };
    Cliente.prototype.getFechaNacim = function () {
        return this.fechaNacim;
    };
    Cliente.prototype.setFechaNacim = function (fechaModificada) {
        this.fechaNacim = fechaModificada;
    };
    Cliente.prototype.getIdCliente = function () {
        return this.idCliente;
    };
    Cliente.prototype.setIdCliente = function (id) {
        this.idCliente = id;
    };
    Cliente.prototype.getNumeroVisitas = function () {
        return this.numeroVisitas;
    };
    Cliente.prototype.setNumeroVisitas = function (numVisita) {
        this.numeroVisitas = numVisita;
    };
    Cliente.prototype.registrarVisita = function () {
        this.numeroVisitas = this.numeroVisitas + 1;
    };
    return Cliente;
}(Persona_1.Persona));
exports.Cliente = Cliente;
