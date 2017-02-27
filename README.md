Twilio SMS API
==================================

A simple API to send SMS messages and store inbound and outbound chat threads in a Firebase app.  

REST endpoints are as follows:

## Send an SMS Message

Send to a number, with international dialing code and no spaces.

**POST** to `{url}/sms`

Twilio inbound web hook

**POST** to `{url}/inbound` 

Body
```
{
    "to": "+4477777123456",
    "message": "Some interesting message text"
}
```

## Running the Docker Image 

Hosted on Docker Hub at [airburst/sms-api](https://hub.docker.com/r/airburst/sms-api/)

```
docker run -d -p4001:4001 \
    -e "TWILIO_ACCOUNT_SID={Your SID}" \ 
    -e "TWILIO_AUTH_TOKEN={Your auth token}" \ 
    -e "TWILIO_REPLY_MESSAGE={Your SMS reply text}" \ 
    -e "FIREBASE_API_KEY={Your Firebase api key} \
    -e "FIREBASE_AUTH_DOMAIN={Your Firebase auth domain} \
    -e "FIREBASE_URL={Your Firebase app url} \
    -e "FIREBASE_SENDER_ID={Your Firebase sender id} \
    airburst/sms-api
```
