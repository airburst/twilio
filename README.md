Twilio SMS API
==================================

A simple API to send SMS messages.  REST endpoints are as follows:

## Send an SMS Message

Send to a number, with international dialing code and no spaces.

**POST** to `{url}/sms`

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
docker run -d -p4001:4001 _
    -e "TWILIO_ACCOUNT_SID={Your SID}" _ 
    -e "TWILIO_AUTH_TOKEN={Your auth token}" _ 
    -e "TWILIO_REPLY_MESSAGE={Your SMS reply text}" _ 
    airburst/sms-api
```
