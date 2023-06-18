const list = document.querySelectorAll(".list");
const filterDiv = document.querySelectorAll(".filterDiv");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function(){
    // console.log("click")
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active")

    const dataFilter = this.getAttribute("date-filter");
    console.log(dataFilter)
    
    for (let k = 0; k < filterDiv.length; k++) {
      filterDiv[k].classList.remove("active1")
      filterDiv[k].classList.add("hide")

      if(filterDiv[k].getAttribute("data-item") == dataFilter || dataFilter == "all"){
        filterDiv[i].classList.remove("hide");
        filterDiv[i].classList.add("active");
      }
    }
  })
  
  

}
