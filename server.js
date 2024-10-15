const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint para consultar el SRI
app.get('/api/consultar-sri', async (req, res) => {
  const { ruc } = req.query;

  if (!ruc) {
    return res.status(400).json({ error: 'Se requiere el parámetro RUC' });
  }

  try {
    const sriResponse = await axios.get(`https://srienlinea.sri.gob.ec/sri-catastro-sujeto-servicio-internet/rest/ConsolidadoContribuyente/existePorNumeroRuc?numeroRuc=${ruc}`, {
      headers: {
        'AUTH_SESSION_ID': 'c3f5fffd-59a6-4229-a52a-bf9a4f8e44f5.sso01',
        'Cookie': 'BIGipServerDecla_Sesion=/1CSTHvqY6Oo080FwT1_4xWrsyc9nENiI0hIIYlvB'
      }
    });

    res.json({ existe: sriResponse.data });
  } catch (error) {
    console.error('Error al consultar el SRI:', error);
    res.status(500).json({ error: 'Error al consultar el SRI' });
  }
});

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))
  .on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`El puerto ${PORT} está en uso, intentando con el puerto ${PORT + 1}`);
      app.listen(PORT + 1);
    } else {
      console.error('Error al iniciar el servidor:', err);
    }
  });