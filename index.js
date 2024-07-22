var input = document.getElementById('input');
var liscont  = document.getElementById('listcontainer');


function todo(){
    if(input.value === ''){
        alert("Enter Something")
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        liscont.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        savedata();

    }
    input.value =''
}
liscont.addEventListener('click' ,(e)=>{
        e.target.parentElement.remove();
    
})

function savedata(){
    localStorage.setItem('data',liscont.innerHTML);
}
function showtask(){
    liscont.innerHTML = localStorage.getItem('data');
}
showtask();