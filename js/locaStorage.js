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
