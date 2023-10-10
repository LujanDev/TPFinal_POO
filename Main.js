"use strict";
exports.__esModule = true;
var Paciente_1 = require("./Paciente");
var Cliente_1 = require("./Cliente");
var Sucursal_1 = require("./Sucursal");
var AltaSucursal_1 = require("./AltaSucursal");
//Primero genero un paciente
var pacienteMalik = new Paciente_1.Paciente(342180, 'Malik', 'perro', 3, '12/08/23');
var pacientesEtchegaray = [pacienteMalik];
//Segundo, el cliente asociado al paciente
var clienteJoseEtchegaray = new Cliente_1.Cliente(pacientesEtchegaray, 'Juan', 'Etchegaray', '451794', '25 de mayo', "34512609", '25/01/90');
var clientesSucursalViamonte = [clienteJoseEtchegaray];
console.log("---- ALTA SUCURSAL ----------");
//Creo una sucursal
var sucursalViamonte = new Sucursal_1.Sucursal(clientesSucursalViamonte, pacientesEtchegaray, 'Pretty pets', 'calle Viamonte 152 B°General Paz', 'Lunes a viernes: 10 a 14 y de 18 a 21 horas/Sábados: 10 a 16hs', 20252460261, '30/08/18');
var sucursales = [sucursalViamonte];
var altaSucur = new AltaSucursal_1.AltaSucursal(sucursales);
altaSucur.obtenerAlta(sucursalViamonte);
//comprobar que se le asignó un id a la sucursal
altaSucur.mostrarSucursalAlta(sucursalViamonte);
console.log("---- ALTA CLIENTE ----------");
//Para dar alta a un cliente primero tiene que tener un paciente registrado
var pacienteRocky = new Paciente_1.Paciente(567201, 'Rocky', 'perro', 6, '21/09/23');
var pacientesBazan = [pacienteRocky];
sucursalViamonte.altaCliente(new Cliente_1.Cliente(pacientesBazan, 'Rodrigo', 'Bazan', '436771', 'Av. 24 de septiembre 2345 B°Yapeyú', "27834127", '12/05/82'));
//El método mostrarListaClientes() Debe mostrar los dos clientes generados:
sucursalViamonte.mostrarListaClientes();
//Mostrar los dos clientes cargados
console.log(sucursalViamonte.getClientes());
//Instanciar un nuevo paciente y luego darlo de baja.
var pacienteDulce = new Paciente_1.Paciente(347782, 'Dulce caramelo', 'gato', 1, '03/09/23');
sucursalViamonte.altaPaciente(pacienteDulce);
sucursalViamonte.mostrarListaPacientes();
sucursalViamonte.bajaPaciente(347782);
sucursalViamonte.mostrarListaPacientes();
//La sucursal creada------> sucursal Viamonte. 
