import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import { generateJWT } from "../middlewares/jwt.create.js";




//=============REGISTER A NEW USER
// POST : api/users/register



export const registerUser = async (req, res) => {

   //Recibimos los datos del formularios de registro del front
   const { username, email, password, avatarURL = null } = req.body

    try {
        //verificamos que los campos sean completados
        if(!username || !email || !password){
            return res.status(400).json({message:"Fill in all fields."})
        }
        const newEmail = email.toLowerCase();

        //Verificamos que el usuario no este ya registrado
        const emailExists = await User.findOne({email: newEmail});
        if(emailExists) {
            return res.status(400).json({message: "Email already exists"})
        }

       //Verificamos que el password sea menor de 6
        if(password.trim().length < 6) {
            return res.status(400).json({message: "Password should be at least 6 characters."});
        }
        
         //Encriptaremos el password por seguridad con la biblioteca bcryptjs
         const salt           = bcrypt.genSaltSync(10)
         const hashPassword = bcrypt.hashSync(password, salt);
 
       //Registramos el usuario
        const newUser = new User({
            username,
            email,
            password: hashPassword,
            avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PyKYrBKAWWy6YCbQzWQcwIRqH8wYMPluIZiMpV1w0NYSbocTZz0ICWFkLcXhaMyvCwQ&usqp=CAU', 
        });
        
        const createUserDB = await newUser.save() // método mongoose para guardar en su bd

        //Almacenamos los datos que enviaremos al front (saca password y v_)
        const user = {uid: createUserDB._id, username, email, avatarURL}
     
        const token = generateJWT(createUserDB._id, createUserDB.username, createUserDB.email, createUserDB.avatar);

        res.status(201).json({ message: "User created successfully", user, token });
        
        
        
    } catch (error) {
        res
        .status(400)
        .json({ message: "User registration failed" });
    }
    
    
};

//=============LOGIN A REGISTERED USER
// POST : api/users/login


export const loginUser = async (req, res) => {

    //Recibimos los datos del formulario de login del frontend
    const {email, password} = req.body

   
    try {

        //Buscamos por el email en la bd no retornamos password y versión
        const userFound = await User.findOne({ email});
        if (!userFound){ 
            return res.status(400).json({message:"User not found"});
        }

        //Si el email es encontrado compara el password del usuario recibido con el encontrado
        const validPassword = bcrypt.compareSync(password, userFound.password)
        if(!validPassword) return res.status(400).json('Password incorrecto')       //Si la contraseña no coincide

          //Almacenamos los datos que enviaremos al front (saca password y v_)
          const user = {
            uid      : userFound._id,
            username : userFound.username,
            email    : userFound.email,
            avatarURL: userFound.avatar,
        }
        const token = generateJWT(userFound._id, userFound.username, userFound.email, userFound.avatar);//creamos JWT para manejo de sesión en el front
        res.status(200).json({token, user})  
        
    
        
       
       
    } catch (error) {
        return res.status(403).json({message:"Login failed, please check your credentials."})
    }
   
};
//VALIDAR TOKEN
export const validateToken = (req,res) => {
    // Si llegamos a este punto, el token ha sido validado correctamente por el middleware
    res.status(200).json({
        ok       : true,
        msg      : 'Token válido',
        uid      : req.uid,
        username : req.username,
        email    : req.email,
        avatarURL: req.avatarURL
    })
}

