score = 0;
cross = true;
document.onkeydown = function (e) {
    if (e.keyCode == 38) {
        dino = document.querySelector(".dino");
        dino.classList.add("animatedino");
        setTimeout(() => {
            dino.classList.remove("animatedino")
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector(".dino");
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinox + 112 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector(".dino");
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinox - 112) + "px";
    }
}
setInterval(() => {
    dino = document.querySelector(".dino");
    gameOver = document.querySelector(".gameOver");
    obstacle = document.querySelector(".obstacle");

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetx = Math.abs(dx - ox);
    offsety = Math.abs(dy - oy);
    if (offsetx < 73 && offsety < 52) {
        gameOver.style.visibility = "visible";
        obstacle.classList.remove('obstacleani')
    }
    else if (offsetx < 123 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.2;
            obstacle.style.animationDuration = newDur + 's';
        }, 50 );
    }
}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your score: " + score;
}