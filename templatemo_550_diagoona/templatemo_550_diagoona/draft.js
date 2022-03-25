const square = document.querySelector(".square")

square.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        square.style.left = timePassed / 5 + 'px';

        if (timePassed > 2000) clearInterval(timer);

    }, 20);
}
