// temp.route.js

import express from 'express';
import { tempTest, tempException } from '../controllers/temp.controller.js'; // tempException 함수 추가

export const tempRouter = express.Router();

tempRouter.get('/test', tempTest);

tempRouter.get('/exception/:flag', tempException);
