imageContainer = document.querySelector('.imageContainer')
const sliderView = document.querySelector(".sliderView")

const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");




leftBtn.addEventListener('click',function(){
    leftBtn.setAttribute('disabled',true)
    rightBtn.setAttribute('disabled',true)

    const img =   imageContainer.querySelector("img:last-child")
    imageContainer.prepend(img)
    imageContainer.style.left = parseInt (imageContainer.style.left) - 900 + "px"

    imageContainer.animate([
        {left:imageContainer.style.left},
        {left:parseInt (imageContainer.style.left) + 900 + "px"}
    ],
    {
        duration:500,
        fill:"forwards"
    }
    )

    setTimeout(function(){
        imageContainer.style.left = "-300px"
        leftBtn.removeAttribute("disabled")
        rightBtn.removeAttribute('disabled')

    },400)

     
})


rightBtn.addEventListener('click',function(){
    rightBtn.setAttribute('disabled',true)
    leftBtn.setAttribute("disabled",true)
    
    const img = imageContainer.querySelector("img:first-child")
    imageContainer.append(img)
    imageContainer.style.left 
    
    const initialLeft = parseInt(imageContainer.style.left)
    
    imageContainer.style.left=initialLeft + 900 + 'px'
    
    imageContainer.animate (
        [
            {left:imageContainer.style.left},
            {left: parseInt(imageContainer.style.left) - 900 + "px"}
        ],
        {
            duration:500,
            fill:"forwards"
        },
        setTimeout(function(){
            imageContainer.style.left = initialLeft + "px"
            rightBtn.removeAttribute('disabled')
            leftBtn.removeAttribute("disabled")
        },400)
        )
    })






   
   var closeBtn = document.querySelector(".close")

closeBtn.addEventListener("click",function(){
   var overlay = document.querySelector(".overlay").classList.add("hidden")
})