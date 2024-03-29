// document.addEventListener("DOMContentLoaded", function (event) {
const num = document.querySelector(".num");
let span = "";
for (let i = 1; i < 13; i++) {
  span += `<span style="--i:${i}" > ${i}
 
  </span>`;
}
num.innerHTML = span;
// });
let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();
  const options = { weekday: "long" };
  const dayOfWeek = day.toLocaleString("en-US", options);
  console.log("day: ", dayOfWeek);
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + mm / 24}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");
  let dayW = document.getElementById("day");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  let am = h > 24 ? "PM" : "AM";

  if (h > 24) {
    h = h - 24;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;

  dayW.innerHTML = dayOfWeek.toUpperCase();
});
