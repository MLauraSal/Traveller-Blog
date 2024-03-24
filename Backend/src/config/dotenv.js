import "dotenv/config";

export const configDotenvPort = () => { return {port: process.env.PORT || 3000};};

export const configDotEnvBD = () => {return{mongodb_uri: process.env.MONGO_URI};};

