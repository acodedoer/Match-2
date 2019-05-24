(function (){
    let n = 0;
    let divs = "";
    if(screen.width > 768){
        n = 6;
    }
    else{
        n = 4;
    }

    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            divs+="<div>"+i+j+"</div>"
        }
    }
    console.log(divs);
    document.querySelector("#main").innerHTML = divs;
})();