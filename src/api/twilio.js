import resource from 'resource-router-middleware';
import twilio from 'twilio';
import config from '../config.json';

const client = twilio(config.SID, config.AUTH_TOKEN);

export default ({ config }) => resource({

    // Send SMS    
    create({ body }, res) {
        client.sms.messages.post({
            to: body.to,
            from: config.SENDING_NUMBER,
            body: body.message
        }, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    }

    /** GET /:id - Return a given entity */
	// read({ facet }, res) {
	// 	res.json(facet);
	// }

});
