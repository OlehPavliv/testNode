
var createPage ={
    title:function (someText){
        var h1 = document.createElement('h1');
        h1.className='titleStyle';
        h1.innerHTML = someText;
        document.body.appendChild(h1);    
    },
    divBlock:function(){
        var div = document.createElement('div');
        div.className='main';
        document.body.appendChild(div)
    },
    paragraph:function(someText){
        var p  = document.createElement('p');
        p.innerHTML = someText;
        parentElem=document.querySelector('.main');
        parentElem.appendChild(p);
    },
    createQuestion:function(someText){
        var input  = document.createElement('input');
        var span  =document.createElement('span');
        span.innerHTML =someText;
        input.type = 'checkbox';
        input.value=someText;
        parentElem.appendChild(input);
        parentElem.appendChild(span);     
    },
    createBtn:function(someText){
        var btn  = document.createElement('input');
        btn.type = 'button';
        btn.value = someText;
        btn.className = 'btnStyle';
        parentElem.appendChild(btn);
    }
}


createPage.title('Тест по програмуванню');

createPage.divBlock();

createPage.paragraph('Які із цих операторів не має в JavaScript');
createPage.createQuestion('\-');
createPage.createQuestion('\#');
createPage.createQuestion('\*');

createPage.paragraph('Яка арифметична операція приводить до помилки в JavaScript?');
createPage.createQuestion('Ділення на ноль');
createPage.createQuestion('Множення числа на строку');
createPage.createQuestion('Корінь з від\'ємного числа');

createPage.paragraph('Змінні apple та Apple - одинакові?');
createPage.createQuestion('Так');
createPage.createQuestion('Ні');
createPage.createQuestion('З великої літери змінні називати не можна.');


createPage.createBtn('Перевірити мої результати');




var test ={
    question1:'Які із цих операторів не має в JavaScript',
    answer1:'#',
    questiion2:'Яка арифметична операція приводить до помилки в JavaScript?',
    answer2:'Корінь з від\'ємного числа',
    question3:'Змінні apple та Apple - одинакові?',
    answer3:'Ні'
}


var testSent = JSON.stringify(test);
localStorage.setItem('object',testSent);

function set(e){
    return document.querySelector(e);
}
var jsObject = JSON.parse(localStorage.getItem('object'));
console.log(jsObject.answer1);
var allInput = document.getElementsByTagName('input');
var count=0;
console.log(allInput);
set('.btnStyle').addEventListener('click',function(){
    for(var i = 0; i<allInput.length-1 ; i++){
        if(allInput[i].checked){
           if(allInput[i].value ==jsObject.answer1 || allInput[i].value  ==jsObject.answer2 || allInput[i].value == jsObject.answer3){
               count++;
           }
        }
    };
    if(count==0)alert('Ви набрали 0 балів');
    if(count==1)alert('Ви набрали 1 бал');
    if(count==2)alert('Ви набрали 2 бали');
    if(count==3)alert('Ви набрали 3 бали');
    for(var j =0; j<allInput.length-1;j++){
        if(allInput[j].checked){
            allInput[j].checked = false;
        }
    }
});

