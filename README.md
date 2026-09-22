# IAW 2026-2027 · Web del módulo

Web del módulo 0376 Implantación de aplicaciones web (2º ASIR, IES Villaverde), hecha con [Docusaurus](https://docusaurus.io/) y publicada en GitHub Pages:

<https://carlospra.github.io/iaw-2627-ies-villaverde/>

## Probarla en tu ordenador

```
npm.cmd install
npm.cmd start
```

Se abre en <http://localhost:3000/iaw-2627-ies-villaverde/> y se recarga sola al guardar cualquier fichero.

## Publicar cambios

```
git add .
git commit -m "docs: describe el cambio"
git push
```
## Mirror Ubuntu Server 24.04.6 LTS

```
https://130-4.download.real-debrid.com/d/4YIDJVYRLHPUU/ubuntu-24.04.5-live-server-amd64.iso
```

Cada `git push` vuelve a publicar la web sola (pestaña *Actions* del repositorio).

## Dónde está cada cosa

- `docs/intro.md`: la portada.
- `docs/ut1/`: la UT1 (presentación, tu servidor, apuntes y ejercicios).
- `docs/ut2.md` a `docs/ut7.md`: el resto de unidades, por rellenar.
- `static/material/`: presentaciones y ficheros para descargar.
- `sidebars.js`: el menú de la izquierda. Una página nueva hay que añadirla aquí.
