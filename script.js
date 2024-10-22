let isDOBOpen = false;
let settingAdd = document.querySelector(".setting");
let settingContents = document.querySelector(".ftitem");
let inputedDate = document.querySelector("input");
let btn = document.querySelector("button");
let intialText = document.querySelector("#intialTxt");
let afterClickContents = document.querySelector(".afterBtnClick");
let year = document.querySelector("#year");
let month = document.querySelector("#month");
let day = document.querySelector("#day");
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let container = document.querySelector(".container");

toggleSettings = () => {
  if (isDOBOpen) {
    settingContents.classList.add("hide");
  } else {
    settingContents.classList.remove("hide");
    settingAdd.classList.add("marginsize");
    settingContents.classList.add("marginsize");
  }
  isDOBOpen = !isDOBOpen;
};

setDOB = () => {
  let input = inputedDate.value;
  //  const year = localStorage.getItem("year");
  //  const month = localStorage.getItem("year");
  //  const day = localStorage.getItem("year");
  //  if(year && month && day)
  //  {
  //   input = new Date(year,month,day);
  //  }

  if (input) {
    //   localStorage.setItem("year",input.getFullYear());
    //   localStorage.setItem("month",input.getMonth());
    //   localStorage.setItem("day",input.getDay());
    // localStorage.setItem("hour",input.getHour());
    // localStorage.setItem("minute",input.getMinute());
    // localStorage.setItem("second",input.getSecond());

    intialText.classList.add("hide");
    afterClickContents.classList.remove("hide");
    setInterval(() => {
      update(), 1000;
    });
  } else {
    intialText.classList.remove("hide");
    afterClickContents.classList.add("hide");
  }
};

update = () => {
  let currentTime = new Date();
  let dateString = inputedDate.value;
  // console.log(dateString);
  let inputedTime = new Date(dateString);
  // console.log(inputedTime);
  const dateDiff = currentTime - inputedTime;
  let yearr = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
  let monthh = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12;
  let dayy = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
  let hourr = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
  let minutee = Math.floor(dateDiff / (1000 * 60)) % 60;
  let secondd = Math.floor(dateDiff / 1000) % 60;
  year.innerText = makeTwoDigit(yearr);
  month.innerText = makeTwoDigit(monthh);
  day.innerText = makeTwoDigit(dayy);
  hour.innerText = makeTwoDigit(hourr);
  minute.innerText = makeTwoDigit(minutee);
  second.innerText = makeTwoDigit(secondd);
};

makeTwoDigit = (num) => {
  return num > 9 ? num : `0${num}`;
};

settingAdd.addEventListener("click", toggleSettings);

btn.addEventListener("click",()=>{
  setDOB();
  toggleSettings();
})

