'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var nome = 'Sabrina';
var obj = { nome: nome };
var novoObj = _extends({}, obj);
console.log(novoObj);
