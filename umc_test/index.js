// index.js
// const express = require('express') 
import express from 'express';
import { tempRouter } from './src/routes/temp.route.js';

const app = express();
const port = 3000;

// router setting
app.use('/temp', tempRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

// router setting
app.use('/temp', tempRouter);

// error handling
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send(err.stack);
});

app.listen(port, () => {
		console.log(`Example app listening on port ${port}`);
});

app.use((req, res, next) => {
    const err = new BaseError(status.NOT_FOUND);
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;   
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; 
    res.status(err.data.status).send(response(err.data));
});