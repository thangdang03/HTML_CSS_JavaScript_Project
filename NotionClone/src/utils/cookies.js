const getCookie = (strCookie) =>{
    let cookies = document.cookie.split("; ")
    for (let item of cookies) {
        const [key,value] = item.split("=")
        if(key == strCookie) return value
      
    }
    return null
}

const setCookie = (keyCookie,valueCookie) =>{
    document.cookie = `${keyCookie}=${valueCookie}`
}

export {
    getCookie,
    setCookie
}