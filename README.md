# 🌐 Roomio – Plataforma de Reservas de Alojamientos

> Aplicación web desarrollada en React con slider de video, galería de imágenes y formulario de reservas integrado con Netlify Forms.

---

## ✨ Características
- Video Slider en Home con transición suave
- Galería con navegación (Swiper.js)
- Formulario de Reservas listo para Netlify Forms (redirección a `/gracias`)
- Diseño responsive (Grid/Flex, tipografía Poppins)
- Detalles de accesibilidad (alt, aria-labels)

## 📦 Requisitos
- Node.js 16+ y npm
- Navegador web (Chrome, Edge, Firefox, Safari)

## ▶️ Cómo ejecutar
1) Instalar dependencias:
```bash
npm install
```
2) Iniciar el servidor de desarrollo:
- PowerShell (una línea):
```powershell
cd "C:\\Users\\Estefania\\Desktop\\ESTEFANIA\\proyectosdev\\landingroomio - react"; npm start
```
- PowerShell (dos líneas):
```powershell
cd "C:\\Users\\Estefania\\Desktop\\ESTEFANIA\\proyectosdev\\landingroomio - react"
npm start
```

## 🧩 Estructura de carpetas
```
public/
  images/
    img01.png .. img08.png
    gallery.png         # fondo de galería
    booking.png         # fondo de reservas
  videos/
    hotel.mp4, rural-house.mp4, bungalow.mp4, camping.mp4
  index.html            # incluye formulario oculto para Netlify

src/
  index.js
  index.css             # reset global + fuente Poppins + utilidades
  App.js / App.css
  components/
    Header/             # cabecera compartida en todas las páginas
    VideoSlider/        # estilos de .video-slide aquí (no en Home.css)
    BookingForm/        # TODOS los estilos del formulario
  pages/
    Home/
    Gallery/
    Booking/
    ThankYou/           # página de agradecimiento (/gracias)
```

## ✉️ Netlify Forms (Reservas)
El formulario ya está configurado:
- `src/components/BookingForm/BookingForm.js` → `data-netlify`, `netlify-honeypot`, `name="roomio-reservas"`, `action="/gracias"` y nombres de campos.
- `public/index.html` → formulario oculto para detección en build.
- Notificaciones por email: Netlify → Forms → roomio-reservas → Notifications → Email.

## 🛠️ Scripts
```bash
npm start       # desarrollo
npm run build   # producción
```

## 🚀 Build y deploy
- Local: `npm run build` (genera `build/`).
- Netlify: conecta el repositorio o sube `build/`. El formulario aparecerá como `roomio-reservas`.

## 🎨 Notas de diseño
- `Header` se monta una vez en `App.js` (visible en todas las rutas).


