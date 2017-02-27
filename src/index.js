import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import * as firebase from 'firebase';
import middleware from './middleware';
import api from './api';
import conf from './config.json';
import dotenv from 'dotenv';
dotenv.config();

// Initialize Firebase
let fbConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_URL,
	messagingSenderId: process.env.FIREBASE_SENDER_ID
};
let Firebase = firebase.initializeApp(fbConfig);
let ref = Firebase.database().ref('chat');

// Package Firebase ref into config
let config = Object.assign(conf, { ref: ref });

let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({
	limit: config.bodyLimit
}));

// internal middleware
app.use(middleware({ config }));

// api router
app.use('/', api({ config }));

app.server.listen(process.env.PORT || config.port);

console.log(`Started on port ${app.server.address().port}`);

export default app;
