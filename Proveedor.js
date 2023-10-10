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
exports.Proveedor = void 0;
var Persona_1 = require("./Persona");
var Proveedor = /** @class */ (function (_super) {
    __extends(Proveedor, _super);
    function Proveedor(cuit, nombre, apellido, telefono, direccion) {
        return _super.call(this, nombre, apellido, telefono, direccion) || this;
    }
    Proveedor.prototype.getCuit = function () {
        return this.cuit;
    };
    Proveedor.prototype.setCuit = function (cuitCorregido) {
        this.cuit = cuitCorregido;
    };
    return Proveedor;
}(Persona_1.Persona));
exports.Proveedor = Proveedor;
