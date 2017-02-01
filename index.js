"use strict";
const express = require('express');
const sass = require('node-sass-middleware');
const path = require('path')
const app = express();

app.set('view engine', 'jade');
app.use(
  sass({
    src: path.join( __dirname, 'public'),
    dest: path.join( __dirname, 'public'),
    debug: true,
    outputStyle: 'compressed'
  })
);

app.use(express.static( path.join( __dirname, 'public' ) ) );

app.get('/', (req,res) => { res.render( 'home', {} ) } );
app.get('/about', (req,res) => { res.render('about', {} ) } );
app.get('/projects', (req,res) => { res.render( 'projects', {} ) });
app.get('/contact', (req,res) => {res.render( 'contact', {} ) } );

app.post('/contact', function (req,res) {

});

app.listen(3000);
console.log('listening on http://localhost:3000/')
