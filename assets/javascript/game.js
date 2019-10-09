window.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    // document.addEventListener("keypress", start);
});

// Loading the Magic Number

let magNum = Math.floor(Math.random() * 120) + 19;
$('#magicNumber').text(magNum)

$(function () {

    let scoreGem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let scoreG = [];

    function score() {

        const sizeScore = 5;
        const gemSizeNumber = 1

        for (let i = 0; i < sizeScore; i++) {
            const scoreMath = Math.floor(Math.random() * scoreGem.length);
            scoreG.push(scoreMath)
            if (scoreG[i] !== scoreG[i + 1]) {
                scoreMath++;
            }
        }

        







        // if (scoreG1 === scoreG2) {
        //     scoreG2 += scoreG2++;
        // } else if (scoreG2 === scoreG3) {
        //     scoreG3 += scoreG3++;
        // } else if (scoreG3 === scoreG4) {
        //     scoreG3 += scoreG4++;
        // }

    }
    score();

    $('#gem1').click(function (event) {
        $('#score').text(scoreG1);
    })
    $('#gem2').click(function (event) {
        $('#score').text(scoreG2);
    })
    $('#gem3').click(function (event) {
        $('#score').text(scoreG3);
    })
    $('#gem4').click(function (event) {
        $('#score').text(scoreG4);
    })

})