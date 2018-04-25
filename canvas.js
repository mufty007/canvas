
var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');

//c.fillStyle = "rgba(255, 0, 0 , 0.8)";
//c.fillRect(200 , 200, 100, 100);
//c.fillStyle = "rgba(200, 34, 0, 0.5)";
//c.fillRect(300 , 300, 100, 100);
//c.fillStyle = 'rgba(0, 255, 124, 0.5)';
//c.fillRect(400 , 200, 100, 100);

// LINE

//c.moveTo(50, 300);
//c.lineTo(300, 100);
//c.lineTo(400, 300);
//c,strokeStyle = "#scdfef";
//c.stroke();

// Circle
// c.beginPath();
// c.arc(400, 400, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "#333";
// c.stroke();


// for (var i = 0; i < 50; i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;

//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = "#333";
//     c.stroke();
// }

// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dx = (Math.random() - 0.5) * 8;
// var dy = (Math.random() - 0.5 ) * 8;
// var radius = 30;

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 70;
//var minRadius = 3;

var colorArrey = [
    '#0068E3',
    '#597EA8',
    '#004596',
    '#5291D9',
    '#002E63',
];



window.addEventListener("mousemove", 
    function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    
})

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();

});

function Circle(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArrey[Math.floor(Math.random() * colorArrey.length)];


    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    this.update = function(){
        
        if (this.x + this.radius > innerWidth || this.x - radius < 0){
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - radius < 0) {
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;

        // Inner Activity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y < 50 && mouse.y - this.y > -50
            ) {
                if (this.radius < maxRadius) {
                    this.radius += 1; 
                }
               

            } else if (this.radius > this.minRadius){
                this.radius -= 1;
            }
    
        this.draw();

        }

        
}


var circleArrey = [];

function init() {

    circleArrey = [];

    for (var i = 0; i < 1000; i++) {
        var radius = Math.random() * 3 + 1;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 10;
        var dy = (Math.random() - 0.5) * 10;
        
        
        circleArrey.push(new Circle(x, y, dx, dy, radius))
        
}
}


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArrey.length; i++){
        circleArrey[i].update();
    }
}

init();
animate();





