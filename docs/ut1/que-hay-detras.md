---
title: "Qué hay detrás de cada paso"
sidebar_label: "Qué hay detrás de cada paso"
slug: /ut1/que-hay-detras
---

# Qué hay detrás de cada paso

Los apuntes de la [sesión 1 del proyecto](/ut1/tu-servidor). Aquí se explica qué estás haciendo en cada paso de la instalación y por qué. Te sirven para escribir el **por qué** y el **para qué** de tu cuaderno: léelos, entiéndelos y explícalo **con tus palabras**. Copiar estas frases en el cuaderno no vale.

## La idea general

Vas a montar un ordenador dentro de tu ordenador, instalarle un sistema operativo de servidor y comprobar que está listo para trabajar: que puedes administrarlo, que tiene red y que su software está al día.

| Capa | Qué es |
|---|---|
| Anfitrión | El ordenador del aula, con su sistema operativo |
| Hipervisor | VirtualBox: el programa que crea y ejecuta máquinas virtuales. Es de **tipo 2**, porque funciona encima de un sistema operativo |
| Máquina virtual | Un ordenador simulado, con su CPU, su RAM, su disco y su tarjeta de red virtuales |
| Invitado | Ubuntu Server, el sistema que instalas dentro de la máquina virtual |

**¿Por qué una máquina virtual?** Porque puedes romperla sin romper nada más, cada uno tiene la suya y se puede copiar o devolver a un estado anterior con una instantánea. Y porque así se trabaja de verdad: casi todos los servidores de hoy son máquinas virtuales en un centro de datos o en la nube.

## Paso 1 · Crear la máquina

- **Recursos virtuales.** La RAM y los procesadores se toman prestados del anfitrión mientras la máquina está encendida. Ubuntu Server necesita como mínimo 1,5 GB de RAM y 5 GB de disco; le damos algo más para instalar Apache, MySQL y PHP con holgura.
- **Disco virtual.** Es un fichero en el anfitrión. Si es de tamaño dinámico, ocupa lo que se usa, no los 20 GB de golpe.
- **Imagen ISO.** Una copia exacta de un disco de instalación en un solo fichero. Montarla en la máquina virtual equivale a meter el DVD o pinchar el USB de instalación.
- **Instalación desatendida.** VirtualBox puede instalar el sistema él solo. La saltamos porque el objetivo es ver y documentar cada decisión.

## Paso 2 · La red en adaptador puente

VirtualBox ofrece varias formas de conectar la máquina virtual a la red:

| Modo | Cómo funciona | Para qué sirve |
|---|---|---|
| NAT (por defecto) | La máquina sale a internet a través del anfitrión, escondida detrás de él. Siempre recibe `10.0.2.15` | Navegar e instalar paquetes. Desde fuera no se llega a ella |
| **Adaptador puente** | La máquina se conecta a la red real como un ordenador más, y el router le da su propia IP | Un servidor: los demás pueden llegar a él |
| Solo anfitrión | Red privada entre el anfitrión y sus máquinas virtuales, sin internet | Laboratorios aislados |

Un servidor web solo tiene sentido si otros pueden llegar a él. Por eso va en puente, y se configura **antes de arrancar**, porque el instalador configura la red al principio.

## Paso 3 · El instalador de Ubuntu Server

Cada pantalla del instalador es una decisión de administrador:

| Pantalla | Qué significa |
|---|---|
| Idioma y teclado | El idioma de los mensajes y la distribución del teclado. Con el teclado mal, símbolos como la barra vertical, el guion o `~` salen cambiados |
| Ubuntu Server | La versión de servidor no tiene escritorio, solo terminal. Gasta menos recursos y tiene menos programas que puedan fallar o ser atacados |
| Red | El instalador pide una IP al router por **DHCP**, asignación automática. En un servidor real se pone una IP fija; aquí usamos DHCP por sencillez |
| Proxy | Un intermediario para salir a internet que exigen algunas redes de empresa. Si la red no lo usa, se deja vacío |
| Espejo (*mirror*) | El servidor del que se descargan los paquetes: una copia de los repositorios de Ubuntu cercana a ti |
| Disco | Usar el disco entero. El instalador lo particiona solo, con **LVM**, que permite ampliar el espacio más adelante sin reinstalar |
| Perfil | Tu nombre, el nombre del servidor, tu usuario y tu contraseña |
| Ubuntu Pro | Una suscripción de soporte ampliado. No la necesitamos |
| SSH | Instala **OpenSSH**, el servicio para administrar el servidor a distancia |
| Snaps | Aplicaciones empaquetadas por Canonical. Ninguna |

### El perfil

- **Nombre del servidor (*hostname*).** El nombre de la máquina en la red. Solo admite minúsculas, números y guiones. Sale en el *prompt*: `lucia@iaw-lucia:~$`. En una empresa con cien servidores, un buen nombre dice qué es cada uno.
- **Usuario.** Ubuntu no deja entrar como `root`, el administrador total. Tu usuario puede administrar con `sudo`, pero trabaja normalmente sin privilegios. Es el **principio de mínimo privilegio**.

### OpenSSH

SSH permite abrir una terminal del servidor desde otro ordenador, cifrando todo lo que viaja. Es como se administran los servidores reales: nadie tiene delante la pantalla de un servidor de un centro de datos. Escucha en el **puerto 22**. Instalarlo abre una puerta, y más adelante veremos cómo asegurarla.

### Por qué apt y no snaps

Ubuntu tiene dos formas de instalar software. **apt** instala paquetes `.deb` desde los repositorios de Ubuntu, integrados en el sistema. Los **snaps** son paquetes autocontenidos que se actualizan solos. En el módulo usamos apt, que es lo habitual en servidores. Y algunos snaps, como el de Nextcloud, traen su propio servidor web ocupando el puerto 80: la semana que viene, Apache no podría arrancar.

### Por qué LTS

*Long Term Support*: cinco años de actualizaciones de seguridad gratuitas. En un servidor se busca estabilidad, no la última novedad.

## Paso 4 · `sudo whoami`

- `whoami` dice con qué usuario se está ejecutando una orden.
- `sudo` ejecuta la orden como `root`. Pide **tu** contraseña, no la de `root`, y deja registro de quién hizo qué.
- Si responde `root`, tu usuario puede administrar el sistema, que es lo que necesitas para instalar y configurar todo lo que viene.

La contraseña no se ve mientras la escribes, ni siquiera con asteriscos, para no revelar cuántos caracteres tiene.

## Paso 5 · `ip a` y `ping`

**`ip a`** muestra las interfaces de red:

- `lo` es la interfaz de bucle local (`127.0.0.1`), con la que la máquina se habla a sí misma.
- `enp0s3` es la tarjeta de red virtual: *en* de ethernet, *p0* del bus PCI 0 y *s3* de la ranura 3.
- La línea `inet` es tu dirección IPv4, con su máscara: por ejemplo, `192.168.1.125/24`.

Las IP que empiezan por `10.`, `172.16` a `172.31` y `192.168.` son **privadas**: solo valen dentro de una red local. Para salir a internet, el router las traduce a su IP pública.

**`ping -c 3 8.8.8.8`** envía tres mensajes ICMP de «¿estás ahí?» y espera respuesta. La `8.8.8.8` **no es tu IP**: es el DNS público de Google, una dirección fija de internet que siempre responde. Cada línea `64 bytes from 8.8.8.8` es una respuesta, y lo que importa es el resumen: `3 received, 0% packet loss` significa que tu servidor sale a internet.

:::tip La IP puede cambiar
Con DHCP, el router puede darle otra IP la próxima vez. Al empezar cada sesión, lo primero es mirar `ip a`.
:::

## Paso 6 · `sudo apt update`

Los **repositorios** son servidores con miles de paquetes listos para instalar. `apt update` no instala nada: descarga la lista actualizada de qué paquetes hay y en qué versión, como consultar el catálogo antes de comprar. Necesita `sudo` porque escribe en ficheros del sistema.

`apt upgrade`, en cambio, sí instalaría las actualizaciones pendientes.

## Paso 7 · `lsb_release -a`

Muestra la distribución, la versión y su nombre en clave. Es el primer dato de la documentación de cualquier servidor: de la versión dependen qué paquetes hay y hasta cuándo recibirá actualizaciones de seguridad.

## Paso 8 · El cuaderno

Documentar no es un trámite. La documentación de una instalación sirve para repetirla, para que otro la mantenga y para encontrar qué cambió cuando algo deja de funcionar. Por eso se mantiene como una pieza más del servidor: con las versiones, las decisiones tomadas y los problemas que surgieron.

Lo que más vale del cuaderno son las **incidencias**: un problema resuelto y documentado.
