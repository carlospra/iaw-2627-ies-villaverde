---
title: "Cliente, servidor y HTTP"
slug: /ut1/cliente-servidor-http
---

# Cliente, servidor y HTTP

Los apuntes de las tres explicaciones del día 1. Cada bloque termina con su ejercicio.

## Bloque 1 · Cliente y servidor

### Qué pasa cuando escribes una dirección

1. **El navegador pide.** Envía una petición HTTP al servidor.
2. **El servidor trabaja.** Busca la página y, si hace falta, ejecuta el código (PHP) y consulta la base de datos (MySQL).
3. **El servidor responde.** Devuelve HTML, o un código de error.
4. **El navegador muestra.** Interpreta HTML, CSS y JavaScript y pinta la página.

Los pasos 1 y 4 ocurren en tu ordenador, el **cliente**. Los pasos 2 y 3, en el **servidor**.

### Página estática y página dinámica

| | Estática | Dinámica |
|---|---|---|
| Qué es | Un fichero HTML que el servidor envía tal cual | Una página que el servidor genera en el momento, con código y datos |
| Quién ve qué | Todo el mundo ve lo mismo | Cada usuario ve lo suyo |
| Ejemplo | La página de presentación de una empresa | Tu área personal del aula virtual |

Este módulo va de montar servidores capaces de generar páginas dinámicas.

### Qué se ejecuta dónde

| | En el cliente (el navegador) | En el servidor |
|---|---|---|
| Lenguajes | HTML, CSS y JavaScript | PHP, Python, Java... |
| Para qué | Presentación, efectos y avisar rápido de errores | Bases de datos, usuarios y contraseñas, cálculos que importan |
| Quién ve el código | El usuario puede verlo y cambiarlo | El usuario solo recibe el resultado |

Pruébalo: en cualquier web, clic derecho y **Ver código fuente**. Ves HTML y JavaScript, nunca PHP: el PHP ya se ejecutó en el servidor.

:::danger La regla de oro
**Todo lo que se comprueba en el navegador se puede saltar.** Validar en el cliente es por comodidad; validar en el servidor es por seguridad. Precios, permisos y contraseñas se comprueban siempre en el servidor.
:::

➡️ **[Ejercicio 1 · ¿Cliente o servidor?](/ut1/ejercicios-dia1#ejercicio-1--cliente-o-servidor)**

## Bloque 2 · HTTP por dentro

HTTP es el idioma en el que hablan el navegador y el servidor.

### Una petición y su respuesta

La **petición** la envía el navegador: un método (`GET`), el recurso que pide y unas cabeceras.

```text
GET /index.html HTTP/1.1
Host: www.ejemplo.es
User-Agent: Firefox
```

La **respuesta** la devuelve el servidor: un código de estado, unas cabeceras, una línea en blanco y el contenido.

```text
HTTP/1.1 200 OK
Server: Apache
Content-Type: text/html

<html> ... </html>
```

### Códigos de estado

El primer número dice de quién es el problema.

| Familia | Qué significa | Los que vas a ver |
|---|---|---|
| 2xx | Todo ha ido bien | 200 OK |
| 3xx | Vete a otra dirección | 301 Moved Permanently · 302 Found |
| 4xx | El error es del cliente | 403 Forbidden · 404 Not Found |
| 5xx | El error es del servidor | 500 Internal Server Error · 503 Service Unavailable |

Un **301 de http a https** es lo habitual: el servidor obliga a usar la conexión cifrada.

### Mirar las cabeceras con curl -I

La opción `-I` pide solo las cabeceras, sin la página:

```bash
curl -I http://www.ejemplo.es
```

```text
HTTP/1.1 301 Moved Permanently
Location: https://www.ejemplo.es/
Server: nginx
Content-Type: text/html
```

- **Server:** qué software responde. Muchos servidores lo ocultan, por seguridad.
- **Content-Type:** qué tipo de contenido llega.
- **Location:** a qué dirección te redirige un 3xx.

➡️ **[Ejercicio 2 · Una respuesta HTTP por dentro](/ut1/ejercicios-dia1#ejercicio-2--una-respuesta-http-por-dentro)**

## Bloque 3 · Las piezas de un servidor LAMP

| Letra | Pieza | Qué hace |
|---|---|---|
| L | Linux | El sistema operativo. Nosotros: Ubuntu Server |
| A | Apache | El servidor web: recibe las peticiones y responde |
| M | MySQL | El gestor de bases de datos: guarda los datos |
| P | PHP | El lenguaje de servidor: genera las páginas dinámicas |

Hay variantes: Nginx en vez de Apache (pila LEMP), o MariaDB en vez de MySQL. Las piezas cumplen el mismo papel.

### Y en Ubuntu, ¿qué se instala?

| Paquete | Qué es |
|---|---|
| `apache2` | El servidor web |
| `mysql-server` | El servidor de bases de datos |
| `php` | El intérprete de PHP |
| `libapache2-mod-php` | El módulo que permite a Apache ejecutar PHP |
| `php-mysql` | La extensión con la que PHP habla con MySQL |

:::tip Los dos fallos típicos
Sin `libapache2-mod-php`, Apache te enseña el código PHP en vez de ejecutarlo. Sin `php-mysql`, PHP no puede conectar con la base de datos.
:::

➡️ **[Ejercicio 3 · Qué software necesita un servidor web](/ut1/ejercicios-dia1#ejercicio-3--qué-software-necesita-un-servidor-web)**
