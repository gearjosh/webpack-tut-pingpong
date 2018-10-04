import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/input.scss';
import { backend } from './backend';
import $ from 'jquery';


$(document).ready(function() {
  $('#form').submit(function() {
    event.preventDefault(event);
    let userInput = $('#input').val();
    let shouldBeAZero = backend(userInput);
    $('#input').val("");
    $('#inputs-go-here').append(`<li>${userInput}</li>`);
    $('#zeroes-go-here').append(`<li>${shouldBeAZero}</li>`);
  });
});
