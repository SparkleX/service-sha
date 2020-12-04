'use strict';
const Koa = require("koa");
const ip = require('ip');
const { v4: uuidv4 } = require('uuid');

const ipAddress = ip.address();
const app = new Koa();


app.use(async (ctx) => {
	ctx.body = {
		a: {
			ip: ipAddress,
			uuid: uuidv4(),
			name: "SHA",
		},		
		env: process.env,
		request: ctx.request
	};
});

const port = process.env.PORT || 3000;
app.listen(port);