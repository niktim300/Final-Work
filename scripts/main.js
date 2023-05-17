'use strict';
console.log('problems?');

// To Top Button & main nav menu

const scrollBtn = document.querySelector('.isShowBtn');

window.onscroll = () => {
  if (window.scrollY > 700) {
    scrollBtn.classList.remove('hide');
  } else if (window.scrollY < 700) {
    scrollBtn.classList.add('hide');
  }
};
scrollBtn.onclick = () => {
  window.scrollTo(0, 0);
};

//scroll animation

const animItems = document.querySelectorAll('._anim_items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add('visible');
      } else {
        if (!animItem.classList.contains('_anim_no_hide')) {
          animItem.classList.remove('visible');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}

//alert message
const alertWindow = document.querySelector('.alert');
const xMark = document.querySelector('.btn-close');
const hideAlert = sessionStorage.getItem('hideAlert');
const navMenu = document.querySelector('.navigation_menu_container');

alertWindow.classList.add('active');
xMark.addEventListener('click', () => {
  alertWindow.classList.remove('active');
  navMenu.classList.remove('active');
  sessionStorage.setItem('hideAlert', 'hide');
});

if (hideAlert == 'hide') {
  alertWindow.classList.remove('active');
} else if (hideAlert !== 'hide') {
  navMenu.classList.add('active');
}

navMenu.addEventListener('click', addFullVersion);
function addFullVersion() {
  navMenu.classList.toggle('full');
}

document.addEventListener('click', (e) => {
  const withinBoundaries = e.composedPath().includes(navMenu);

  if (!withinBoundaries) {
    navMenu.classList.remove('full');
  }
});

// burger menu
$(document).ready(function () {
  $('.header_burger, .header_link, .dropdown_item-name').click(function (
    event
  ) {
    $('.header_burger,.header_menu, .header_list').toggleClass('active');
    $('body').toggleClass('lock');
  });

  // dropdown menu
  $('.dropdown_menu_button').click(function (event) {
    $('.dropdown_menu, .header_link1, .triangle').toggleClass('active');
  });
  $('.header_link, .header_link2, .header_link3').click(function (event) {
    $('.dropdown_menu, .header_link1, .triangle').removeClass('active');
  });

  // dropdown menu2
  $('.dropdown_menu_button2').click(function (event) {
    $('.dropdown_menu2, .header_link2, .triangle2').toggleClass('active');
  });
  $('.header_link, .header_link1, .header_link3').click(function (event) {
    $('.dropdown_menu2, .header_link2, .triangle2').removeClass('active');
  });
  // dropdown menu3
  $('.dropdown_menu_button3').click(function (event) {
    $('.dropdown_menu3, .header_link3, .triangle3').toggleClass('active');
  });
  $('.header_link, .header_link1, .header_link2').click(function (event) {
    $('.dropdown_menu3, .header_link3, .triangle3').removeClass('active');
  });
  $(document).on('keyup', function (e) {
    if (e.key == 'Escape') {
      $(
        '.dropdown_menu3, .header_link3, .triangle3, .dropdown_menu, .header_link1, .triangle, .dropdown_menu2, .header_link2, .triangle2'
      ).removeClass('active');
    }
  });
  $(document).mouseup(function (e) {
    var div = $(
      '.dropdown_menu3, .header_link3, .triangle3, .dropdown_menu, .header_link1, .triangle, .dropdown_menu2, .header_link2, .triangle2'
    );
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      div.removeClass('active');
    }
  });

  // theme switcher + saver
  $('.checkbox').click(function (event) {
    $('.checkbox').toggleClass('active');

    if ($('.checkbox').hasClass('active')) {
      $('html').removeClass('dark').addClass('light');
      localStorage.setItem('lightIsactive', 'true');
    } else {
      $('html').removeClass('light').addClass('dark');
      localStorage['lightIsactive'] = 'false';
    }
  });
  const lightIsactive = localStorage.getItem('lightIsactive');
  if (lightIsactive == 'true') {
    $('html').removeClass('dark').addClass('light');
    $('.checkbox').addClass('active');
  } else {
    $('html').removeClass('light').addClass('dark');
    $('.checkbox').remove('active');
  }
});
