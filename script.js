function setupGrid (){

    let n = 0;
    let divs = "";
    if(screen.width > 768){
        n = 6;
    }
    else{
        n = 4;
    }
    let arr = [1,3,4,5,6,4,3,2,3,5,6,7,8,9,6,7,6,5,4,3,2,1,3,4,5,6,8] //test array in place of svg images
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            divs+="<div class='card'> <div class='item' ></div> <div class='cover' data-id = '"+arr[j]+"'></div> </div>"
        }
    }
    document.querySelector("#main").innerHTML = divs;
}

function setupCSS (){
    let item_covers = document.querySelectorAll('.cover');
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
                    console.log(item_cover.getAttribute("data-id"))
                    console.log(first_item.getAttribute("data-id"))

                    if(item_cover.getAttribute("data-id") == first_item.getAttribute("data-id")){       //check if the two items have the same id, then leave them uncovered or set time to cover both
                        first_item_checked = false;
                        first_item = null;
                        block = false;
                        console.log("same")
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

(function(){
    setupGrid();
    setupCSS();
})();

