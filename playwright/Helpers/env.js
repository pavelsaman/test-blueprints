import dotenv from 'dotenv';

dotenv.config();

export function env () {
    return process.env.ENV;
}

export function testsRunInPipeline () {
    return process.env.BROWSER === 'pipeline';
}
