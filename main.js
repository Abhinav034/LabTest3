
let img = document.getElementById('image')
let h1 = document.getElementById('h1Tag')

h1.addEventListener('click' , ()=>{
    h1.style.color = 'red'

})

function changeImage(){
    if (img.src.includes('img1.jpg')){
        alert('You choose light side')
        img.src = "src/img2.jpg"
       
    }else if (img.src.includes('img2.jpg')){
        alert('You choose dark side')
        img.src = "src/img1.jpg"
        
    }
   
}