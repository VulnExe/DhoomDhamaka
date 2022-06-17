const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("config");
const app = express();
const router = express.Router();
const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser');