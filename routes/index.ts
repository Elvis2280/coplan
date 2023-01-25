import { NextFunction } from 'express';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req: Request, res: any, next: NextFunction) {
  res.status(200).json({ message: 'Hola Mundo' });
});

module.exports = router;
