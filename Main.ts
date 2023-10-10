import { Paciente } from "./Paciente";
import { Cliente } from "./Cliente";
import { Sucursal } from "./Sucursal";
import { AltaSucursal} from "./AltaSucursal";

//Primero genero un paciente
let pacienteMalik:Paciente=new Paciente(342180,'Malik', 'perro', 3, '12/08/23');
let pacientesEtchegaray:Paciente[]=[pacienteMalik];
//Segundo, el cliente asociado al paciente
let clienteJoseEtchegaray:Cliente= new Cliente(pacientesEtchegaray, 'Juan', 'Etchegaray', '451794', '25 de mayo', "34512609", '25/01/90')
let clientesSucursalViamonte:Cliente[]=[clienteJoseEtchegaray];


console.log("---- ALTA SUCURSAL ----------");

//Creo una sucursal
 let sucursalViamonte:Sucursal= new Sucursal(clientesSucursalViamonte, pacientesEtchegaray, 'Pretty pets', 'calle Viamonte 152 B°General Paz', 'Lunes a viernes: 10 a 14 y de 18 a 21 horas/Sábados: 10 a 16hs', 20252460261, '30/08/18');
let sucursales:Sucursal[]=[sucursalViamonte];
let altaSucur:AltaSucursal= new AltaSucursal(sucursales);
altaSucur.obtenerAlta(sucursalViamonte);
//comprobar que se le asignó un id a la sucursal
altaSucur.mostrarSucursalAlta(sucursalViamonte);


console.log("---- ALTA CLIENTE ----------");
 //Para dar alta a un cliente primero tiene que tener un paciente registrado
 let pacienteRocky: Paciente= new Paciente(567201,'Rocky', 'perro', 6, '21/09/23');
 let pacientesBazan: Paciente[]=[pacienteRocky];
 sucursalViamonte.altaCliente(new Cliente(pacientesBazan, 'Rodrigo', 'Bazan', '436771', 'Av. 24 de septiembre 2345 B°Yapeyú', "27834127", '12/05/82'));

 //El método mostrarListaClientes() Debe mostrar los dos clientes generados:
 sucursalViamonte.mostrarListaClientes();
 //Mostrar los dos clientes cargados
 console.log(sucursalViamonte.getClientes());

 //Instanciar un nuevo paciente y luego darlo de baja.
 let pacienteDulce:Paciente=new Paciente(347782,'Dulce caramelo', 'gato', 1, '03/09/23');
 sucursalViamonte.altaPaciente(pacienteDulce);
 sucursalViamonte.mostrarListaPacientes();
 sucursalViamonte.bajaPaciente(347782);
 sucursalViamonte.mostrarListaPacientes();

 //La sucursal creada------> sucursal Viamonte. 