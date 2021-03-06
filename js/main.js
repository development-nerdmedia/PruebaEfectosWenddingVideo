/************************************************************************************************** */
window.addEventListener("load", () => {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home").classList.add("active");
    /*  */
    document.querySelector(".load").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".load").style.display = "none";
    }, 600);
});


if (navigator.userAgent.indexOf('Mac OS X') != -1) {
    $("body").addClass("mac");
}

var reproductor = document.getElementById("musica");

var vol = new Boolean(false);

var header = document.getElementById('header');
var titlenav = document.getElementById('title');
var titlenavback = document.getElementById('title2');
var nav = document.getElementById('navigation');
var lista = document.getElementsByClassName('nav-item');
var line = document.getElementsByClassName('colorchange');
var btnmusicblanco = document.getElementById('white');
var btnmusicnegro = document.getElementById('black');
var menumovilblanco = document.getElementById('white1');
var menumoviloscuro = document.getElementById('black1');
var inputname = document.getElementById('full-name');
var muteaudio = document.getElementById('mute')
var interruptorid = document.getElementById('interruptor');

jQuery(document).ready(function (argument) {
    MyApp.audio.init();
})

var valorposition = -60;

MyApp = {
    audio: {
        init: function () {
            var audioElement = document.createElement('audio');
            var src = $('#audio_src').val();
            audioElement.setAttribute('src', src);

            audioElement.addEventListener('ended', function () {
                this.play();
            }, false);

            $('#mute').click(function () {
                if (vol == false) {
                    document.getElementById("interruptor").innerHTML = "off";
                    vol = true;
                    audioElement.play();
                    audioElement.volume = 0.05;
                } else {
                    document.getElementById("interruptor").innerHTML = "on";
                    vol = false;
                    audioElement.pause();
                }
            });
        }
    }
}


window.addEventListener('scroll', () => {
    var scroll = window.scrollY
    if (scroll > 10) {
        header.style.backgroundColor = "#fff";
        header.classList.add('headerScrol');
        titlenav.style.color = "#000";
        titlenav.style.display = "none";
        titlenavback.style.color = "#000";
        titlenavback.style.display = "block";
        nav.style.padding = "25px 0";
        nav.style.alignItems = "center";
        btnmusicblanco.style.display = "none";
        menumovilblanco.style.display = "none"
        menumoviloscuro.style.display = "block"
        btnmusicnegro.style.display = "block";
        interruptorid.style.color = "#000";
        jQuery('li.itemNavigation').removeClass('hvr-underline-from-left');
        jQuery('li.itemNavigation').addClass('hvr-underline-from-left-black');
        valorposition = -60;
        animation(valorposition);

        for (var i = 0, len = lista.length; i < len; i++) {
            lista[i].style.color = "#000";

        }
        for (var ii = 0, lenn = line.length; ii < lenn; ii++) {
            line[ii].style.color = "#000";
        }

    } else {
        header.style.backgroundColor = "transparent";
        header.classList.remove('headerScrol')
        titlenav.style.color = "#fff";
        titlenavback.style.color = "#fff";
        titlenav.style.display = "block";
        titlenavback.style.display = "none";
        nav.style.padding = "70px 0";
        nav.style.alignItems = "start";
        btnmusicblanco.style.display = "block";
        btnmusicnegro.style.display = "none";
        menumoviloscuro.style.display = "none";
        menumovilblanco.style.display = "block";
        interruptorid.style.color = "#fff";
        jQuery('li.itemNavigation').addClass('hvr-underline-from-left');
        jQuery('li.itemNavigation').removeClass('hvr-underline-from-left-black');
        for (var i = 0, len = lista.length; i < len; i++) {
            lista[i].style.color = "#fff";
        }
        for (var ii = 0, lenn = line.length; ii < lenn; ii++) {
            line[ii].style.color = "#fff";
        }
        valorposition = 52;
        animation(valorposition);
    }
})

document.addEventListener("click", function (e) {
    // if (e.target.closest(".muted")) {
    //     if (vol == true) {
    //         reproductor.volume = 0.02;
    //         vol = false;
    //         document.getElementById("musica").removeAttribute("muted");
    //         document.getElementById("interruptor").innerHTML = "off";
    //     } else {
    //         reproductor.volume = 0;
    //         vol = true;
    //         document.getElementById("interruptor").innerHTML = "on";
    //     }
    // }
    if (e.target.closest(".topUp")) {
        document.documentElement.scrollTop = 0;
    }

    if (e.target.closest(".contacto")) {
        document.querySelector(".contactopage").classList.toggle("open");
        jQuery('body').addClass('scrollhidden');
    }
    if (e.target.closest(".menumovill")) {

        document.querySelector(".menumovil").classList.toggle("open");
        jQuery('body').addClass('scrollhidden');
    }
    if (e.target.closest(".cerrar")) {
        document.querySelector(".contactopage").classList.toggle("open");
        jQuery('body').removeClass('scrollhidden');
    }
    if (e.target.closest(".cerrarr")) {
        document.querySelector(".menumovil").classList.toggle("open");
        jQuery('body').removeClass('scrollhidden');
    }
    if (e.target.closest("#full-name")) {
        jQuery("#full-name").removeClass('focus-visible');
        inputname.removeAttribute('data-focus-visible-added');
    }
})

$(document).ready(function () {
    $('.autoplay').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        // infinite: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 651,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.autoplay2').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4.35,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 3.3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            // {
            //     breakpoint: 1281,
            //     settings: {
            //         slidesToShow: 3.43,
            //         slidesToScroll: 1,
            //         infinite: true,
            //         dots: true
            //     }
            // },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2.65,/*3.3 */
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 651,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

/* card */
const wrapper = document.querySelectorAll(".cardWrap");

wrapper.forEach(element => {
    let state = {
        mouseX: 0,
        mouseY: 0,
        height: element.clientHeight,
        width: element.clientWidth
    };

    element.addEventListener("mousemove", ele => {
        const card = element.querySelector(".card");
        const cardBg = card.querySelector(".cardBg");
        state.mouseX = ele.pageX - element.offsetLeft - state.width / 2;
        state.mouseY = ele.pageY - element.offsetTop - state.height / 2;

        // parallax angle in card
        const angleX = (state.mouseX / state.width) * 30;
        const angleY = (state.mouseY / state.height) * -30;
        card.style.transform = `rotateY(${angleX}deg) rotateX(${angleY}deg) `;

        // parallax position of background in card
        const posX = (state.mouseX / state.width) * -40;
        const posY = (state.mouseY / state.height) * -40;
        cardBg.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
    });

    element.addEventListener("mouseout", () => {
        const card = element.querySelector(".card");
        const cardBg = card.querySelector(".cardBg");
        card.style.transform = `rotateY(0deg) rotateX(0deg) `;
        cardBg.style.transform = `translateX(0px) translateY(0px)`;
    });
});

/* card en rells */
const wrapperr = document.querySelectorAll(".cardWrapreels");

wrapperr.forEach(element => {
    let statee = {
        mouseX: 0,
        mouseY: 0,
        height: element.clientHeight,
        width: element.clientWidth
    };

    element.addEventListener("mousemove", ele => {
        const card = element.querySelector(".cardreels");
        const cardBg = card.querySelector(".cardBgreels");
        statee.mouseX = ele.pageX - element.offsetLeft - statee.width / 2;
        statee.mouseY = ele.pageY - element.offsetTop - statee.height / 2;

        // parallax angle in card
        const angleX = (statee.mouseX / statee.width) * 30;
        const angleY = (statee.mouseY / statee.height) * -30;
        card.style.transform = `rotateY(${angleX}deg) rotateX(${angleY}deg) `;

        // parallax position of background in card
        const posX = (statee.mouseX / statee.width) * -40;
        const posY = (statee.mouseY / statee.height) * -40;
        cardBg.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
    });

    element.addEventListener("mouseout", () => {
        const card = element.querySelector(".cardreels");
        const cardBg = card.querySelector(".cardBgreels");
        card.style.transform = `rotateY(0deg) rotateX(0deg) `;
        cardBg.style.transform = `translateX(0px) translateY(0px)`;
    });
});


/* END CARDS */
function animation(valorposition) {
    // if (window.scrollY > 10) {
    gsap.to('.topUpx', {
        duration: 1.5,
        y: valorposition,
        delay: 0.5,
    })
}

gsap
    .timeline({
        repeat: -1,
        default: {
            duration: 6,
        }
    })
    .to('.cuadrado_1', {
        duration: 10,
        x: 1000,
    })
    .to('.cuadrado_1', {
        duration: 10,
        x: 0,
    })

gsap
    .timeline({
        repeat: -1,
        default: {
            duration: 6,
        }
    })
    .from('.cuadrado_2', {
        duration: 10,
        x: 1000,
    })
    .from('.cuadrado_2', {
        duration: 10,
        x: 0,
    })

gsap
    .timeline({
        repeat: -1,
        default: {
            duration: 6,
        }
    })
    .to('.cuadrado_3', {
        duration: 8,
        x: 1000,
        ease: "back.out(1.7)"
    })
    .to('.cuadrado_3', {
        duration: 8,
        x: 0,
        ease: "back.out(1.7)"
    })

gsap
    .timeline({
        repeat: -1,
        default: {
            duration: 6,
        }
    })
    .from('.cuadrado_4', {
        duration: 8,
        x: 1000,
        ease: "elastic.out(1, 0.3)"
    })
    .from('.cuadrado_4', {
        duration: 8,
        x: 0,
        ease: "elastic.out(1, 0.3)"
    })


gsap
    .timeline({
        repeat: -1,
        default: {
            duration: 6,
        }
    })
    .to('.cuadrado_5', {
        duration: 8,
        x: 1000,
        ease: "bounce.inOut"
    })
    .to('.cuadrado_5', {
        duration: 8,
        x: 0,
        ease: "bounce.inOut"
    })
