# Validador de Cédula y RUC Ecuatoriano

Este proyecto es un validador de cédulas y RUC ecuatorianos que incluye una consulta al sistema del SRI para verificar la validez de los RUC de instituciones públicas y sociedades privadas.

## Requisitos previos

- Node.js (versión 12 o superior)
- npm (normalmente viene con Node.js)

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/roggrt/validadorsri.git
   ```

2. Navega al directorio del proyecto:
   ```
   cd validadorsri
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

## Configuración

El proyecto está configurado para renovar automáticamente las sesiones del SRI. No se requiere configuración adicional para esto.

## Ejecución

Para iniciar el servidor, ejecuta:

```
node server.js
```

El servidor se iniciará por defecto en el puerto 3005. Si este puerto está en uso, intentará usar el siguiente puerto disponible.

## Uso

Una vez que el servidor esté en funcionamiento, puedes acceder a la aplicación web en tu navegador visitando:

```
http://localhost:3005
```

Ingresa un número de cédula o RUC en el campo de texto y haz clic en "Validar" para verificar su validez.

## Notas importantes

- La aplicación utiliza una consulta al sistema del SRI para validar ciertos tipos de RUC. Asegúrate de tener una conexión a Internet estable.
- Las sesiones del SRI se renuevan automáticamente cada 30 minutos para mantener la funcionalidad.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cambios mayores antes de crear un pull request.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)
