const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "pexels-andrea-piacquadio-733872.jpg",
        text: 
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere veniam accusamus repellendus modi harum nam sapiente, eligendi iste natus a.",

    },
    {
        id: 2,
        name: "peter johnson",
        job: "web designer",
        img:
            "pexels-andrea-piacquadio-846741.jpg",
        text: 
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere veniam accusamus repellendus modi harum nam sapiente, eligendi iste natus a.",

    },
    {   
        id: 3,
        name: "david jones",
        job: "intern",
        img:
            "pexels-daniel-xavier-1121796.jpg",
        text: 
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere veniam accusamus repellendus modi harum nam sapiente, eligendi iste natus a.",
    },
    {   
        id: 4,
        name: "sara jones",
        job: "developer",
        img:
            "pexels-daniel-xavier-1239291.jpg",
        text: 
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere veniam accusamus repellendus modi harum nam sapiente, eligendi iste natus a.",
    }
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener('DOMContentLoaded',function(){
    showPerson();
});

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
    currentItem ++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
})

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
})

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson();
})