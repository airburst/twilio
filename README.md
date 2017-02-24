Twilio SMS API
==================================

A simple API to send SMS messages.  REST endpoints are as follows:

## Send an SMS Message

**POST** to `{url}/sms`

Body
```
{
    "to": _telephone number with code e.g. +4477777123456_ ,
    "message": "Some interesting message text"
}
```

## Running the Docker Image 

Hosted on Docker Hub at [airburst/sms-api](https://hub.docker.com/r/airburst/sms-api/)

```
docker run -d -p4001:4001 -e "TWILIO_ACCOUNT_SID={Your SID}" -e "TWILIO_AUTH_TOKEN={Your auth token}" airburst/sms-api
```
