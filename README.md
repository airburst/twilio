Twilio SMS API
==================================

A simple API to send SMS messages.

Hosted on Docker Hub at [airburst/sms-api](https://hub.docker.com/r/airburst/sms-api/)

## Running the Docker Image 

```
docker run -d -p4001:4001 -e "TWILIO_ACCOUNT_SID={Your SID}" -e "TWILIO_AUTH_TOKEN={Your auth token}" airburst/sms-api
```
