# Implementación de servicio VPN con Docker

A continuación se detallará brevemente la implementación de un servidor VPN utilizando **OpenVPN** con **Docker**.



#### Descargar imagen de DockerHub:

```bash
docker pull kylemanna/openvpn
```



#### Primer ejecución:

Iniciar el contenedor que contendrá los archivos de configuración y los certificados.

El contenedor solicitará una frase de contraseña para proteger la clave privada utilizada por la autoridad de certificación recién generada.

```bash
docker run -v $PWD/openvpn_data/conf:/etc/openvpn --rm kylemanna/openvpn ovpn_genconfig -u udp://localhost
docker run -v $PWD/openvpn_data/conf:/etc/openvpn --rm -it kylemanna/openvpn ovpn_initpki
```



- Ejecutar el contenedor:


```bash
docker run -v $PWD/openvpn_data/conf:/etc/openvpn -d -p 1194:1194/udp --cap-add=NET_ADMIN kylemanna/openvpn
```



#### Añadir un cliente VPN:

- Generar un certificado de cliente sin una contraseña:


```bash
docker run -v $PWD/openvpn_data/conf:/etc/openvpn --rm -it kylemanna/openvpn easyrsa build-client-full nombre_cliente_vpn nopass
```



- Recuperar la configuración del cliente con certificados integrados


```bash
docker run -v $PWD/openvpn_data/conf:/etc/openvpn --rm kylemanna/openvpn ovpn_getclient nombre_cliente_vpn > nombre_cliente_vpn.ovpn
```



---



### Docker Compose:

```yaml
version: '2'
services:
  openvpn:
    cap_add:
     - NET_ADMIN
    image: kylemanna/openvpn
    container_name: openvpn_container
    ports:
     - "1194:1194/udp"
    restart: unless-stopped
    volumes:
     - $PWD/openvpn_data/conf:/etc/openvpn
```



---



### Referencia de origen:

https://github.com/kylemanna/docker-openvpn

https://hub.docker.com/r/kylemanna/openvpn/