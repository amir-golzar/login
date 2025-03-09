const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const body = require('body-parser');

const env = require('dotenv');
env.config()

const app=express()

app.use(cors({origin:"*"}))
app.use(body.json())

app.post()

app.listen(process.env.POET)
