let sideBar = document.getElementsByClassName("nav")[0];
let ul = sideBar.getElementsByTagName("li");
let project1 = document.getElementById("project1");
let project1Detail = document.getElementsByClassName("project1")[0];
let close = project1Detail.getElementsByClassName("close")[0];

// sideBar
sideBar.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
        for (let i = 0; i < ul.length; i++) {
            ul[i].classList = [];
            if (ul[i].innerText === event.target.innerText) {
                ul[i].classList = ["active"];
            }
        }
    }
}, false);

//scroll page
document.addEventListener("scroll", function () {
    let time;
    clearTimeout(time);
    let page = Number((window.pageYOffset / 890).toFixed(0))
    let curNav;
    for (let i = 0; i < ul.length; i++) {
        if (ul[i].classList.length > 0) {
            curNav = i
        }
    }
    time = setTimeout(function () {
        if (page !== curNav || !curNav) {
            for (let i = 0; i < ul.length; i++) {
                ul[i].classList = [];
                if (i === page) {
                    ul[i].classList = ["active"];
                }
            }
        }
    }, 500);

})

//project1's information
project1.addEventListener("click", function () {
    project1Detail.classList.remove("unShow");
}, false)

close.addEventListener("click", function () {
    project1Detail.classList.add("unShow");
}, false)



