// const last = document.getElementsByClassName("last-item");
// last[0].style.listStyleType = "none";
// last[0].style.border = "1px solid #333";
// last[0].style.padding = "7px";

const last = document.getElementsByTagName("li");
console.log(last);
last[last.length - 1].style.listStyleType = "none";
last[last.length - 1].style.border = "1px solid #333";
last[last.length - 1].style.padding = "7px";
