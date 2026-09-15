# Plantilla del taller

Tu app de una pantalla, lista para publicarse en internet.

## Que hace cada archivo

| Archivo | Para que sirve |
|---|---|
| `public/index.html` | Aca va tu HTML |
| `public/styles.css` | Aca va tu CSS |
| `public/app.js` | Aca va tu JavaScript |
| `server.js` | No lo toques. Sirve la carpeta `public` |
| `package.json` | No lo toques. Le dice a Railway como arrancar |

## Pasos

1. Descarga este repo (boton verde **Code** → **Download ZIP**) y descomprimilo.
2. Abri la carpeta en VS Code.
3. Pedile la app a Claude en el chat. Copia cada bloque en su archivo.
4. Probala en tu computadora:

```bash
npm install
npm start
```

Abri http://localhost:3000 en el navegador.

5. Subila a tu GitHub y conectala en Railway.

## Si algo no anda

- **La pagina sale en blanco** → mira la consola del navegador (F12). Casi siempre falta un archivo o hay un error en `app.js`.
- **Railway deploya pero la URL no abre** → alguien toco `server.js`. Tiene que decir `process.env.PORT`.
- **Railway no arranca** → falta el script `start` en `package.json`.
- **En Railway no anda la red** → conecta tu cuenta de GitHub en Railway antes de deployar.

## Reglas de la app

Sin base de datos, sin API keys, sin backend. Todo lo que quieras guardar va en `localStorage`.
