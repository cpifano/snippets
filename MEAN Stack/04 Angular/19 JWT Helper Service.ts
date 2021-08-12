//---------------------------------------------------------------------------------------------------------------------------//
// JWT HELPER SERVICE:
//---------------------------------------------------------------------------------------------------------------------------//
// Este servicio provee herramientas útiles para el manejo de JWT desde el lado del cliente.
//---------------------------------------------------------------------------------------------------------------------------//
//Instalación:
npm install @auth0/angular-jwt
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
//Importar JwtHelperService:
import { JwtHelperService } from '@auth0/angular-jwt';

//...//

//Inyectar servicio JwtHelperService en el constructor:
constructor(private jwtHelper: JwtHelperService) { }

const decodedToken = jwtHelper.decodeToken(token);
const expirationDate = jwtHelper.getTokenExpirationDate(token);
const isExpired = jwtHelper.isTokenExpired(token);

ngOnInit() {
  if (this.jwtHelper.isTokenExpired(token)) {
    // token expired
  } else {
    // token valid
  }
}
//---------------------------------------------------------------------------------------------------------------------------//
