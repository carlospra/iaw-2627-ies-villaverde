---
title: "Tu servidor"
slug: /ut1/tu-servidor
---

# Tu servidor: máquina virtual a punto

Al acabar tienes una máquina virtual con **Ubuntu Server** que arranca, tiene red y tiene los paquetes al día. Es el servidor sobre el que vas a trabajar toda la unidad.

Hazlo **en tu propio ordenador**. El coordinador del equipo marca en la ficha qué paso ha terminado cada uno y avisa al profesor si alguien lleva más de 5 minutos atascado.

:::info No cuenta para la nota
Sirve para comprobar que tu servidor funciona antes de la primera práctica.
:::

## Paso 1. Crear la máquina en VirtualBox

Pulsa **Nueva** y rellena así:

```text
Nombre:       iaw-tunombre
Imagen ISO:   la de Ubuntu Server LTS del aula
Marca:        Omitir instalación desatendida
Memoria:      2048 MB
Procesadores: 2
Disco:        20 GB
```

## Paso 2. Poner la red en adaptador puente

**Antes de arrancarla:** `Configuración → Red → Adaptador 1 → Conectado a: Adaptador puente`.

:::tip Por qué en puente
Así tu máquina virtual tiene su propia IP en la red del aula, y más adelante podrás abrir tu web desde el navegador del ordenador.
:::

## Paso 3. Instalar Ubuntu Server

Arranca la máquina y sigue el instalador. Las opciones que importan, en el orden en que salen:

- Idioma **Español**, teclado **Spanish**.
- **Ubuntu Server**, la normal, no la minimizada.
- Red: la que viene por DHCP. **Fíjate en la IP que sale.**
- Proxy: vacío. Espejo: el que propone. Disco: usar el disco entero.
- Usuario: tu nombre en minúsculas y sin tildes. Nombre del servidor: `iaw-tunombre`.
- Ubuntu Pro: saltar. Marca **Install OpenSSH server**. Snaps: ninguno.
- Al terminar, **Reboot Now**. Si pide quitar el medio de instalación, pulsa Intro.

## Paso 4. Comprobar que puedes administrar el sistema

Entra con tu usuario y ejecuta:

```bash
sudo whoami
```

Tiene que responder `root`.

## Paso 5. Comprobar la red

```bash
ip a
```

Apunta la IP de la interfaz `enp0s3` (la línea `inet`). Después comprueba que llegas a internet:

```bash
ping -c 3 8.8.8.8
```

Tiene que acabar con `0% packet loss`.

## Paso 6. Actualizar la lista de paquetes

```bash
sudo apt update
```

## Paso 7. Anotar la versión del sistema

```bash
lsb_release -a
```

## Paso 8. Entregar la captura

Haz una captura donde se vean la salida de `lsb_release -a` y la de `ip a`. En VirtualBox: `Ver → Tomar captura de pantalla` (o `Host + E`).

Súbela a la tarea **UT01 · Día 1: mi servidor** del aula virtual. Plazo: **lunes 28/09 a las 23:59**.

## Si te atascas

:::warning Tu IP es 10.0.2.15, o no tienes IP
La red está en NAT, no en puente. Apaga la máquina, revisa el paso 2 y vuelve a arrancar. Si sigue igual, avisa al profesor.
:::

:::warning Los símbolos salen cambiados al teclear
Elegiste mal el teclado en el instalador. Arréglalo con:

```bash
sudo dpkg-reconfigure keyboard-configuration
sudo setupcon
```
:::

:::warning No puedes copiar y pegar en la consola
En la consola de la máquina virtual no se puede sin más. Teclea los comandos: son cortos.
:::

:::note Si a las 20:05 no has terminado
Pasa a los [ejercicios](/ut1/ejercicios-dia1) igual y termina esto en casa: la captura tiene de plazo hasta el lunes.
:::
