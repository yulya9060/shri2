import './main.scss';
import '../../fonts/fonts.scss';
import '../../images/favicon.jpg';

//текстовое поле с крестиком
var spansClear = document.querySelectorAll('.input-clear');
var inputsClear = document.querySelectorAll('.input-control');

//текстовое поле с выпадающим списком
var selectListShow = document.querySelectorAll('.display-row__list');
var spanArrow = document.querySelectorAll('.input-arrow');
var userInput = document.querySelectorAll('.input-list');


//текстовое поле с выпадающим списком
userInput = Array.prototype.slice.call(userInput);
userInput.forEach(function(user){
    user.addEventListener('input',function(){
        this.parentNode.querySelector('.input-arrow').classList.add('input-arrow_visibility');
        this.parentNode.querySelector('.display-row__list').classList.add('display-row__list_visibility');
        var users= document.querySelectorAll('.display-row__list')[0].children.length;
//работа с массивом участников
var usersArray = [];
var search = event.target.value;
search = search.toLowerCase();
var users = this.parentNode.querySelectorAll('.display-row__list')[0].children;
for (var i=0;i<users.length; i++)
{   
    var li = document.querySelectorAll('.display-row__list')[0].children[i].innerText.toLowerCase();
  
        if (~(li.indexOf(search)) && (search.length!=0)) {
            this.parentNode.querySelectorAll('.display-row__list')[0].children[i].classList.add('display-row__li_fontWeigth');
        }
        else {
            this.parentNode.querySelectorAll('.display-row__list')[0].children[i].classList.remove('display-row__li_fontWeigth');
        }
   
}

        if (event.target.value.length==0){
            this.parentNode.querySelector('.input-arrow').classList.remove('input-arrow_visibility');
            this.parentNode.querySelector('.display-row__list').classList.remove('display-row__list_visibility');
        }

    });
    user.addEventListener('blur',function(){
        this.parentNode.querySelector('.input-arrow').classList.remove('input-arrow_visibility');
        this.parentNode.querySelector('.display-row__list').classList.remove('display-row__list_visibility');
    })
});



//текстовое поле с крестиком
Array.prototype.filter.call(spansClear,function(spanClear){
    spanClear.addEventListener('click',function(event){
        console.log(spanClear);
        event.preventDefault();
        this.parentNode.querySelector('.input-control').value = '';
        this.classList.remove('input-clear_visibility');
    })
});

Array.prototype.filter.call(inputsClear,function(inputClear){
    inputClear.addEventListener('input',function(event){
        var inputLength = event.target.value.length;     
        console.log(inputClear);  
        this.parentNode.querySelector('.input-clear').classList.add('input-clear_visibility');
        if (inputLength == 0){
            this.parentNode.querySelector('.input-clear').classList.remove('input-clear_visibility');
        }
    })

});

