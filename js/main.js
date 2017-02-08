
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

