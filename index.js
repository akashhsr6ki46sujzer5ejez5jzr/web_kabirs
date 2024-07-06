
const text = document.querySelector('.text')

document.addEventListener('DOMContentLoaded', function(){
    const typed = new Typed('.text', {
        strings: ['Web Developer', 'Bot Developer'],
        typeSpeed: 40,
        backSpeed: 40,
        delay: 1,
        loop: true,
        
    });
});


const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  alert('Your message has been sent!');

  // Add logic to reset the form or handle the message data here
});



// const songButton = document.querySelector('.song')
// const songElement = new Audio('./songs/sultan.mp3')


// songButton.addEventListener('click', function(){
//     if(songElement.paused){
//         songElement.play()
//         songButton.innerHTML = `<i class="ri-stop-circle-line"></i>`

//     }else{
//         songElement.pause()
//         songButton.innerHTML = `<i class="ri-play-circle-line"></i>`
//     }
// })