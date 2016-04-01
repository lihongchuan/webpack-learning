// require('./css/main.scss');
// var sub = require('./sub');
// var $ = require('jquery');
// var moment = require('moment');
// var app  = document.createElement('div');
// app.innerHTML = '<h1>Hello World it</h1>';
// document.body.appendChild(app);
// app.appendChild(sub());
// $('body').append('<p>look at me! now is ' + moment().format('L') + '</p>')

//ES2015
import './css/main.scss';
// import './js/plugin.js';
import 'imports?jQuery=jquery!./js/plugin.js';
import generateText from './sub';
import $ from 'jquery';
import moment from 'moment';

let app  = document.createElement('div');
const myPromise = Promise.resolve(42);
myPromise.then((number) => {
	$('body').append('<p>promise result is ' + number + ' now is ' + moment().format() + '</p>');
	//call our jquery plugin!
    $('p').greenify();
});
app.innerHTML = '<h1>Hello World it</h1>';
document.body.appendChild(app);
app.appendChild(generateText());