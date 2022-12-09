update()
getAva()
switchTheme()
switchHoliday()

function update() {
  let date = new Date()

  document.getElementById('textBio').innerHTML = `Наверное мне уже ${date.getFullYear() - 2007} лет, по этому хочу сказать что я вахуе, старый пиздец`
  document.documentElement.setAttribute('theme', getCookie('theme'))
}

function switchHoliday() {
  let links = ['vk', 'tg', 'git', 'steam']
  let date = new Date()
  let snow = document.createElement('script')

  if (date.getMonth() == 11 | date.getMonth() == 0) {
    document.documentElement.setAttribute('event', 'NewYear')
    document.head.appendChild(snow)
    // snow.src = 'https://thecode.media/wp-content/uploads/2019/12/snowfall2020.js'    а прикол сайт блокнут, и нет моего снега
    snow.src = 'libraries/snow.js'
  }else if (date.getDate() >= 20 & date.getMonth() == 9 | date.getDate() <= 5 & date.getMonth() == 10) {
    document.documentElement.setAttribute('event', 'Helloween')
  }else if (date.getDate() == 1 & date.getMonth() == 4) {
    for (let i = 0; i < links.length; i++) {
      let name = document.getElementById(links[i])
      name.setAttribute('class', `${name.getAttribute('class')} gradient`)
    }
  }
}

function switchTheme() {
  const buttonSwitch = document.getElementById('ava')

  buttonSwitch.addEventListener('click', () => {
    if (document.documentElement.getAttribute('theme') == 'light'){
      document.documentElement.setAttribute('theme', 'dark')
      document.cookie = "theme=dark; max-age=604800";
    }else {
      document.documentElement.setAttribute('theme', 'light')
      document.cookie = "theme=light; max-age=604800";
    }
  })
}

function getCookie(name) {
	var name_cook = name+"=";
	var spl = document.cookie.split(";");
	
	for(var i=0; i<spl.length; i++) {
		var c = spl[i];
		
		while(c.charAt(0) == " ") {
			c = c.substring(1, c.length);
		}
		
		if(c.indexOf(name_cook) == 0) {
			return c.substring(name_cook.length, c.length);
		}
	}
	
	return null;
}

async function getAva() { //code by kirillsaint
  const response = await fetch('https://api.telegram.org/bot5281659940:AAEJLcavorU-PoeGX8Q49nGNkDuO9vzGXBE/getUserProfilePhotos?user_id=5285094955')
  const data = await response.json()
  
  let ava = data.result.photos[0][2].file_id
  
  const res = await fetch('https://api.telegram.org/bot5281659940:AAEJLcavorU-PoeGX8Q49nGNkDuO9vzGXBE/getFile?file_id='+ava)
  const dataava = await res.json()
  
  let avaUrl = 'https://api.telegram.org/file/bot5281659940:AAEJLcavorU-PoeGX8Q49nGNkDuO9vzGXBE/' + dataava.result.file_path
  
  document.getElementById('ava').src = avaUrl
}
