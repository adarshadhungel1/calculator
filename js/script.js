function operate(sign = ''){
    let disp = document.querySelector(".bottom");
    if (operation == '+'){
        let temp = a+b;
        a = temp;
        let topdisp = document.querySelector(".top");
        topdisp.innerHTML = temp.toString() + sign;
        disp.innerHTML = '';
    }
    if (operation == '-'){
        let temp = a-b;
        a = temp;
        let topdisp = document.querySelector(".top");
        topdisp.innerHTML = temp.toString() + sign;
        disp.innerHTML = '';
    }
    if (operation == 'x'){
        let temp = a*b;
        a = temp;
        let topdisp = document.querySelector(".top");
        topdisp.innerHTML = temp.toString() + sign;
        disp.innerHTML = '';
    }
    if (operation == '/'){
        let temp = a/b;
        a = temp;
        let topdisp = document.querySelector(".top");
        topdisp.innerHTML = temp.toString() + sign;
        disp.innerHTML = '';
    }

    if (sign != ''){
        operation = sign;
    }
    else{
        operation = '';
        isA = true;
        isB = false;
    }
}

function getInnerValue(e){
    let disp = document.querySelector(".bottom");
    let keyValue = e.target.innerHTML;
    
    if (keyValue != '=' && keyValue !='+' && keyValue !='-' && keyValue !='x' && keyValue !='/' ){
        disp.innerHTML += keyValue;

        if (isA && !isB){
            tempa += keyValue;
        }
        else if (isB && !isA){
            tempb += keyValue;
        }
    }

    if(keyValue =='+' ||keyValue =='-' ||keyValue =='x' ||keyValue =='/' ||keyValue =='='){
        if(isA && !isB){
            a = parseFloat(tempa);
            tempa = '';
            console.log(a);
            let topdisp = document.querySelector(".top");
            topdisp.innerHTML = a.toString() + keyValue;
            disp.innerHTML = '';
            isA = false;
            isB = true;
        }
        else if(isB && !isA){
            b = parseFloat(tempb);
            tempb = '';
            console.log(b);
            if (keyValue != '='){
                operate(keyValue);
            }
        }
        if (keyValue != '='){
            operation = keyValue;
        }
        if(keyValue == '='){
            operate();
        }
    }
}

function remove(){
    if(isA){
        tempa = tempa.substring(0, tempa.length - 1);
        let disp = document.querySelector(".bottom");
        disp.innerHTML = tempa;
    }
    else{
        tempb = tempb.substring(0, tempb.length - 1);
        let disp = document.querySelector(".bottom");
        disp.innerHTML = tempb;
    }
}

function clear(){
    let tempa = ''
    let a = 0;
    let tempb = ''
    let b = 0;
    let isA = true;
    let isB = false;
    let operation = '';
    let disp = document.querySelector(".bottom");
    disp.innerHTML = '';
    let topdisp = document.querySelector(".top");
    topdisp.innerHTML = '';
    console.log('Calcularoe Reseted!!');
}

let tempa = ''
let a = 0;
let tempb = ''
let b = 0;
let isA = true;
let isB = false;
let operation = '';

let btnzero = document.querySelector("#zero");
let btnone = document.querySelector("#one");
let btntwo = document.querySelector("#two");
let btnthree = document.querySelector("#three");
let btnfour = document.querySelector("#four");
let btnfive = document.querySelector("#five");
let btnsix = document.querySelector("#six");
let btnseven = document.querySelector("#seven");
let btneight = document.querySelector("#eight");
let btnnine = document.querySelector("#nine");
let btndecimal = document.querySelector("#decimal");
let btnadd = document.querySelector("#plus");
let btnsub = document.querySelector("#minus");
let btnmult = document.querySelector("#multiply");
let btndiv = document.querySelector("#divide");
let btnequal = document.querySelector("#equals");
let btnclear = document.querySelector("#Clear");
let btndel = document.querySelector("#Delete");

btnzero.addEventListener('click',getInnerValue);
btnone.addEventListener('click',getInnerValue);
btntwo.addEventListener('click',getInnerValue);
btnthree.addEventListener('click',getInnerValue);
btnfour.addEventListener('click',getInnerValue);
btnfive.addEventListener('click',getInnerValue);
btnsix.addEventListener('click',getInnerValue);
btnseven.addEventListener('click',getInnerValue);
btneight.addEventListener('click',getInnerValue);
btnnine.addEventListener('click',getInnerValue);
btndecimal.addEventListener('click',getInnerValue);
btnadd.addEventListener('click',getInnerValue);
btnsub.addEventListener('click',getInnerValue);
btnmult.addEventListener('click',getInnerValue);
btndiv.addEventListener('click',getInnerValue);
btnequal.addEventListener('click',getInnerValue);
btnclear.addEventListener('click',clear);
btndel.addEventListener('click',remove);