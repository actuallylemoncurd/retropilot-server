import crypto from 'crypto';
import { Logger } from 'log4js';
import { AUTH_REGISTER_OAUTH_NO_EMAIL, AUTH_REGISTER_ALREADY_REGISTERED } from '../../consistency/terms';
import { getAccountFromEmail } from '../users';
import orm from '../../models/index.model';
import config from '../../config';