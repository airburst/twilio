import resource from 'resource-router-middleware';
import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export default ({ config }) => resource({

    // Send SMS    
    create({ body }, res) {
        client.sms.messages.post({
            to: body.to,
            from: config.sendingNumber,
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
