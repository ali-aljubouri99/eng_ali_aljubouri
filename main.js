// start header
let header = document.querySelector("header");
let logo = document.querySelector(".logo");
let navBar = document.querySelector("nav");
let links = document.querySelectorAll(".navigation a");
let toggel_menu = document.querySelector(".toggel_menu");

window.onscroll = function() {
    if (window.scrollY >= 400) {
        header.style.backgroundColor = "#fff"
        logo.style.color = "#0a192f";
        links.forEach((ele) => {
            ele.style.color = "#0a192f"
        });
        toggel_menu.style.color = "#0a192f";
    } else {
        header.style.backgroundColor = "#0a192f";
        logo.style.color = "#ccd6f6";
        links.forEach((ele) => {
            ele.style.color = "#ccd6f6";
        });
        toggel_menu.style.color = "#ccd6f6";
    }
}

toggel_menu.addEventListener("click",function() {
    navBar.classList.toggle("active");
    toggel_menu.classList.toggle("fa-xmark");
});

links.forEach((ele) => {
    ele.addEventListener("click", function() {
        navBar.classList.toggle("active");
    })
})
// end header

// start skills
let spans = document.querySelectorAll(".skill div span");
window.addEventListener("scroll", function() {
    if (window.scrollY >= 230) {
        spans.forEach((ele) => {
            ele.style.width = ele.getAttribute(`data-costom`)
        })
    } else {
        spans.forEach((ele) => {
            ele.style.width = "0%"
        })
    }
})
// end skills

// start projects
let show_btn = document.querySelector(".show_more");
let card = document.querySelectorAll(".box_card .hidd");
let AllCards = document.querySelectorAll(".box_card .card");
let leftCards = [AllCards[0], AllCards[3], AllCards[6]];
let centerCards = [AllCards[1], AllCards[4], AllCards[7]];
let rightCards = [AllCards[2], AllCards[5], AllCards[8]];


show_btn.addEventListener("click", function() {
    card.forEach((ele) => {
        if (ele.classList.contains("hidd")) {
            ele.classList.replace("hidd", "show");
            show_btn.innerHTML = "Hiding";
        } else {
            ele.classList.replace("show", "hidd");
            show_btn.innerHTML = "Show More";
        }
    });
});

window.addEventListener("scroll", function() {
    if (document.documentElement.clientWidth >= 1200) {
        if (window.scrollY <= 1100) {
            leftCards.forEach((ele) => {
                ele.style = `
                position: relative;
                left: -120%;
                transition: 1s;
                opacity: 0.5;`
            });
            centerCards.forEach((ele) => {
                ele.style = `
                opacity: 0;
                transition: 1s;`
            });
            rightCards.forEach((ele) => {
                ele.style = `
                position: relative;
                right: -130%;
                transition: 1s;
                opacity: 0.5;`
            });
        } else {
            leftCards.forEach((ele) => {
                ele.style.left = "0%";
                ele.style.opacity = "1"
            });
            centerCards.forEach((ele) => {
                ele.style.opacity = "1";
            });
            rightCards.forEach((ele) => {
                ele.style.opacity = "1";
                ele.style.right = "0%";
            });
        }
    } else if (document.documentElement.clientWidth <= 767) {
        if (window.scrollY <= 1600) {
            AllCards.forEach((ele) => {
                ele.style = `
                position: relative;
                left: -130%;
                transition: 0.7s ;
                opacity: 0.5`;
            });
        } else {
            AllCards.forEach((ele) => {
                ele.style.opacity = "1";
                ele.style.left = "0%";
            });
        }
    }
});

// End projects

// start footer
let spanDate = document.querySelector("h3 .date");
let date = new Date();

spanDate.innerHTML = date.getFullYear();
// end footer