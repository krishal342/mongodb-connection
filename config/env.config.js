import 'dotenv/config';

const config = {
    PORT : process.env.PORT,
    CONNECTION_STRING : process.env.CONNECTION_STRING,
    DATABASE_NAME : process.env.DATABASE_NAME
};

export default config;