import dotenv from 'dotenv';

dotenv.config();

function getEnv () {
    return process.env.ENV;
}

export { getEnv };
