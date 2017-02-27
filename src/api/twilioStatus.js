import resource from 'resource-router-middleware';
import twilio from 'twilio';
// import dotenv from 'dotenv';
// dotenv.config();

// const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export default ({ config }) => resource({

    // Respond to Inbound SMS    
    create({ body }, res) {
        console.log('Message Status: \n', body);                  //
        var twiml = new twilio.TwimlResponse();
        twiml.message('Thank you for your message from Birmingham City Council');
        res.writeHead(200, { 'Content-Type': 'text/xml' });
        res.end(twiml.toString());
    }

});
