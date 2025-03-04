const express = require('express');
const path = require('path');
const compression = require('compression');

// Obtener el puerto de cPanel o usar uno por defecto
// cPanel asigna puertos dinámicamente, así que es importante usar el que proporciona
const port = process.env.PORT || 3000;

// Configuración para trabajar con rutas relativas en cPanel
const app = express();
const publicPath = path.join(__dirname, 'dist');

// Compresión de respuestas para mejor rendimiento
app.use(compression());

// Configuración para manejar rutas relativas en cPanel
// Necesario si tu aplicación no está en la raíz del dominio
app.use((req, res, next) => {
  // Detectar la ruta base desde la que se está sirviendo la aplicación
  if (!global.basePath) {
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const urlObj = new URL(fullUrl);
    global.basePath = urlObj.pathname.replace(/\/+$/, '');
    if (req.originalUrl === '/') global.basePath = '';
  }
  next();
});

// Servir archivos estáticos desde la carpeta dist
app.use(express.static(publicPath));

// Todas las solicitudes no manejadas por archivos estáticos se redirigen al index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).send('Error interno del servidor');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});