const openmodal = document.querySelector(".hero-cta")
const modal = document.querySelector(".modal")
const modaclose = document.querySelector(".modal-close")

openmodal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.add('modal--show')
})

modaclose.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show')
})