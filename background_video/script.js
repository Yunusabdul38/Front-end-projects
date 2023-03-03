const content = document.querySelector(".content");

const words = [
  "welcome to my page",
  "i'm a front-end developer",
  "mathematics student",
  "hope you will be amazed with what you are about to see below",
];

let loop = 0;
let wordsCount = 0;

function looping() {
    words.forEach((el) => {
        let cap = el.split(" ").forEach((lp) => {
          let s = lp[0].toUpperCase() + lp.slice(1).toLowerCase();
          //console.log(s)
        });
      });

  content.textContent = `${words[loop].slice(0, wordsCount)}`;

  if (words[loop].length === wordsCount) {
    loop++;
    wordsCount = 0;
  }
  wordsCount++;

  if (loop === words.length) loop = 0;
}
setInterval(looping,300)
//console.log(content.textContent=words[loop][0] + words[loop][1])
