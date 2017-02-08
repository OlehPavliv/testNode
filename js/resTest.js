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

