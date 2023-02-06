const x=document.getElementsByClassName('button');
const inputbox= document.getElementById('inputbox');
const para=document.getElementById('para');

for(let i=0;i< x.length;i++){
    x[i].addEventListener('click',(event) =>{
        para.style.display = 'none';
        let inputText = '';
        switch(event.target.innerHTML){
            case 'c':
                break;
            case '=':
                try{
                    inputText = eval(inputbox.value);
                }
                catch(e){
                 inputText = '';
                 para.style.display = 'block';
                 para.innerHTML = 'invalid operation';
                }
                break;
            case '←':
                inputText = inputbox.value.slice(0,inputbox.value.length-1);
                break;
            default:
                inputText=`${inputbox.value}${event.target.innerHTML}`;
        }
    inputbox.value = inputText;
    });
}

