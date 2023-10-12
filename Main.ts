import { Paciente } from "./Paciente";
import { Cliente } from "./Cliente";
import { Sucursal } from "./Sucursal";
import { AltaSucursal} from "./AltaSucursal";

//Primero genero un paciente
let pacienteMalik:Paciente=new Paciente(342180,'Malik', 'perro', 3, '12/08/23');
let pacientesEtchegaray:Paciente[]=[pacienteMalik];
//Segundo, el cliente asociado al paciente
let clienteJoseEtchegaray:Cliente= new Cliente(pacientesEtchegaray, 'Juan', 'Etchegaray', '451794', '25 de mayo', "34512609", '25/01/90', 1)
let clientesSucursalViamonte:Cliente[]=[clienteJoseEtchegaray];


console.log("---- ALTA SUCURSAL ----------");

//Creo una sucursal que ya va a estar incluida en la lista de sucursales
let sucursalViamonte:Sucursal= new Sucursal(clientesSucursalViamonte, pacientesEtchegaray, 'Pretty pets', 'calle Viamonte 152 B°General Paz', 'Lunes a viernes: 10 a 14 y de 18 a 21 horas/Sábados: 10 a 16hs', 20252460261, '30/08/18');
let sucursales:Sucursal[]=[sucursalViamonte];


//Instancia un segundo objeto sucursal para luego darle el alta
//1° se necesita cargar los datos clientes y pacientes
let pacienteLuna1:Paciente=new Paciente(352786,'Luna', 'perro', 2, '17/04/23');
let pacientesRodriguez:Paciente[]=[pacienteLuna1];
let clienteJulioRodriguez:Cliente= new Cliente(pacientesRodriguez, 'Julio', 'Rodríguez', '451794', '25 de mayo', "32712523", '23/05/87', 1)
let clientesSucur25Mayo:Cliente[]=[clienteJulioRodriguez];

//2° genero los datos de la sucursal y después le doy el alta dentro de la lista de sucursales y le asigno un ID
let sucursal25Mayo:Sucursal= new Sucursal (clientesSucur25Mayo, pacientesRodriguez, 'Pretty pets', 'calle 25 de mayo 2014 B°General Paz', 'Lunes a viernes: 10 a 14 y de 18 a 21 horas/Sábados: 10 a 16hs', 23252407769, '17/03/20');
let altaSucur:AltaSucursal= new AltaSucursal(sucursales);
altaSucur.obtenerAlta(sucursal25Mayo);
//comprobar que se le asignó un id a la sucursal
altaSucur.mostrarSucursalAlta(sucursal25Mayo);
altaSucur.mostrarListaSucursales();
altaSucur.modificarDatosSucursal(sucursal25Mayo);



console.log("---- ALTA CLIENTE ----------");
 //Para dar alta a un cliente primero tiene que tener un paciente registrado
 let pacienteRocky: Paciente= new Paciente(567201,'Rocky', 'perro', 6, '21/09/23');
 let pacientesBazan: Paciente[]=[pacienteRocky];
 sucursalViamonte.altaCliente(new Cliente(pacientesBazan, 'Rodrigo', 'Bazan', '436771', 'Av. 24 de septiembre 2345 B°Yapeyú', "27834127", '12/05/82', 1));

 //El método mostrarListaClientes() Debe mostrar los dos clientes generados:
 console.log("LISTA DE CLIENTES: ")
 sucursalViamonte.mostrarListaClientes();
 

 //Instanciar un nuevo paciente y luego darlo de baja.
 let pacienteDulce:Paciente=new Paciente(347782,'Dulce caramelo', 'gato', 1, '03/09/23');
 sucursalViamonte.altaPaciente(pacienteDulce);
 sucursalViamonte.mostrarListaPacientes();
 sucursalViamonte.bajaPaciente(347782);
 sucursalViamonte.mostrarListaPacientes();

 