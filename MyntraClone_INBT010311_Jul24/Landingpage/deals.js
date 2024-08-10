var dealsArr = [{
    img: "./images/img1.webp"
},
{
    img: "./images/img3.webp"
},
{
    img: "./images/img4.webp"
},
{
    img: "./images/img5.webp"
},
{
    img: "./images/img6.webp"
},

{
    img: "./images/img7.webp"
},
{
    img: "./images/cat26plain.webp"
},
{
    img: "./images/img9.webp"
},
{
    img: "./images/img10.webp"
},
{
    img: "./images/img11.webp"
},
{
    img: "./images/img12.webp"
},
{
    img: "./images/cat26plain.webp"
},
];

dealsArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#deals").append(box);
});

var bestArr = [{
    img: "./images/img14.webp"
},
{
    img: "./images/img20.webp"
},
{
    img: "./images/img17.webp"
},
{
    img: "./images/img18.webp"
},
{
    img: "./images/img19.webp"
},
{
    img: "./images/img15.webp"
},

];

bestArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#best").append(box);
});




var categoriesArr = [{
    img: "./images/pic1.png"
},
{
    img: "./images/pic2.png"
},
{
    img: "./images/pic3.png"
},
{
    img: "./images/pic4.png"
},
{
    img: "./images/pic5.png"
},
{
    img: "./images/pic6.png"
},
{
    img: "./images/pic7.png"
},
{
    img: "./images/pic8.png"
},
{
    img: "./images/pic9.png"
},
{
    img: "./images/pic10.png"
},
{
    img: "./images/pic11.png"
},
{
    img: "./images/pic12.png"
},
{
    img: "./images/pic13.png"
},
{
    img: "./images/pic14.png"
},
{
    img: "./images/pic15.png"
},
{
    img: "./images/pic16.png"
},
{
    img: "./images/pic17.png"
},
{
    img: "./images/pic18.png"
}


];

categoriesArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#categories").append(box);
});


//LANDING PAGE SCRIPT
document.getElementById('landingPage').addEventListener('click', function(){
    window.location.href = "index.html"
})