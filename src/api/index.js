import { version } from '../../package.json';
import { Router } from 'express';
import twilio from './twilio';

export default ({ config }) => {
	let api = Router();

	// mount the twilio resource
	api.use('/sms', twilio({ config }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
