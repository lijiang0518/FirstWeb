let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ba167604fdb74fe1daced483f5b949d6.jpg') {
      myImage.setAttribute('src', 'images/fa2b2ec08d6a832c47f858c03585b317.jpg');
    } else {
      myImage.setAttribute('src', 'images/ba167604fdb74fe1daced483f5b949d6.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }

//使用了取非运算符（逻辑非，用 ! 表示）来检测 'name' 数据是否存在
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}
myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
  }