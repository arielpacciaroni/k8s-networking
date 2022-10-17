import dotenvLoad from 'dotenv-load';

dotenvLoad();

import express from 'express';
import authController from './src/services/auth/auth.controller';
import { env } from './utils/env';

(async() => {
	try {
		const app = express();

		app.get("/healthcheck", authController.getAuthControllerStatus);
		
		app.listen(env.PORT, () => {
			console.info(`Microservice auth is listening on port ${env.PORT}`);
		})
	} catch(err) {
		console.error(`Microservice auth: ${err}`)
	}
})();