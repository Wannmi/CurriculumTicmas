var elements = [htmlLogo, cssLogo, jsLogo, psLogo, corelLogo, cLogo]; //  document.getElementById('jsLogo');
//var path = anime.path('#pruebaPath');
var arrpath = [anime.path('#htmlPath'), anime.path('#cssPath'), anime.path('#jsPath'), anime.path('#psPath'), anime.path('#corelPath'), anime.path('#cPath')]; // Esto funciona y va con ej:     translateX: arrpath[1]('x'),
var angle = [30 , -22 , 25 , -17, 15, -20];

var motionPath = anime({
    targets: elements,

    translateX: function (elements, i) {
        return arrpath[i]('x');
    },

    translateY: function (elements, i) {
        return arrpath[i]('y');
    },
    easing: 'easeInOutSine',
    zIndex: {
        value: [-1, 1],
        delay: 600,
        round: true
    },
    duration: 3000,
    loop: false,
    autoplay: false
});

var vibrar = anime({
    targets: elements,
    keyframes: [
        {
            rotate: function (elements,i) {
                return angle[i];
                },
        },
        {
            rotate: function (elements,i) {
                return -angle[i];
                },
        }
    ],
    easing: 'linear',
    direction: 'alternate',
    loop: true,
    duration: 300,
    delay: 2000
});

document.getElementById('imgPerfil').onclick = motionPath.restart;