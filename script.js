document.addEventListener("DOMContentLoaded", function() {
    var boxesContainer = document.getElementById("boxes-container");
    var boxes = [];

    // Create 10 boxes with ribbons
    for (var i = 1; i <= 10; i++) {
        var box = document.createElement("div");
        box.className = 'box box' + i;
        box.innerText = 'Box ' + i;

        var ribbon = document.createElement("div");
        ribbon.className = 'ribbon';
        box.appendChild(ribbon);

        boxesContainer.appendChild(box);
        boxes.push(box);

        // Click event to "open" box
        box.addEventListener('click', function() {
            this.style.animation = 'openBox 0.5s forwards';
            this.childNodes[1].style.display = 'none'; // Hide ribbon
        });
    }

    var lastBox = boxes[9];
    var gifContainer = document.getElementById('gif-container');

    // Open the next box after the previous one is clicked
    boxes.forEach(function(box, index) {
        box.addEventListener('click', function() {
            if (index < 9) {
                boxes[index + 1].style.display = 'block';
            } else {
                gifContainer.style.display = 'flex';
            }
        });
    });
});
