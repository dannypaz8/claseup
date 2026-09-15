---
name: app-de-una-pantalla
description: Genera apps web de una sola pantalla con HTML, CSS y
  JavaScript puro, listas para pegar en un repo y deployar. Usar siempre
  que se pida crear una app, una pantalla, una interfaz o una web.
---

# App de una pantalla

## Entrega siempre
Tres bloques separados y completos: index.html, styles.css, app.js.
El HTML enlaza styles.css y app.js. Nunca un archivo único.

## Reglas técnicas
- HTML, CSS y JS puro. Sin frameworks, sin CDN, sin fuentes externas.
- Sin backend, sin base de datos, sin llamadas a APIs.
- Persistencia solo con localStorage.
- Todos los colores como variables CSS en :root. Ninguno suelto.
- Espaciado en múltiplos de 8px.

## Reglas de interfaz
- Responsive obligatorio, probado a 375px de ancho.
- Ningún estado vacío en blanco: siempre un mensaje que diga qué hacer.
- Nada de alert(): los mensajes se muestran en la pantalla.
- Toda acción que borra algo pide confirmación.

## Reglas de código
- app.js arranca con un objeto `estado` y una función `render()`.
- Cada acción modifica `estado` y después llama a `render()`.
- Comentarios en español.

## Antes de responder, verificá
- [ ] Los tres bloques están completos
- [ ] Ningún color fuera de :root
- [ ] Se ve bien a 375px
- [ ] La consola no tira errores

## Si falta información
No preguntes de más. Elegí lo razonable, hacelo, y al final listá en
tres líneas qué decidiste vos para que el usuario lo corrija.