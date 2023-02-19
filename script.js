function fullscreen_video() {
    let video = document.getElementById("full-video");

    if (video.style.display == 'none') {
        video.style.display = 'block';
        video.style.animation = 'openVideo .5s';
    }
}

function close_video() {
    let video = document.getElementById("full-video");

    if (video.style.display == 'block') {
        video.style.animation = 'closeVideo .5s ease-out';
        video.style.display = 'none';
    }
}

function count1() {
    let counter1 = document.getElementById("counter1");
    var innertext = counter1.innerText;
    const target = counter1.getAttribute("value");
    let add = 5;
    var innertext = parseInt(innertext);

    innertext += add;
    counter1.innerText = innertext;

    if (counter1.innerText != target) {
        setTimeout(count1, 4);
    } else {
        clearTimeout(count1);
    }
}

function count2() {
    let counter1 = document.getElementById("counter2");
    var innertext = counter1.innerText;
    const target = counter1.getAttribute("value");
    let add = 1;
    var innertext = parseInt(innertext);

    innertext += add;
    counter1.innerText = innertext;

    if (counter1.innerText != target) {
        setTimeout(count2, 10);
    } else {
        clearTimeout(count2);
    }
}

function count3() {
    let counter1 = document.getElementById("counter3");
    var innertext = counter1.innerText;
    const target = counter1.getAttribute("value");
    let add = 5;
    var innertext = parseInt(innertext);

    innertext += add;
    counter1.innerText = innertext;

    if (counter1.innerText != target) {
        setTimeout(count3, 20);
    } else {
        clearTimeout(count3);
    }
}

function count4() {
    let counter1 = document.getElementById("counter4");
    var innertext = counter1.innerText;
    const target = counter1.getAttribute("value");
    let add = 1;
    var innertext = parseInt(innertext);

    innertext += add;
    counter1.innerText = innertext;

    if (counter1.innerText != target) {
        setTimeout(count4, 5);
    } else if (counter1.innerText == target || counter1.innerText > target) {
        clearTimeout(count4);
    }
}

count1();
count2();
count3();
count4();

function testimonalAnimation() {
    let testimonal1 = document.getElementById("testimonal-grid1");
    let testimonal2 = document.getElementById("testimonal-grid2");
    let dot1 = document.getElementById("dot1");
    let dot2 = document.getElementById("dot2");

    if (testimonal1.style.display == 'grid') {
        testimonal1.style.display = 'none';
        dot1.style.backgroundColor = '#b1b1b1';
        dot2.style.backgroundColor = 'rgb(148, 148, 148)';
    } else {
        testimonal1.style.display = 'grid';
        testimonal1.classList.add("testimonal-anim-in");
        dot2.style.backgroundColor = '#b1b1b1';
        dot1.style.backgroundColor = 'rgb(148, 148, 148)';
    }

    if (testimonal2.style.display == 'none') {
        testimonal2.style.display = 'grid';
        testimonal2.classList.add("testimonal-anim-in");
        dot2.style.backgroundColor = 'rgb(148, 148, 148) !important';
    } else {
        testimonal2.style.display = 'none';
    }
}
setInterval(testimonalAnimation, 7000);

function hamburger_onclick() {
    let ham_div = document.getElementById("hamburgerMenu");
    let ham_list = document.getElementById("ham-list");

    if (ham_div.style.display == 'none') {
        ham_div.style.display = 'block';
        ham_list.classList.add("hamburger-menu-animation");
        ham_list.classList.remove("hamburger-menu-Closinganimation");
    } else {
        ham_list.classList.add("hamburger-menu-Closinganimation");
        setTimeout(() => {
            ham_div.style.display = 'none';
        }, 320);
    }
}

let dot1 = document.getElementById("dot1");
let dot2 = document.getElementById("dot2");

dot1.addEventListener('click', function () {
    let testimonal1 = document.getElementById("testimonal-grid1");
    let testimonal2 = document.getElementById("testimonal-grid2");
    let dot1 = document.getElementById("dot1");
    let dot2 = document.getElementById("dot2");

    if(testimonal1.style.display == 'none') {
        testimonal1.style.display = 'grid';
        testimonal1.classList.add("testimonal-anim-in");
        testimonal2.style.display = 'none';
        dot2.style.backgroundColor = '#b1b1b1';
        dot1.style.backgroundColor = 'rgb(148, 148, 148)';
    }
});

dot2.addEventListener('click', function() {
    let testimonal1 = document.getElementById("testimonal-grid1");
    let testimonal2 = document.getElementById("testimonal-grid2");
    let dot1 = document.getElementById("dot1");
    let dot2 = document.getElementById("dot2");

    if(testimonal2.style.display == 'none') {
        testimonal2.style.display = 'grid';
        testimonal2.classList.add("testimonal-anim-in");
        testimonal1.style.display = 'none';
        dot1.style.backgroundColor = '#b1b1b1';
        dot2.style.backgroundColor = 'rgb(148, 148, 148)';
    }
});
