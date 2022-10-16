const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/Supplement.png') {
    myImage.setAttribute('src','images/Lapis.png');
  } else {
    myImage.setAttribute('src','images/Supplement.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	const myName = prompt('あなたの名前を入力してください。');
	if (!myName) {
	  setUserName();
	} else {
	  localStorage.setItem('name', myName);
	  myHeading.textContent = `Mozilla はかっこいいよ、${myName}`;
	}
  }
  

  if (!localStorage.getItem('name')) {
	setUserName();
  } else {
	const storedName = localStorage.getItem('name');
	myHeading.textContent = `こんにちは、${storedName}`;
  }
  
  myButton.onclick = () => {
	setUserName();
  }
  