document.addEventListener("DOMContentLoaded", function() {
    var boxesContainer = document.getElementById("boxes-container");
    
    // Create 10 boxes
    for (var i = 1; i <= 10; i++) {
        var box = document.createElement("div");
        box.className = 'box box' + i;
        box.innerText = 'Box ' + i;
        boxesContainer.appendChild(box);
    }

    var lastBox = document.querySelector('.box10');
    var gifContainer = document.getElementById('gif-container');

    // Listen for scroll event to check if last box is visible
    window.addEventListener('scroll', function() {
        var rect = lastBox.getBoundingClientRect();

        if (rect.bottom <= window.innerHeight) {
            gifContainer.style.display = 'flex';
        }
    });
});
