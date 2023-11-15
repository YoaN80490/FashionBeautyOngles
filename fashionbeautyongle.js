const links = document.querySelectorAll("nav li");


icons.addEventListener("click", () => {
    nav.classList.toggle("active")
})

links.forEach((link) => {
    link.addEventListener("click", () => { 
    nav.classList.remove("active")
} )

});

cate1plus1.addEventListener("click", () => {
    cate1presta1.classList.toggle("switch")
})

cate1plus2.addEventListener("click", () => {
    cate1presta2.classList.toggle("switch")
})

cate1plus3.addEventListener("click", () => {
    cate1presta3.classList.toggle("switch")
})

cate1plus4.addEventListener("click", () => {
    cate1presta4.classList.toggle("switch")
})

plus2.addEventListener("click", () => {
    presta2.classList.toggle("switch")
})

plus2.addEventListener("click", () => {
    presta2.classList.toggle("switch")
})

plus2.addEventListener("click", () => {
    presta2.classList.toggle("switch")
})

