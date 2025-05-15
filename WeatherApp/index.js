// api key d2f156a660eedc310ef3945c8332ee1c
// url https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=d2f156a660eedc310ef3945c8332ee1c&units=metric
// url https://api.openweathermap.org/data/2.5/forecast?q=tokyo&appid=d2f156a660eedc310ef3945c8332ee1c&units=metric

// get value

// check 
// printf screen tương ứng
// hiển thị dữ liệu
let searchBanner = document.querySelector("#searchBanner")
let info = document.querySelector("#info")
let notFond = document.querySelector("#notFond")


let searIcon = document.querySelector("#icon")
let inputSearch = document.querySelector("#inputSearch")
searIcon.addEventListener("click",()=>{
    let keySearch = inputSearch.value;
    keySearch = keySearch.trim()
    addData(keySearch)
    inputSearch.value = ""
})



inputSearch.addEventListener("keydown",(event)=>{
    if(event.key == 'Enter'){
        let keySearch = inputSearch.value;
        keySearch = keySearch.trim()
        addData(keySearch)
        inputSearch.value = ""
    }
    
})

inputSearch.addEventListener("click",(event)=>{
    displayBlock(searchBanner)
})


const FetchData = async (source,city)=>{
    let result = await fetch(`https://api.openweathermap.org/data/2.5/${source}?q=${city}&appid=d2f156a660eedc310ef3945c8332ee1c&units=metric`)
    return result.json()
}


const getImage = (deg) =>{
    
    if(deg <= 232) return "thunderstorm.svg"
    if(deg <= 321) return "drizzle.svg"
    if(deg <= 531) return  "snow.svg"
    if(deg <= 622) return  "atmosphere.svg"
    if(deg <= 781) return "clear.svg"
    if(deg <= 800) return "rain.svg"
    return "clouds.svg"
}

const formatDate = (input)=>{
    const date = new Date(input);
    const options = { month: 'short', day: '2-digit' };
    const output = date.toLocaleDateString('en-US', options);
    return output
}


const addListWeather = (arr) =>{
    const strList = arr.map((item)=>{
        let { main:{temp} ,dt_txt,weather:[{id,main}]} = item
        return  `<div class="item-list">
                    <p class="">${formatDate(dt_txt)}</p>
                    <img src="./assets/weather/${getImage(id)}" alt="">
                    <p class="">${temp} °C</p>
                </div>`

    })
    let newStr = strList.join("")
    return newStr;
}

const innerData = (name,deg,Humidity,WindSpeed,id,dataList) =>{
    let h3Element = document.querySelector(".text-location")
    let degElement = document.querySelector("#deg")
    let HumidityElement = document.querySelector("#Speed")
    let WindSpeedElement = document.querySelector("#Humidity")
    let imageInfo = document.querySelector("#infor-banner")
    let weatherListElement = document.querySelector("#weatherList")

    h3Element.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${name} </h3>`
    degElement.textContent = deg + " °C"
    HumidityElement.textContent = WindSpeed + " M/s"
    WindSpeedElement.textContent =  Humidity + "%"
    console.log(getImage(id))
    imageInfo.src = `./assets/weather/${getImage(id)}`
    weatherListElement.innerHTML = addListWeather(dataList)
 }

const addData = async(key) =>{
    
    let data = await FetchData("weather",key)
    let dataList = await FetchData("forecast",key)

    if(data.cod >= 400){
        displayBlock(notFond);
        return;
    }
    displayBlock(info)
    
    // await innerData(data.name)
    const {name,main:{temp,humidity} ,wind:{speed},weather:[{id,main}]} = data
    innerData(name,temp,humidity,speed,id,dataList.list)
    console.log(data)
}


const displayBlock = (elementDisplay) =>{
    // console.log(elementDisplay)
    searchBanner.style.display = "none"
    info.style.display = "none"
    notFond.style.display = "none"
    // if(elementDisplay.className == info.className){
    //     elementDisplay.style.display = "block"
    //     return
    // }
    elementDisplay.style.display = "flex"
}

