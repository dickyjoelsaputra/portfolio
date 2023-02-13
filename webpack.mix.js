// webpack.mix.js

let mix = require('laravel-mix');

mix.js('node_modules/flowbite/dist/flowbite.js', 'dist').setPublicPath('dist');