// let playButton = document.querySelector("#play");
// let cancelButton = document.querySelector("#cancel");
// let audio;

// function play_audio() {
//     audio = new Audio("");
//     audio.play();
//     playButton.style.display = "none";
//     cancelButton.style.display = "inline-block";
// }

// function cancel_audio() {
//     audio.pause();
//     audio.currentTime = 0;
//     playButton.style.display = "inline-block";
//     cancelButton.style.display = "none";
// }

// playButton.addEventListener("click", play_audio);
// cancelButton.addEventListener("click", cancel_audio);

let toggles = document.getElementsByClassName('icon-2');
for (let i = 0; i < toggles.length; i++) {
    toggles[i].onclick = function() {
        this.classList.toggle('active');
        document.body.classList.toggle('active');
    }
}