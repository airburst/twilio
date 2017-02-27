import { version } from '../../package.json';
import { Router } from 'express';
import twilio from './twilio';
import twilioInbound from './twilioInbound';
import twilioStatus from './twilioStatus';

export default ({ config }) => {
	let api = Router();

	// mount the twilio resources
	api.use('/sms', twilio({ config }));
	api.use('/inbound', twilioInbound({ config }))
	api.use('/status', twilioStatus({ config }))

	// Expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
