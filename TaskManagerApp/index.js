window.onload  = () =>{
    // get value 
    const todoInput = document.querySelector(".todoInput")
    const btn = document.querySelector(".btn")
    const listItem = document.querySelector(".listItem")

    btn.addEventListener("click",(event)=>{
        event.preventDefault();
        let value = todoInput.value;
        if(!value){
            return
        }
        todoInput.value = ""
        let item = JSON.parse(localStorage.getItem("todo"))
        if(!item){
            localStorage.setItem("todo",JSON.stringify([value]))
        }else{
            item.push(value)
            localStorage.setItem("todo",JSON.stringify(item))
        }
        display()
    })
    
    const display = () =>{
        // get item from localstorage
        let item = JSON.parse(localStorage.getItem("todo"))
        console.log(typeof(item))
        // check item have null
        if(!item ){
            listItem.innerHTML = '<h3>empty to do list </h3>'
            return;
        }

        // display item screen
       
        let temp = item?.map((element,index) =>{
            return `
                <div class="item ${index == item.length - 1 ? "in":"" }"    >
                    <div class="box" onclick="Out(${index})"></div>
                    <h4 >${element}</h4>
                </div>`
        }).join("")
        listItem.innerHTML = temp
    }
    // get item do do list
    display()
    
}

const Out = (index) =>{
    let listItem = document.querySelectorAll(".item")
    listItem[index].classList.remove("in")
    listItem[index].classList.add("out")

    let item = JSON.parse(localStorage.getItem("todo"))
    let temp = item.filter((item,i)=>{
        return i != index
    })
    localStorage.setItem("todo",JSON.stringify(temp))
    setTimeout(() => {
        listItem[index].style.display = "none"
    }, 1500);

}

