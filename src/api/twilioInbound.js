import resource from 'resource-router-middleware';
import twilio from 'twilio';
import dotenv from 'dotenv';
import logMessage from '../lib/logMessage';
dotenv.config();

const reply = (res) => {
    let twiml = new twilio.TwimlResponse();
    twiml.message(process.env.TWILIO_REPLY_MESSAGE);
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
}

export default ({ config }) => resource({

    // Respond to Inbound SMS via GET
    index({ query }, res) {
        let message = query.Body,
            from = query.From;
        reply(res);
        logMessage('in', from, message, config);
    },

    // Respond to Inbound SMS via POST
    create({ body }, res) {
        let message = body.Body,
            from = body.From;
        reply(res);
        logMessage('in', from, message, config);
    }

});
