window.addEventListener("load",()=>{
    const item = document.querySelectorAll(".item")
    const header = document.querySelector(".screen")
    const keyBroad = document.querySelector(".keyBroad")
    let listHistory = document.querySelector(".listHistory")
    let history = document.querySelector(".history")

    let followHistory = "";
    let open = true;
    let str = ""
    let math = ["+","-","*","/"]

    const getStr = (number) =>{
        // Checking the last number and the number of passes in whether it is a math
        if(checkingMath(number) && checkingMath(str[str.length-1])){
            return
        }

        // Checking the first character test is a math or not by the sign "." 
        if(str === "" && checkingMath(number)){
            return;
        }

        // set str and display data , set history follow
        str += number;
        followHistory += number;
        display(str)
    }

    const checkingMath = (letter) =>{
        for (let i = 0; i < math.length; i++) {
            if(math[i] == letter){
                return true
            }
        }
        return false
    }
   
    item.forEach((element,index) => {
        element.addEventListener('click',()=>{
            if(element.classList[1] === "clear" || element.classList[1] === "clearLetter"  ||  element.classList[1] === "eqal"){
                switch (element.classList[1]) {
                    case "clear":
                        clearFunction()
                        return;
                    case "clearLetter":
                        clearLetterFn()
                        return;
                    case "eqal":
                        calculator()
                        return;
                    
                };
            }
            getStr(element.dataset.number)
        })
    })

    const clearFunction = () =>{
        console.log(str)
        if(str[0] == ""){
            return;
        }
        str = ""
        followHistory = ""
        display(str)
    }

    const clearLetterFn =()=>{
        if(str.length  == "0"){
            return;
        }
        str = str.slice(0,str.length - 1 )
        display(str)

    }

    const calculator = () =>{
        if(str[0] == ""){
            return
        }
         
        followHistory = `${str} = ${eval(str)}`
        str = eval(str)
        display(str)
        let listItem = JSON.parse(localStorage.getItem("history"))
        if(!listItem){
            localStorage.setItem("history",JSON.stringify([followHistory]))
        }else{
            console.log({listItem})
            listItem.push(followHistory)
            localStorage.setItem("history",JSON.stringify(listItem))
        }
    }
    const display = (number) => {
        let element = `
                <h3 class="history">History</h3>
                ${number}
                <div class="listHistory">
                </div>`
        header.innerHTML = element;
        history = document.querySelector(".history")
        listHistory = document.querySelector(".listHistory")

        history.addEventListener("click",()=>{
             displayHistory();
        })
    }
    history.addEventListener("click",()=>{
         displayHistory();
    })
    // add 
    const displayHistory = () =>{
        if(!open){
            listHistory.style.display = "none"
            header.classList.remove('active')
            setTimeout(() => {
                keyBroad.style.display = "grid"
            }, 800);
            open = true;
            return;
        }

        keyBroad.style.display = "none"
        header.classList.add('active')
        setTimeout(() => {
            listHistory.style.display = "block"
        }, 800);
        const itemHistory = JSON.parse(localStorage.getItem("history"))
        console.log(itemHistory)
        if(!itemHistory){
            listHistory.innerHTML = `<h4>empty history</h4>`
        }else{
            let htmlHistory = itemHistory?.map(item=>{
                return `<h4>${item}</h4>`
            }).join("")
            listHistory.innerHTML = htmlHistory
        }
        open = false;
    }
})




