// burger

let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav-up__list');
let menuLinks = menu.querySelectorAll('.nav-up__link');
let background = document.querySelector('.nav-up__background');
let downMenu = document.querySelector('.nav-down__list');
let downMenuLinks = document.querySelectorAll('.nav-down__link');

burger.addEventListener('click',

  function () {
    burger.classList.toggle('burger--active');

    menu.classList.toggle('nav-up__list--active');

    document.body.classList.toggle('stop-scroll');

    background.classList.toggle('nav-up__background--active');

    downMenu.classList.toggle('nav-down__list--active');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('nav-up__list--active');

    document.body.classList.remove('stop-scroll');

    downMenu.classList.remove('nav-down__list--active');

    background.classList.remove('nav-up__background--active');
  })
})

downMenuLinks.forEach(function (downLink) {
  downLink.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    downMenu.classList.remove('nav-down__list--active');

    document.body.classList.remove('stop-scroll');

    menu.classList.remove('nav-up__list--active');
  })
});


// search

let btnSearch = document.querySelector('.nav-up__search');
let btnSearchActive = document.querySelector('.search__btn')
let searchForm = document.querySelector('.nav-up__form')

btnSearch.addEventListener('click',
  function (e) {
    e.preventDefault()
    searchForm.classList.toggle('nav-up__form--active');
  })

btnSearchActive.addEventListener('click',
  function () {
    searchForm.classList.remove('nav-up__form--active');
  });


// modal

let modal = document.querySelector('.cabinet');
let openModal = document.querySelector('.nav-up__entry');
let closeModal = document.querySelector('.cabinet__close');

openModal.addEventListener('click', function () {
  modal.classList.toggle('cabinet--active');
})

closeModal.addEventListener('click', function () {
  modal.classList.remove('cabinet--active');
})

// audio

let playButtons = document.getElementsByClassName('podcasts__play');
let currentAudio = null;

for (let i = 0; i < playButtons.length; i++) {
  playButtons[i].addEventListener('click', createAudioClickListener(playButtons[i]));
}

function createAudioClickListener(button) {
  let audioElement = button.querySelector('.audio');
  let svgElement = button.querySelector('.icon-btn');
  
  return function() {
    if (currentAudio && currentAudio !== audioElement) {
      currentAudio.pause();
      let previousButton = currentAudio.parentNode;
      let previousSvgElement = previousButton.querySelector('.icon-btn');
      previousSvgElement.innerHTML = '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="24" cy="24" r="20" stroke="#A1A6B4" stroke-width="2" />' +
        '<rect x="19" y="15" width="2" height="18" rx="1" fill="#A1A6B4" />' +
        '<rect x="27" y="15" width="2" height="18" rx="1" fill="#A1A6B4" />' +
      '</svg>';
    }

    if (audioElement.paused) {
      if (currentAudio && currentAudio !== audioElement) {
        currentAudio.pause();
        let currentButton = currentAudio.parentNode;
        let currentSvgElement = currentButton.querySelector('.icon-btn');
        currentSvgElement.innerHTML = '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' +
          '<circle cx="24" cy="24" r="20" stroke="#A1A6B4" stroke-width="2" />' +
          '<rect x="19" y="15" width="2" height="18" rx="1" fill="#A1A6B4" />' +
          '<rect x="27" y="15" width="2" height="18" rx="1" fill="#A1A6B4" />' +
        '</svg>';
      }
      
      audioElement.play();
      svgElement.innerHTML = '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="24" cy="24" r="20" stroke="#A1A6B4" stroke-width="2" />' +
        '<rect x="19" y="15" width="2" height="18" rx="1" fill="#A1A6B4" />' +
        '<rect x="27" y="15" width="2" height="18" rx="1" fill="#A1A6B4" />' +
      '</svg>';
    } else {
      audioElement.pause();
      svgElement.innerHTML = '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="24" cy="24" r="20" stroke="#A1A6B4" stroke-width="2" />' +
        '<path d="M21.6924 31.7965L31.5716 24.7996C32.1428 24.3998 32.1428 23.6002 31.5716 23.2004L21.6924 16.2035C20.9943 15.7037 20 16.1835 20 17.0031V30.9969C20 31.8165 20.9943 32.2963 21.6924 31.7965Z" fill="#A1A6B4" />' +
      '</svg>';
    }

    currentAudio = audioElement;
  };
}

// count podcast

let iconElements = document.querySelectorAll('.podcasts__icon');

iconElements.forEach(function(iconElement) {
  iconElement.addEventListener('click', function() {
    increaseCount(this);
  });
});

function increaseCount(clickedIcon) {
  let countElement = clickedIcon.querySelector('.podcasts__count');
  let count = parseInt(countElement.textContent);

  if (clickedIcon.classList.contains('clicked')) {
    count -= 1;
    clickedIcon.classList.remove('clicked');
    countElement.style.color = 'var(--gray-color)';
  } else {
    count += 1;
    clickedIcon.classList.add('clicked');
    countElement.style.color = 'var(--blue-color)';
  }

  countElement.textContent = count.toString();
}

// player header

let btnPlayHeader = document.querySelector('.player__play');
let btnPauseHeader = document.querySelector('.player__pause');

btnPlayHeader.addEventListener('click',
  function () {
    btnPlayHeader.classList.toggle('player__play--def');
    btnPauseHeader.classList.toggle('player__pause--active');
  })

btnPauseHeader.addEventListener('click',
  function () {
    btnPlayHeader.classList.remove('player__play--def');
    btnPauseHeader.classList.remove('player__pause--active');
  });


// player 768
/*
let btnPlaySmallHeader = document.querySelector('.nav-down__small-play');
let btnPauseSmallHeader = document.querySelector('.nav-down__small-pause');

btnPlaySmallHeader.addEventListener('click',
  function () {
    btnPlaySmallHeader.classList.toggle('nav-down__small-play--def');
    btnPauseSmallHeader.classList.toggle('nav-down__small-pause--active');
  })

btnPauseSmallHeader.addEventListener('click',
  function () {
    btnPlaySmallHeader.classList.remove('nav-down__small-play--def');
    btnPauseSmallHeader.classList.remove('nav-down__small-pause--active');
  });
*/

// btn-what-in the-ether

let player = document.querySelector('.player');
let btnPlayerClose = document.querySelector('.nav-down__medium-player');
let navDown = document.querySelector('.nav-down');
let borderHeader = document.querySelector('.border');

btnPlayerClose.addEventListener('click',
  function () {
    player.classList.toggle('display--opacity');
    btnPlayerClose.classList.toggle('nav-down__medium-player--active');
    navDown.classList.toggle('nav-down--active');
    borderHeader.classList.toggle('border--none');
  },

  function () {
    player.classList.remove('display--opacity');
    btnPlayerClose.classList.remove('nav-down__medium--active');
    navDown.classList.remove('nav-down--active');
    borderHeader.classList.remove('border--none');
  });

// btn-podcasts

var btnMore = document.querySelector('.podcasts__btn');
var podcastsItems = document.querySelectorAll('.podcasts__item');

btnMore.addEventListener('click', function () {

  for (let podcasts__item of podcastsItems) {
    podcasts__item.style.display = 'flex';
  }

  btnMore.textContent = 'Закрыть';
});

// select

const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  position: 'bottom',
});

// accordion

const accordion = new Accordion('.accordion-container', {
  duration: 800,
  showMultiple: true,
});

accordion.open(0);


// guests-cards

let btnsBlogger = document.querySelectorAll('.guests__blogger');
let profilesBlogger = document.querySelectorAll('.guests__profile');

const activeLinks = document.querySelectorAll('.ac .ac-panel .ac-text');

activeLinks.forEach(link => {
  link.addEventListener('click', function () {

    activeLinks.forEach(link => link.classList.remove('ac-text--active'));

    this.classList.add('ac-text--active');
  });
});

btnsBlogger.forEach((btn) => {
  btn.addEventListener('click', () => {

    //activeLink.style.setProperty('color', 'white');
    const profileName = btn.getAttribute('data-open');

    profilesBlogger.forEach((profile) => {
      profile.classList.remove('guests__profile--active');
    });

    const openProfile = document.querySelector(`.guests__profile[data-open="${profileName}"]`);
    openProfile.classList.toggle('guests__profile--active');

    let monitorWidthBig = window.matchMedia('(max-width: 991px)');
    let monitorWidthMedium = window.matchMedia('(max-width: 767px)');
    let monitorWidthSmall = window.matchMedia('(max-width: 575px)');
    let monitorMobile = window.matchMedia('(max-width: 449px)');

    if (monitorWidthBig.matches) {
      window.scrollTo({
        top: 4850,
        behavior: 'smooth'
      });
    }

    if (monitorWidthMedium.matches) {
      window.scrollTo({
        top: 3650,
        behavior: 'smooth'
      });
    }

    if (monitorWidthSmall.matches) {
      window.scrollTo({
        top: 3100,
        behavior: 'smooth'
      });
    }

    if (monitorMobile.matches) {
      window.scrollTo({
        top: 3500,
        behavior: 'smooth'
      });
    }
  });

});


// swiper

let swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 28,
  watchSlidesVisibility: true,
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },

  breakpoints: {

    1200: {
      slidesPerView: 4,
      spaceBetween: 28
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 28
    },

    993: {
      slidesPerView: 2,
      spaceBetween: 28
    },

    769: {
      slidesPerView: 2.3,
      spaceBetween: 28
    },

    576: {
      slidesPerView: 'auto',
      spaceBetween: 30
    },

    320: {
      slidesPerView: 'auto',
      spaceBetween: 10
    }

  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


// Validate

const validation = new window.JustValidate('#footer__form', {
  errorLabelStyle: {
    color: "#D52B1E"
  }
});

validation

  .addField('#name', [
    {
      rule: 'required',
      value: 0,
      errorMessage: 'Вы не ввели имя',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Ваше имя слишком короткое',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Ого какое длинное имя, чуть покороче пожалуйста!'
    },
    {
      rule: 'customRegexp',
      value: /^[a-zA-Zа-яА-ЯЁё ]+$/,
      errorMessage: 'Ошибка'
    },
  ])

  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Ошибка',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });

const validationTwo = new window.JustValidate('#cabinet__form', {
  errorLabelStyle: {
    color: "#D52B1E"
  },
});
validationTwo

  .addField('#login', [
    {
      rule: 'required',
      value: 0,
      errorMessage: 'Вы не ввели логин',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Ваш логин слишком короткий',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: 'Ваш логин слишком длинный'
    },
    {
      rule: 'customRegexp',
      value: /[a-z]/gi,
      errorMessage: 'Неверный логин'
    },

  ])

  .addField('#password', [
    {
      rule: 'required',
      value: 0,
      errorMessage: 'Вы не ввели пароль',
    },
    {
      rule: 'password',
    },
  ]);

