// SETUP

var win = window,
    doc = document,
    body = doc.body;

var ww = win.innerWidth,
    wh = win.innerHeight;

var c = doc.createElement('canvas'),
    ctx = c.getContext("2d");

var cx = ww/2,
    cy = wh/2;

var mouseX = 0,
    mouseY = 0;

var gco = [ 'source-over','source-in','source-out','source-atop',
    'destination-over','destination-in','destination-out','destination-atop',
    'lighter', 'copy','xor', 'multiply', 'screen', 'overlay', 'darken',
    'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light',
    'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];

c.width = ww;
c.height = wh;

//body.appendChild(c);
//$(".pili-bg-animate").appendChild(c);
document.getElementById("pili-bg-animate").appendChild(c);
//body.style.overflow = 'hidden';

//(function(){
//    var btn_style = 'color: white; display: block; cursor: pointer; padding: 5px; font-size: 10px; font-family: sans-serif; text-transform: uppercase;',
//        active_style = btn_style + ' color: #bada55;';
//
//    var els = [];
//    var btns = doc.createElement('div');
//    btns.setAttribute('style', 'position: fixed; top: 10px; left: 10px; padding: 10px; z-index: 2; max-height: calc(100vh - 40px); overflow-y: scroll;');
//    body.appendChild(btns);
//
//    btns.addEventListener('click', function(e){
//        if (e.target.nodeName == 'I') {
//            cfg.gco = e.target.getAttribute('data-mode');
//
//            for (var i = 0; i < els.length; i++) {
//                els[i].setAttribute('style', btn_style);
//            }
//
//            e.target.setAttribute('style', active_style);
//        }
//    });
//
//    for (var i = 0; i < gco.length; i++) {
//        var el = doc.createElement('i');
//        el.setAttribute('data-mode', gco[i]);
//        el.setAttribute('style', btn_style)
//        el.textContent = gco[i];
//        els.push(el);
//        btns.appendChild(el);
//    }
//})();



win.addEventListener('resize', function(){
    ww = win.innerWidth;
    wh = win.innerHeight;
    c.width = ww;
    c.height = wh;
    cx = ww/2;
    cy = wh/2;
});
// =======================================


// SETTINGS

var cfg = {
    count: 60,
    size: 2,
    gco: 'none',
    bg: 'rgba(0,0,0, 0.1)',
    colors: ['rgba(250,250,250, 0.1)', 'rgba(250,250,250, 0.1)', 'rgba(250,250,250, 0.1)', 'rgba(250,250,250, 0.1)', 'rgba(250,250,250, 0.1)', 'rgba(250,250,250, 0.1)', 'rgba(250,250,250, 0.1)', 'rgba(250,250,250, 0.1)']
};

var particles = [];

function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function isOOB(p) {
    if (p.x+p.size < 0 || p.x-p.size > ww || p.y+p.size < 0 || p.y-p.size > wh) {
        return true;
    }
}

function getMouse(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
}

win.addEventListener('mousemove', getMouse);

function Particle(i){
    this.x = rand(0, ww);
    this.y = rand(0, wh);
    this.size = cfg.size;
    this.id = i;
    this.color = cfg.colors[rand(0, cfg.colors.length)];

    this.vx = Math.random() * 5;
    this.vy = Math.random() * 5;

    this.angle = rand(3, 10);
    this.speed = ww / 500;

    particles.push(this);

    this.update = function(){

        this.x += Math.sin((Math.PI * 1) + (this.angle) ) * this.vx;
        this.y += Math.cos((Math.PI * 1) + (this.angle) ) * this.vy;

        this.angle += 0.02;


        if (isOOB(this)) {
            this.x = rand(0, ww);
            this.y = rand(0, wh);
        }

    };

    this.draw = function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;

        // arc(x, y, radius, startAngle, endAngle, anticlockwise)
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();


// 		ctx.beginPath();
// 		ctx.strokeStyle = "white";

// 		var ti;
// 		if (this.id == particles.length - 1) {
// 			ti = 0;
// 		} else {
// 			ti = this.id+1;
// 		}

// 		ctx.moveTo(this.x, this.y);
// 		ctx.lineTo(particles[ti].x, particles[ti].y);
// 		ctx.closePath();
// 		ctx.stroke();
    }
}




for (var i = 0; i <= cfg.count; i++) {
    new Particle(i);
}

function animate(){
    ctx.globalCompositeOperation = cfg.gco;
    ctx.fillStyle = cfg.bg;
    ctx.fillRect(0, 0, ww, wh);

    for (var i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }

    requestAnimationFrame(animate);
}
animate();