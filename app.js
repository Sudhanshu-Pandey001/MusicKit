window.addEventListener("keydown", function(e) {
    // console.log(e)
    // console.log(e.keyCode); 

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) 
    // console.log(audio);

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`) //playing color lagane ke liye...
       console.log(key);
       key.classList.add("playing")

    if(!audio){
        return;
    }
    audio.currentTime = 0 // suru se chalega bina end huew
    audio.play();

})

//for color remove

const keys = document.querySelectorAll(".key")
// console.log(keys)

keys.forEach(function(key){
    key.addEventListener("transitionend", function(e) {
    //    console.log(e)
       if(e.propertyName !== "transform"){  //yhi mere propertyName na ho to return ho jaye (phir na chle)
            return;
       }
     //   console.log(this) //data-key calss="key" playing select ho jayega
    this.classList.remove("playing")
    })
})