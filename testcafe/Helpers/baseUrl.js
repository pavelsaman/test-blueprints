import config from '../config';
import { getEnv } from './env';


function getBaseUrl () {
    return config.baseUrl[getEnv()];
}

export default getBaseUrl;
