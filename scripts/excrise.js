let randomHexa = () => {
  let hexa ='';

  while(true) {
    let ran = Math.floor(Math.random() * 123)
    if((ran >=48 && ran <=57) 
    || (ran >= 65 && ran <= 70) 
    || (ran >= 97 && ran <= 102)) 
    {
      hexa += String.fromCharCode(ran) 
    }
    if(hexa.length == 6) break;
  }

  return `#${hexa.toUpperCase()}`
}

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

let startTime = () => {
    let time = document.querySelector('#time span')

    time.style.backgroundColor = `${randomHexa()}`

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    let now = new Date()
    let y = now.getFullYear()
    let m = monthNames[now.getMonth()]
    console.log(m);
    let d = checkTime(now.getDate())
    let h = checkTime(now.getHours())
    let mm = checkTime(now.getMinutes())
    let s = checkTime(now.getSeconds())
    
    time.innerHTML = `${m} ${d}, ${y} ${h}:${mm}:${s}`

    
    t = setTimeout(function() {
        startTime()
    }, 1000);
}

let yearChange = () => {
  let year = document.querySelector('h1 span')
  year.style.color = `${randomHexa()}`
  
  t = setTimeout(function() {
    yearChange()
  }, 1000);
}

let changeli = () => {
  let li = document.getElementsByTagName('li')
  for (let i = 0; i < li.length; i++) {
    li[i].style.background = `${randomHexa()}`
  }
  t = setTimeout(function() {
    changeli()
  }, 1000);
}



let main = () => {
  yearChange()
  startTime()
  changeli()
}

main()

