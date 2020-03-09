setInterval(function () {
    var newVal = Math.floor((Math.random() * 179) + 1);

    $('.gauge3 .semi-circle-mask').attr({
        style: 'transform: rotate(' + newVal + 'deg);'
    });
}, 1000);