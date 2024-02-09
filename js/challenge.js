//Start behavior
let counter = document.querySelector("#counter");
let id = 0;
document.addEventListener("DOMContentLoaded", startCounter);
function startCounter() {
    setInterval(addToCounter, 1000);
    id += 1;
}

//Add click listeners
let pauseBtn = document.querySelector("button#pause");
pauseBtn.addEventListener("click", pauseInterval);

let plusBtn = document.querySelector("button#plus");
plusBtn.addEventListener("click", addToCounter);

let minusBtn = document.querySelector("button#minus");
minusBtn.addEventListener("click", subtractFromCounter);

let heartBtn = document.querySelector("button#heart");
heartBtn.addEventListener("click", likeMe2);

let form = document.querySelector("#comment-form");
form.addEventListener("submit", (e) => {
    postComment(e);
    form.reset();
});

//Functions
function pauseInterval() {
    clearInterval(id);
    pauseBtn.innerText = " resume ";
    pauseBtn.removeEventListener("click", pauseInterval);
    pauseBtn.addEventListener("click", resumeInterval);
};
function resumeInterval() {
    startCounter();
    pauseBtn.innerText = " pause ";
    pauseBtn.removeEventListener("click", resumeInterval);
    pauseBtn.addEventListener("click", pauseInterval);
};
function addToCounter() {
    let newNum = parseInt((counter.innerText), 10);
    newNum++;
    counter.innerText = newNum;
};
function subtractFromCounter() {
    let newNum = parseInt((counter.innerText), 10);
    newNum--;
    counter.innerText = newNum;
};
function likeMe2() {
    let currentCount = counter.innerText;
    let likeBody = document.querySelector("ul.likes");
    let likeList = document.getElementsByClassName("newLike");
    let createNew = true;
    for (let like of likeList) {
        if (like.id === currentCount) {
            like.likeTotal++;
            like.innerHTML = `
            ${currentCount} has been liked ${like.likeTotal} times
            `;
            createNew = false;
        }
    }
    if (createNew === true) {
        let newLike = document.createElement('li');
        newLike.id = currentCount;
        newLike.className = "newLike";
        newLike.likeTotal = 1;
        newLike.innerHTML = `
        ${currentCount} has been liked 1 times
        `;
        likeBody.appendChild(newLike);
    }
}
function postComment(e) {
    e.preventDefault();
    let comment = form.querySelector("#comment-input").value;
    let commentList = document.querySelector("div#list");
    let newComment = document.createElement("p");
    newComment.innerText = `"${comment}"`;
    commentList.appendChild(newComment);
}