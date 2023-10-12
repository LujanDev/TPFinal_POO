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
var clienteJoseEtchegaray = new Cliente_1.Cliente(pacientesEtchegaray, 'Juan', 'Etchegaray', '451794', '25 de mayo', "34512609", '25/01/90', 1);
var clientesSucursalViamonte = [clienteJoseEtchegaray];
console.log("---- ALTA SUCURSAL ----------");
//Creo una sucursal que ya va a estar incluida en la lista de sucursales
var sucursalViamonte = new Sucursal_1.Sucursal(clientesSucursalViamonte, pacientesEtchegaray, 'Pretty pets', 'calle Viamonte 152 B°General Paz', 'Lunes a viernes: 10 a 14 y de 18 a 21 horas/Sábados: 10 a 16hs', 20252460261, '30/08/18');
var sucursales = [sucursalViamonte];
//Instancia un segundo objeto sucursal para luego darle el alta
//1° se necesita cargar los datos clientes y pacientes
var pacienteLuna1 = new Paciente_1.Paciente(352786, 'Luna', 'perro', 2, '17/04/23');
var pacientesRodriguez = [pacienteLuna1];
var clienteJulioRodriguez = new Cliente_1.Cliente(pacientesRodriguez, 'Julio', 'Rodríguez', '451794', '25 de mayo', "32712523", '23/05/87', 1);
var clientesSucur25Mayo = [clienteJulioRodriguez];
//2° genero los datos de la sucursal y después le doy el alta dentro de la lista de sucursales y le asigno un ID
var sucursal25Mayo = new Sucursal_1.Sucursal(clientesSucur25Mayo, pacientesRodriguez, 'Pretty pets', 'calle 25 de mayo 2014 B°General Paz', 'Lunes a viernes: 10 a 14 y de 18 a 21 horas/Sábados: 10 a 16hs', 23252407769, '17/03/20');
var altaSucur = new AltaSucursal_1.AltaSucursal(sucursales);
altaSucur.obtenerAlta(sucursal25Mayo);
//comprobar que se le asignó un id a la sucursal
altaSucur.mostrarSucursalAlta(sucursal25Mayo);
altaSucur.mostrarListaSucursales();
altaSucur.modificarDatosSucursal(sucursal25Mayo);
console.log("---- ALTA CLIENTE ----------");
//Para dar alta a un cliente primero tiene que tener un paciente registrado
var pacienteRocky = new Paciente_1.Paciente(567201, 'Rocky', 'perro', 6, '21/09/23');
var pacientesBazan = [pacienteRocky];
sucursalViamonte.altaCliente(new Cliente_1.Cliente(pacientesBazan, 'Rodrigo', 'Bazan', '436771', 'Av. 24 de septiembre 2345 B°Yapeyú', "27834127", '12/05/82', 1));
//El método mostrarListaClientes() Debe mostrar los dos clientes generados:
console.log("LISTA DE CLIENTES: ");
sucursalViamonte.mostrarListaClientes();
//Instanciar un nuevo paciente y luego darlo de baja.
var pacienteDulce = new Paciente_1.Paciente(347782, 'Dulce caramelo', 'gato', 1, '03/09/23');
sucursalViamonte.altaPaciente(pacienteDulce);
sucursalViamonte.mostrarListaPacientes();
sucursalViamonte.bajaPaciente(347782);
sucursalViamonte.mostrarListaPacientes();
//Comprobar que la mascota x tenga su idDuenio
console.log("El id del paciente Rocky es: " + pacienteRocky.getIdDuenio());
