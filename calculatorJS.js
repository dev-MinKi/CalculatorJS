const result = document.querySelector('.js-result');
const reset = document.querySelector('.js-reset');
const number = Array.from(document.querySelectorAll('.number'));
const operation = Array.from(document.querySelectorAll('.operation'));
const equals = document.querySelector('.equals');

let firstNum ="",
secondNum ="",
firstCheck=false,
secondCheck=false,
nowOperation;

const numberClicked=(evnet)=>{
    const val = event.target.innerText;
    if(!firstCheck){
        firstNum = firstNum+val;
        result.innerHTML=firstNum;
    }else{
        secondNum = secondNum+val;
        result.innerHTML=secondNum;
        secondCheck=true;
    }
}
const operationClicked =(evnet) =>{
    const opClick = event.target.innerText;
    if(!firstCheck){
        firstCheck=true;
    }
    if(firstCheck&&secondCheck){
        cal();
    }
    nowOperation = opClick;
}
const cal =() =>{
    const resultVal = doingOperation();
    result.innerText = resultVal;
    firstNum = resultVal;
    secondNum="";
    secondCheck=false;
}
const doingOperation=() =>{
    let calValue=0;
    switch(nowOperation){
        case '+':
            calValue = parseInt(firstNum) + parseInt(secondNum);
            return calValue;
        case '-':
            calValue = parseInt(firstNum) - parseInt(secondNum);
            return calValue;
        case '*':
            calValue = parseInt(firstNum) * parseInt(secondNum);
            return calValue;
        case '/':
            calValue = parseInt(firstNum) / parseInt(secondNum);
            return calValue;
        default:
            return;
    }
}
const equalsClicked =() =>{
    if(firstCheck&&secondNum){
        cal();
    }
}
const resetClicked=()=>{
    firstCheck=false;
    secondCheck=false;
    firstNum="";
    secondNum="";
    nowOperation=null;
    result.innerText="0";
}
number.forEach(num =>{
    num.addEventListener('click',numberClicked);
});
operation.forEach(op=>{
    op.addEventListener('click',operationClicked);
});
equals.addEventListener('click', equalsClicked);
reset.addEventListener('click',resetClicked);
