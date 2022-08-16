// Play Main Episode
var clickPlayEpisode = document.querySelector(
    "#episodes #episode-overlay-wrapper"
);
clickPlayEpisode.onclick = function () {
    var srcValue = document.querySelector(
    "#episodes .episode-vedio-wrapper iframe"
    );
    var newString = srcValue.getAttribute("src") + "?rel=0&enablejsapi=1&autoplay=1";
    srcValue.setAttribute(
    "src",
    srcValue.getAttribute("src") + "?rel=0&enablejsapi=1&autoplay=1"
    );
    document.querySelector(
    "#episodes #episode-overlay-wrapper"
    ).style.display = "none";
    document.querySelector(
    "#episodes .episode-vedio-wrapper iframe"
    ).style.display = "block";
};
// Show Feature Overlay Modal
const showDialog = (
    link1,
    link2,
    heading1,
    content1,
    imageLink1,
    heading2,
    content2,
    imageLink2
    ) => {



    var getFeatureOverLink1 = document.querySelector(
        "#feature-overview-vedio1 iframe"
    );
    var getFeatureOverLink2 = document.querySelector(
        "#feature-overview-vedio2 iframe"
    );
    getFeatureOverLink1.setAttribute("src", link1);
    getFeatureOverLink2.setAttribute("src", link2);

    var featureOverlayImage1 = document.querySelector(
        "#feature-overlay-video1 iframe"
    );
    var featureOverlayImage2 = document.querySelector(
        "#feature-overlay-video2 iframe"
    );
    var headFeature1 = document.querySelector(
        "#feature-overlay-video1 .card-body .single-episode-details"
    );
    var headFeature2 = document.querySelector(
        "#feature-overlay-video2 .card-body .single-episode-details"
    );
    var contentFeature1 = document.querySelector(
        "#feature-overlay-video1 .card-body .single-episode-title"
    );
    var contentFeature2 = document.querySelector(
        "#feature-overlay-video2 .card-body .single-episode-title"
    );
    var imageFeature1 = document.querySelector(
        "#feature-overlay-video1 #feature-overlay-image1"
    );
    var imageFeature2 = document.querySelector(
        "#feature-overlay-video2 #feature-overlay-image2"
    );

    featureOverlayImage1.setAttribute("src", link1);
    featureOverlayImage2.setAttribute("src", link2);
    headFeature1.innerText = heading1;
    headFeature2.innerText = heading2;

    contentFeature1.innerText = content1;
    contentFeature2.innerText = content2;

    imageFeature1.style.backgroundImage = "url(" + imageLink1 + ")";
    imageFeature2.style.backgroundImage = "url(" + imageLink2 + ")";

    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    const scrollY =
        document.documentElement.style.getPropertyValue("--scroll-y");
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}`;

    window.onclick = function (event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    };
};
// Close Feature Overlay Modal
const closeDialog = () => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("closemodalFeature")[0];
    modal.style.display = "none";
    window.onclick = function (event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    };

    document.querySelector("#feature-overlay-image1").style.display =
        "flex";
    document.querySelector("#feature-overlay-video1 iframe").style.display =
        "none";
    document.querySelector("#feature-overlay-image2").style.display =
        "flex";
    document.querySelector("#feature-overlay-video2 iframe").style.display =
        "none";
    document
        .querySelector("#feature-overlay-video1 iframe")
        .contentWindow.postMessage(
        '{"event":"command", "func":"stopVideo", "args":""}',
        "*"
        );
    document
        .querySelector("#feature-overlay-video2 iframe")
        .contentWindow.postMessage(
        '{"event":"command", "func":"stopVideo", "args":""}',
        "*"
        );
        document
        .querySelector("#feature-overview-vedio1 iframe")
        .contentWindow.postMessage(
        '{"event":"command", "func":"stopVideo", "args":""}',
        "*"
        );
    document
        .querySelector("#feature-overview-vedio2 iframe")
        .contentWindow.postMessage(
        '{"event":"command", "func":"stopVideo", "args":""}',
        "*"
        );
};
window.addEventListener("scroll", () => {
document.documentElement.style.setProperty(
    "--scroll-y",
    `${window.scrollY}px`
);
});
// Play Feature Modal Video
const playFeatureoverlayvideo1 = () => {
    document.querySelector("#feature-overlay-image1").style.display =
        "none";
    document.querySelector("#feature-overlay-video1 iframe").style.display =
        "block";
};
const playFeatureoverlayvideo2 = () => {
    document.querySelector("#feature-overlay-image2").style.display =
        "none";
    document.querySelector("#feature-overlay-video2 iframe").style.display =
        "block";
};
// Episode Card Content Replace
$(".multi-card").click(function () {
    var playPauseReset =
    document.getElementById("play-pause-audio").classList;
    playPauseReset.remove("playaudio");
    var getOriginalImg = document.querySelector("#play-pause-audio img");
    getOriginalImg.setAttribute(
    "src",
    "./assets/images/episode/play-button.png"
    );
    var muteAudioReset = document.getElementById("mute-audio").classList;
    muteAudioReset.remove("muted");
    var getmuteImg = document.querySelector("#mute-audio img");
    getmuteImg.setAttribute(
    "src",
    "./assets/images/episode/speaker-filled-audio-tool.png"
    );
    var musicReset = document.getElementById("speaker-audio");
    musicReset.muted = false;
    $(".multi-card").removeClass("active");
    $(".multi-card").css("opacity", 0.3);
});

$(".multi-card").hover(
    function () {
        $(this).css("opacity", 1);
    },
    function () {
    if ($(this).hasClass("active")) {
        $(this).css("opacity", 1);
    } else {
        $(this).css("opacity", 0.3);
    }
    }
);

$(".multi-card").click(function () {
    $(this).addClass("active");
    $(this).css("opacity", 1);

    $("#episode-overlay-wrapper").css("display", "flex");
    $("#episodes .episode-vedio-wrapper iframe").css("display", "none");

    var imageLink = document.querySelector(
    ".multi-card.active .image-link"
    );

    var episodeMainImage = document.querySelector(
    "#episodes #episode-overlay-wrapper"
    );
    episodeMainImage.style.backgroundImage =
    "url(" + imageLink.innerText + ")";

    var episodeDetails = document.querySelector(
    ".multi-card.active .multi-episode-details"
    );
    var episodeTitle = document.querySelector(
    ".multi-card.active .multi-episode-title"
    );
    document.querySelector(
    "#episodes .single-episode-details"
    ).innerText = episodeDetails.innerText;
    document.querySelector("#episodes .single-episode-title").innerText =
    episodeTitle.innerText;
    var episodeLink = document.querySelector(
    ".multi-card.active .episode-link"
    );
    var singleiframe = document.querySelector(
    "#episodes .single-episode-iframe"
    );
    singleiframe.setAttribute("src", episodeLink.innerText);
    var pdfLink = document.querySelector(".multi-card.active .pdf-link");
    var getTargetPdfElement = document.querySelector(
    "#episodes .single-episode-pdf a"
    );
    getTargetPdfElement.setAttribute("href", pdfLink.innerText);
    var audioLink = document.querySelector(
    ".multi-card.active .audio-link"
    );
    var getTargetAudioElement = document.querySelector("#speaker-audio");
    getTargetAudioElement.setAttribute("src", audioLink.innerText);
});

// Episode Volume Related Action

$(".volume-wrapper img").hover(
    function () {
        var getAllClass2 = document.getElementById("mute-audio").className;
        if( getAllClass2 == "muted"){
            return
        }
        else{
            $(".slideContainer").addClass("showvolumeslider");
        }

    },
    function () {}
);

$("#myRange").click(function (e) {
    $(".slideContainer").removeClass("showvolumeslider");
});

var music = document.getElementById("speaker-audio");
    music.volume = 0.42;
var progressed = document.getElementById("progressed");
var timepass = document.getElementById("audio-time-passed");
var audiotime = document.getElementById("audio-time-total");
var getmuteImg = document.querySelector("#mute-audio img");
var sliderRange = document.getElementById("myRange");
var outputRangeValue = document.getElementById("myrangevalue");
    outputRangeValue.innerHTML = sliderRange.value;
    sliderRange.oninput = function() {
        outputRangeValue.innerHTML = this.value;
    }
var start_value = sliderRange.getAttribute("value");
var x = start_value;
var color = 'linear-gradient(90deg, rgb(130, 157, 40)' + x + '% , rgb(226, 232, 207)' + x + '%)';
    sliderRange.style.background = color;
    sliderRange.addEventListener("mousemove", function() {
        if(sliderRange.value == 0){
            getmuteImg.setAttribute("src", "./assets/images/episode/Mute.svg");
        }
        else{
            getmuteImg.setAttribute(
                "src",
                "./assets/images/episode/speaker-filled-audio-tool.png"
                );
        }
        x = sliderRange.value;
        music.volume = x/100;
        sliderRange.setAttribute("value",x)
        color = 'linear-gradient(90deg, rgb(130, 157, 40)' + x + '% , rgb(226, 232, 207)' + x + '%)';
        sliderRange.style.background = color;
    });

    music.ontimeupdate = function (e) {
    progressed.style.width =  Math.floor((music.currentTime * 100) / music.duration) + "%";
    timepass.innerText = getTimeCodeFromNum(music.currentTime);
    audiotime.innerText =
        getTimeCodeFromNum(music.duration) == "NaN:NaN:NaN"
        ? ""
        : getTimeCodeFromNum(music.duration);
    };
var playPause = document.getElementById("play-pause-audio");
var muteAudio = document.getElementById("mute-audio");

function toggleClass() {
    playPause.classList.toggle("playaudio");
    var getAllClass1 =
        document.getElementById("play-pause-audio").className;
    var getOriginalImg = document.querySelector("#play-pause-audio img");
    var getplayImg = document.querySelector(".playaudio img");

    if (getAllClass1 == "playaudio") {
        music.play();
        getplayImg.setAttribute("src", "./assets/images/episode/pause.svg");
    } else {
        music.pause();
        getOriginalImg.setAttribute(
        "src",
        "./assets/images/episode/play-button.png"
        );
    }
}

function muteClass() {
    muteAudio.classList.toggle("muted");
    var getAllClass2 = document.getElementById("mute-audio").className;
    var getmuteImg = document.querySelector("#mute-audio img");
    if (getAllClass2 == "muted") {
        music.muted = true;
        music.volume = 0;
        getmuteImg.setAttribute("src", "./assets/images/episode/Mute.svg");
        $(".slideContainer").removeClass("showvolumeslider");
    } else {
        music.muted = false;
        music.volume = 0.42;
        getmuteImg.setAttribute(
        "src",
        "./assets/images/episode/speaker-filled-audio-tool.png"
        );

    }



}

function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;
    if (hours === 0)
        return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
        seconds % 60
    ).padStart(2, 0)}`;
}

// var slider = document.getElementById("myRange");
// var output = document.getElementById("value");

// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

// var start_value = slider.getAttribute("value");

// var x = start_value;
// var color = 'linear-gradient(90deg, rgb(130, 157, 40)' + x + '% , rgb(214, 214, 214)' + x + '%)';
// slider.style.background = color;

// slider.addEventListener("mousemove", function() {
//     x = slider.value;
//     color = 'linear-gradient(90deg, rgb(130, 157, 40)' + x + '% , rgb(214, 214, 214)' + x + '%)';
//     slider.style.background = color;
// });
