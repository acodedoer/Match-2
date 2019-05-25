function setupGrid (){
    let n = 0;
    let divs = "";
    if(screen.width > 768){
        n = 6;
    }
    else{
        n = 4;
    }


    let colors = ["#3772FF", "#DF2935", "#FDCA40","#5B507A", "#EB4511", "#3D0C11", "#533E2D", "#242331"]
    let arr = [{"key":"1","item":"<i class='fas  fa-dice-five' style='color:"+colors[random(0,7)] +"'></i>"},{"key":"2","item":"<i class='fas fa-square' style='color:"+colors[random(0,7)] +"'></i>"},{"key":"3","item":"<i class='fas fa-star' style='color:"+colors[random(0,7)] +"'></i>"},{"key":"4","item":"<i class='fas fa-square-full' style='color:"+colors[random(0,7)] +"'></i>"},{"key":"5","item":"<i class='fas fa-bullseye' style='color:"+colors[random(0,7)] +"'></i>"},{"key":"6","item":"<i class='fas fa-moon' style='color:"+colors[random(0,7)] +"'></i>"},{"key":"7","item":"<i class='fas fa-fire-alt' style='color:"+colors[random(0,7)] +"'></i>"},{"key":"8","item":"<i class='fas fa-circle' style='color:"+colors[random(0,7)] +"'></i>"},{"key":"9","item":"<i class='fas fa-dot-circle' style='color:"+colors[random(0,7)] +"'></i>"},{"key":"10","item":"<i class='far fa-dot-circle' style='color:"+colors[random(0,7)] +"'></i>"},{"key":"11","item":"<i class='fas fa-egg' style='color:"+colors[random(0,7)] +"'></i>"},{"key":"12","item":"<i class='fas fa-fire' style='color:"+colors[random(0,7)] +"'></i>"},{"key":"13","item":"<i class='fas fa-icicles' style='color:"+colors[random(0,7)] +"'></i>"},{"key":"14","item":"<i class='fab fa-jira' style='color:"+colors[random(0,7)] +"'></i>"},{"key":"15","item":"<i class='fas fa-play' style='color:"+colors[random(0,7)] +"'></i>"},{"key":"16","item":"<i class='fas fa-burn' style='color:"+colors[random(0,7)] +"'></i>"},{"key":"17","item":"<i class='fas fa-circle-notch' style='color:"+colors[random(0,7)] +"'></i>"},{"key":"18","item":"<i class='fas fa-grip-lines' style='color:"+colors[random(0,7)] +"'></i>"},{"key":"19","item":"<i class='fas fa-grip-lines-vertical' style='color:"+colors[random(0,7)] +"'></i>"},{"key":"20","item":"<i class='fas fa-bars' style='color:"+colors[random(0,7)] +"'></i>"}] //test array in place of svg images
    shuffle(arr);
    let items_array = arr.slice(0,(n*n)/2);
    items_array.push(...items_array);
    shuffle(items_array);

    let items_counter = 0;
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            divs+="<div class='card'> <div class='item' >"+items_array[items_counter].item+"</div> <div class='cover' data-id = '"+items_array[items_counter].key+"'></div> </div>"
            items_counter+=1;
        }
    }
    document.querySelector("#main").innerHTML = divs;
}

function setupCSS (){
    let item_covers = document.querySelectorAll('.cover');
    let count = item_covers.length/2;
    let first_item_checked = false;
    let first_item;
    let block = false;
    item_covers.forEach(function(item_cover){
        item_cover.addEventListener('click', 
            function(){
            if (block ==false){                                                             //if only one or no item has been selected
                item_cover.style.height = '0px';
                if (first_item_checked == false){                                           //if no item is selected
                    first_item_checked = true;
                    first_item = item_cover;
                }
                else{                                                                        //if one item is selected, slect this and block
                    block = true;
                    if(item_cover.getAttribute("data-id") == first_item.getAttribute("data-id")){       //check if the two items have the same id, then leave them uncovered or set time to cover both
                        count-=1;
                        first_item_checked = false;
                        first_item = null;
                        block = false;
                        item_cover.addEventListener('transitionend', function(){
                            checkIfDone(count);
                        });                      
                    }
                    else{
                        setTimeout(
                            function(){   
                                item_cover.style.height = '100%';
                                first_item.style.height = '100%';
                                first_item_checked = false; 
                                block = false;
                                console.log("not")},
                        500)      
                    }
                }
            } 
        })
    })
}

function checkIfDone(count){
    if(count<=0){
        alert("You did it!");
    }
}

function random(a, b){
    let min=a; 
    let max=b;  
    return Math.floor(Math.random() * (+max - +min)) + +min;   
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

(function(){
    setupGrid();
    setupCSS();
})();

