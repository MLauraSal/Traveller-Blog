/**
 * Validaremos el JWT por medio de un middleware, luego se usara en distintas rutas endPoint
 */

// validarJWT.js

import jwt from 'jsonwebtoken';




export const validateJWT = (req, res, next) => {
  // El token viene por el header, mediante una configuración de axios
  const token = req.cookies.token; // Accede a la cookie llamada "token"

  // Si el usuario no está autenticado o el token ha expirado
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'No se encuentra el token en el header de la petición',
    });
  }

  try {
    // Verificar el token utilizando la clave secreta
    const dataToken = jwt.verify(token, process.env.SECRET_TOKEN);

    req.uid = dataToken.uid;
    req.username = dataToken.username;
    req.email = dataToken.email;
    req.avatarURL = dataToken.avatarURL;

    // Continuar con la ejecución de la ruta
    next();
  } catch (err) {
    return res.status(401).json({
      ok: false,
      msg: 'Token inválido',
    });
  }
};
