import './main.scss';
import '../../fonts/fonts.scss';
import '../../images/favicon.jpg';

var span = document.querySelector('.input-box__span');
var input = document.getElementById('menu-input');
input.addEventListener('input',addModify);

function addModify() {
    var inputLength = event.target.value.length;
    span.classList.add('input-box__span_visibility');
if (inputLength == 0){
    span.classList.remove('input-box__span_visibility');
}
  }; 

span.addEventListener('click',clearInput);

function clearInput(){
    input.value='';
}
  