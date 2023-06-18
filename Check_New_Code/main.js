const list = document.querySelectorAll(".list");
const itemBox = document.querySelectorAll(".itemBox");

// console.log(list)
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function(){
        // console.log("click here")
        for (let j = 0; j < list.length; j++) {
           list[j].classList.remove("active");            
        }
        this.classList.add("active")

        const dataFilter = this.getAttribute("data-filter");
        
        for (let l = 0; l < itemBox.length; l++) {
            itemBox[l].classList.remove("active1");
            itemBox[l].classList.add("hide");

            if(itemBox[l].getAttribute("data-ismail") == dataFilter || 
            dataFilter == "all" ){
                itemBox[l].classList.remove("hide")
                itemBox[l].classList.add("active1")
            }
            
        }
    })
    
}