// Changing theme
document.querySelector(".toggle-button").addEventListener("click", ()=>{
    document.querySelector('body').classList.toggle('dark')
})

//Fetching poem and changing on click
let data
fetch('./poem_content.json').then((Response)=>Response.json()).then((json)=>{
    Object.keys(json).forEach((e)=>{
        let poem_name = document.createElement('h4')
        poem_name.innerText = e
        document.querySelector(".list-div").appendChild(poem_name)
        document.querySelector(".poem_name").innerText = Object.keys(json)[0] 
        document.querySelector(".para").innerHTML = `<h4><pre>${json[Object.keys(json)[0]]}</pre></h4>` 
    })

    data = json
}).then(()=>{
    Array.from(document.querySelectorAll('.list-div')).forEach((e)=>{
        e.addEventListener("click", (cvent)=>{
            poem_name = event.target.innerText
            if (Object.keys(data).includes(poem_name)) {   
            document.querySelector('.content').style.opacity = "0"
            setTimeout(() => {
                    document.querySelector(".poem_name").innerText = poem_name 
                    document.querySelector(".para").innerHTML = `<h4><pre>${data[poem_name]}</pre></h4>` 
                    document.querySelector('.content').style.opacity = "1"
                    let PoemList = (document.querySelector(".cream-div"))
                    if (Array.from(PoemList.classList).includes("activated")) {
                        PoemList.classList.remove('activated')
                    }
                }, 300);
            }
        })
    })
})


document.querySelector('.menu').addEventListener('click', ()=>{
    document.querySelector('.cream-div').classList.toggle('activated')
    document.querySelector('.menu').classList.toggle('activated')
})

let aboutContainer = document.querySelector('.about-section-div')
document.querySelector('.about').addEventListener('click', ()=>{
    if(!(Array.from(aboutContainer.classList).includes('activated'))){
        aboutContainer.classList.add('activated')
    }
})

document.querySelector(".close").addEventListener('click', ()=>{
    aboutContainer.classList.remove('activated')
})

document.querySelector('.logo').addEventListener("click", ()=>{
    scrollBy(0, 100)
})

let mainContainer = document.querySelector(".main")
addEventListener("scroll", ()=>{
    if(mainContainer.getBoundingClientRect().top<200){
        document.querySelector(".feather").classList.add("feather-animation")
        document.querySelector(".feather").style.display = "block"
        if(window.innerWidth<950){
            document.querySelector(".menu").style.display = "block"
            document.querySelector(".menu").classList.add("menu-animation")
        }
    }
})

