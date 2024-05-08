let toggles = document.getElementsByClassName('icon-2');
for (let i = 0; i < toggles.length; i++) {
    toggles[i].onclick = function() {
        this.classList.toggle('active');
        document.body.classList.toggle('active');
    }
}