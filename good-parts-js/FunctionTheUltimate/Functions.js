// Don't create functions in a loop

// WRONG
for (let i = 0; i < divs.length; i++) {
    let div_id = divs[i].id;
    divs[i].onclick() = function(){
        alert(div_id);
    }   
}

// RIGHT
divs.forEach(function (div){
    div.onclick = function(){
        alert(div.id);
    }
});