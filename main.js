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
        toggel_menu.classList.toggle("fa-xmark");
    })
})
// end header

// start skills
let spans = document.querySelectorAll(".skill div span");
window.addEventListener("scroll", function() {
    spans.forEach((span) => {
        if (window.scrollY > 280) {
            span.style.width = span.dataset.costom;
        } else {
            span.style.width = "0%";
        }
    })
})
// end skills

// start projects
// Create Cards Projects

let box_card = document.querySelector(".box_card");
async function getData(apiLink) {
    try {
        let myData = await fetch(apiLink);
        let data = await myData.json();
        for (let i = 0; i < data.length; i++) {
            let card = document.createElement("div");
            card.classList.add("card", "swiper-slide");
            
            let imgCard = document.createElement("img");
            // imgCard.setAttribute("src", `./images/proj${i + 1}.png`);
            imgCard.setAttribute("src", `./images/${data[i].name}.png`);
            
            let info_card = document.createElement("div");
            info_card.classList.add("info_card");
            let nameCard = document.createElement("h3");
            nameCard.innerHTML = data[i].name;
            info_card.prepend(nameCard);

            let linkCard = document.createElement("a");
            linkCard.setAttribute("href", `https://ali-aljubouri99.github.io/${data[i].name}/`)
            linkCard.setAttribute("target", "_black");
            linkCard.innerHTML = "Watch the site";
            info_card.append(linkCard);
            
            card.appendChild(imgCard);
            card.appendChild(info_card);
            
            box_card.append(card);

            if (data[i].name === "eng_ali_aljubouri" || data[i].name === "the-rosary") {
                card.remove();
            }
        }
        console.log(data)
    }
    catch (reject) {
        console.log(reject)
    }
}

getData("https://api.github.com/users/ali-aljubouri99/repos")


// Swiper Cards Projects
var swiper = new Swiper(".continer-slider", {
    slidesPerView: 3,
    spaceBetween: 25,
    grabCursor: "true",
    fade: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        }
    }
});


// let show_btn = document.querySelector(".show_more");
// let cardsHide = document.querySelectorAll(".box_card .hidd");
// let AllCards = document.querySelectorAll(".box_card .card");
// let leftCards = [AllCards[0], AllCards[3], AllCards[6], AllCards[9]];
// let centerCards = [AllCards[1], AllCards[4], AllCards[7]];
// let rightCards = [AllCards[2], AllCards[5], AllCards[8]];


// show_btn.addEventListener("click", function() {
//     cardsHide.forEach((ele) => {
//         if (ele.classList.contains("hidd")) {
//             ele.classList.replace("hidd", "show");
//             show_btn.innerHTML = "Hiding";
//         } else {
//             ele.classList.replace("show", "hidd");
//             show_btn.innerHTML = "Show More";
//         }
//     });
// });

// window.addEventListener("scroll", function() {
//     // 
//     if (document.documentElement.clientWidth >= 1200) {
//         if (window.scrollY <= 1100) {
//             leftCards.forEach((ele) => {
//                 ele.style = `
//                 position: relative;
//                 left: -120%;
//                 transition: 1s;
//                 opacity: 0.5;`
//             });
//             centerCards.forEach((ele) => {
//                 ele.style = `
//                 opacity: 0;
//                 transition: 1s;`
//             });
//             rightCards.forEach((ele) => {
//                 ele.style = `
//                 position: relative;
//                 right: -130%;
//                 transition: 1s;
//                 opacity: 0.5;`
//             });
//         } else {
//             leftCards.forEach((ele) => {
//                 ele.style.left = "0%";
//                 ele.style.opacity = "1"
//             });
//             centerCards.forEach((ele) => {
//                 ele.style.opacity = "1";
//             });
//             rightCards.forEach((ele) => {
//                 ele.style.opacity = "1";
//                 ele.style.right = "0%";
//             });
//         }
//     } else if (document.documentElement.clientWidth <= 767) {
//         if (window.scrollY <= 1600) {
//             AllCards.forEach((ele) => {
//                 ele.style = `
//                 position: relative;
//                 left: -130%;
//                 transition: 0.7s ;
//                 opacity: 0.5`;
//             });
//         } else {
//             AllCards.forEach((ele) => {
//                 ele.style.opacity = "1";
//                 ele.style.left = "0%";
//             });
//         }
//     }
// });

// End projects

// start footer
let spanDate = document.querySelector("h3 .date");
let date = new Date();

spanDate.innerHTML = date.getFullYear();
// end footer