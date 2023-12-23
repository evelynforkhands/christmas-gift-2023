document.addEventListener("DOMContentLoaded", function() {
    var boxesContainer = document.getElementById("boxes-container");
    var boxes = [];

    for (var i = 1; i <= 10; i++) {
        var box = document.createElement("div");
        box.className = 'box box' + i;
        var ribbonHorizontal = document.createElement("div");
        ribbonHorizontal.className = 'ribbon horizontal';
        box.appendChild(ribbonHorizontal);
    
        // Create vertical ribbon
        var ribbonVertical = document.createElement("div");
        ribbonVertical.className = 'ribbon vertical';
        box.appendChild(ribbonVertical);

        var bow = document.createElement("div");
        bow.className = 'bow';
        box.appendChild(bow);

        boxesContainer.appendChild(box);
        boxes.push(box);

        // Click event to "open" box
        box.addEventListener('click', function() {
            this.style.animation = 'openBox 10s forwards';
        });
    }

    var gifContainer = document.getElementById('gif-container');
    var initialScale = 3;
    var incrementStep = 0.1;

    boxes.forEach(function(box, index) {
        box.addEventListener('click', function() {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
              });
            var scale = initialScale + index * incrementStep;


            var cssAnimation = document.createElement('style');
            cssAnimation.type = 'text/css';
            console.log(scale);
            var rules = document.createTextNode(`
                @keyframes openBox${index} {
                    from {
                        transform: scale(${scale});
                        opacity: 1;
                    }
                    to {
                        transform: scale(0);
                        opacity: 0;
                    }
                }
            `);
            cssAnimation.appendChild(rules);
            document.getElementsByTagName("head")[0].appendChild(cssAnimation);

            this.style.animation = `openBox${index} 0.5s forwards`;
            console.log(index);
            if (index >= 1) {
                
            } else {

                gifContainer.style.display = 'flex';
                var confettiImage = document.createElement("img");
                confettiImage.style.width = '100%';
                confettiImage.src = "src/1.jpg";
                confettiImage.style.position = 'absolute'; // Add this line
                confettiImage.style.top = '50%'; // Add this line
                confettiImage.style.left = '50%'; // Add this line
                confettiImage.style.transform = 'translate(-50%, -50%)'; // Add this line
                gifContainer.appendChild(confettiImage);

                var heading = document.createElement("h1");
                heading.textContent = "Frohe Weinachten! Das kleine Geschenk wartet auf dich in Wien :)";
                heading.style.color = 'red';
                heading.style.left = 0.5 * window.innerWidth + 'px';
                heading.style.left = '50%';
                heading.style.transform = 'translateX(-50%)';
                heading.style.position = 'absolute';
                heading.style.textAlign = 'center';
                heading.style.fontSize = '40px';
                heading.style.marginTop = '20px';
                gifContainer.appendChild(heading);
            }
        });
    });
});