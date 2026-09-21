---
title: "Proyecto, sesión 1: tu servidor base"
sidebar_label: "Proyecto · Tu servidor base"
slug: /ut1/tu-servidor
---

# Proyecto, sesión 1: tu servidor base

Primera sesión del proyecto de la UT1. Al acabar tienes una máquina virtual con **Ubuntu Server** que arranca, tiene red y tiene los paquetes al día: la base sobre la que montarás el servidor de tu cliente.

**Se trabaja en equipo:** el coordinador reparte los pasos como tickets y os ayudáis a instalar y a entender cada uno. Pero **cada uno instala su propio servidor y escribe su propio cuaderno**, con sus palabras. Ayudar es explicar, no teclear en el ordenador de otro.

Hazlo **en tu propio ordenador** y **haz una captura al terminar cada paso**: las necesitas para el [cuaderno del proyecto](#paso-8-entregar-el-cuaderno). Si no puedes hacer la captura, vale una foto de la pantalla con el móvil.

El coordinador del equipo marca en la ficha qué paso ha terminado cada uno y avisa al profesor si alguien lleva más de 5 minutos atascado.

:::info Hoy no se califica
El cuaderno es la primera parte de la documentación del proyecto, que se califica al final del proyecto. Hasta entonces puedes mejorarlo.
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
- Ubuntu Pro: saltar. Marca **Install OpenSSH server**.
- Snaps: **ninguno**. Pulsa *Done* sin marcar nada.
- Al terminar, **Reboot Now**. Si pide quitar el medio de instalación, pulsa Intro.

### Nombre del servidor y snaps

:::warning No te equivoques aquí
- **Your server's name:** `iaw-` y tu nombre, en minúsculas, sin espacios ni tildes. Por ejemplo, `iaw-lucia`. Sale en el prompt de la terminal: `lucia@iaw-lucia:~$`.
- **Snaps:** ninguno. Algunos, como el de Nextcloud, ocupan el puerto 80, y la semana que viene Apache no podría arrancar.
:::

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

## Paso 8. Entregar el cuaderno

Descarga la [plantilla del cuaderno del proyecto](pathname:///material/UT1_Dia1_Cuaderno_plantilla_IAW.docx). Para cada paso, pega tu captura y explica con tus palabras **qué has hecho, por qué y para qué sirve**. Al final, anota las incidencias que hayas tenido y cómo las resolviste.

Para hacer capturas en VirtualBox: `Ver → Tomar captura de pantalla` (o `Host + E`).

Guárdalo en PDF como `cuaderno_proyecto_Nombre_Apellido.pdf` y súbelo a la tarea **UT01 · Proyecto: avance del día 1**. Plazo: **lunes 28/09 a las 23:59**.

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
Pasa a los [ejercicios](/ut1/ejercicios-dia1) igual y termina el cuaderno en casa: tiene de plazo hasta el lunes.
:::
