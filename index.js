const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Servidor Express de Lucas funcionando!');
});

app.get('/api/info', (req, res) => {
  res.json({
    mensaje: "Este es un mensaje desde tu propia API",
    autor: "Lucas",
    estado: "Activo"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

