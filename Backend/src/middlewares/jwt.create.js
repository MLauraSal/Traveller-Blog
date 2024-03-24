/**
 * Creación de token para manejos de sesión de usuarios, librería json web token (https://jwt.io/)
 * Este se retorna al crear o loguear un usuarios le damos una expiración de una semana
 */


import jwt from 'jsonwebtoken';


export const generateJWT = (uid, username, email, avatarURL) => {

  const payload = { uid, username, email, avatarURL };

  // Generar el token con una expiración de 7 días
  const token = jwt.sign(payload, process.env.SECRET_TOKEN, { expiresIn: '7d' });

  return token;
};
