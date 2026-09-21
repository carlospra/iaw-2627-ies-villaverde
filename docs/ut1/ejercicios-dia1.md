---
title: "Ejercicios del día 1"
slug: /ut1/ejercicios-dia1
---

# Ejercicios del día 1

Tres ejercicios cortos, cada uno después de su explicación. **Cuentan para la nota** (RA1, bloque de ejercicios de clase).

:::info Cómo se entregan
Los tres van en **un único documento**. Al acabar la sesión lo guardas en PDF como `ejercicios_dia1_Nombre_Apellido.pdf` y lo subes a la tarea **UT01 · Ejercicios del día 1**.

Si tu máquina virtual no está lista, los ejercicios 2 y 3 se hacen en la terminal del ordenador del aula.
:::

| Nota | Cuándo |
|---|---|
| 10 | Entregado al acabar la sesión y correcto |
| 5 | Entregado, pero con errores o incompleto |
| 0 | No entregado |

## Ejercicio 1 · ¿Cliente o servidor?

Para cada tarea de una aplicación web, indica si se hace en el **cliente** (el navegador), en el **servidor** o en **ambos**, y explica por qué en una frase.

| Tarea | Cliente, servidor o ambos | Por qué |
|---|---|---|
| a) Guardar un pedido en la base de datos | | |
| b) Desplegar un menú al pasar el ratón | | |
| c) Comprobar el usuario y la contraseña al iniciar sesión | | |
| d) Avisar de que un campo obligatorio está vacío antes de enviar | | |
| e) Mostrar los productos que quedan en el almacén | | |
| f) Cambiar entre modo claro y oscuro sin recargar la página | | |
| g) Calcular el total del carrito con IVA y cobrarlo | | |
| h) Comprobar que un correo tiene un formato válido | | |

## Ejercicio 2 · Una respuesta HTTP por dentro

Ejecuta estas dos peticiones:

```bash
curl -I https://www.educa.madrid.org
curl -I http://ubuntu.com
```

Completa la tabla. Si una cabecera no aparece, escribe «no lo indica».

| Petición | Código | Qué significa | Servidor (`server`) | Tipo (`content-type`) |
|---|---|---|---|---|
| https://www.educa.madrid.org | | | | |
| http://ubuntu.com | | | | |

Compara los dos códigos de estado. Si son distintos, explica por qué.

:::note Si curl no está instalado
```bash
sudo apt install -y curl
```
:::

## Ejercicio 3 · Qué software necesita un servidor web

Este comando muestra, para cada paquete, la versión que se instalaría:

```bash
apt policy apache2 mysql-server php libapache2-mod-php php-mysql
```

Para saber qué hace cada paquete:

```bash
apt show apache2 2>/dev/null | grep -A1 Description
```

Completa la tabla:

| Paquete | Para qué sirve | Versión candidata |
|---|---|---|
| `apache2` | | |
| `mysql-server` | | |
| `php` | | |
| `libapache2-mod-php` | | |
| `php-mysql` | | |
