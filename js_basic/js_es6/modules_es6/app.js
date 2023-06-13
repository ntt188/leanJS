import logger from './logger/index.js';
import {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
} from './constants.js';

logger('test mesage ...', TYPE_ERROR)