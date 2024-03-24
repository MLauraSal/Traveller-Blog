import { app } from './app.js';
import { configDotenvPort} from './config/dotenv.js';
import { connectDB } from "./database/db.js";




connectDB();

const {port} = configDotenvPort ();



app.listen(port,console.log(`server on port ${port}` ));