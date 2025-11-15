const aboutPage = document.querySelectorAll('.about-page');
const titles = document.querySelectorAll('.title');
const animationBoxes = document.querySelector('.animation-boxes');
const boxes = document.querySelectorAll('.box');
const facts = document.querySelectorAll('.fact');
const continents = document.querySelectorAll('.continent');
const sightsImages = document.querySelectorAll('.sights-image');
const sightsHeaders = document.querySelectorAll('.sights-header');
const tours = document.querySelectorAll('.tour');
const scrollUp = document.querySelector('.scroll-up');
const scrollDown = document.querySelector('.scroll-down');

const forAnimation = [aboutPage, titles, boxes, facts, continents, sightsImages, sightsHeaders, tours];
const optionsObserver = { threshold: [0.5] };
const allContinents = new Array();

for (let i = 0; i < continents.length; i++) {
  allContinents.push(continents[i]);
}

const allImagesSights = [
  ['url("images/sights/img-1-1.jpg")', 'url("images/sights/img-1-2.jpg")', 'url("images/sights/img-1-3.jpg")',
    'url("images/sights/img-1-4.jpg")', 'url("images/sights/img-1-5.jpg")'],
  ['url("images/sights/img-2-1.jpg")', 'url("images/sights/img-2-2.jpg")', 'url("images/sights/img-2-3.jpg")',
    'url("images/sights/img-2-4.jpg")', 'url("images/sights/img-2-5.jpg")'],
  ['url("images/sights/img-3-1.jpg")', 'url("images/sights/img-3-2.jpg")', 'url("images/sights/img-3-3.jpg")',
    'url("images/sights/img-3-4.jpg")', 'url("images/sights/img-3-5.jpg")'],
  ['url("images/sights/img-4-1.jpg")', 'url("images/sights/img-4-2.jpg")', 'url("images/sights/img-4-3.jpg")',
    'url("images/sights/img-4-4.jpg")', 'url("images/sights/img-4-5.jpg")'],
  ['url("images/sights/img-5-1.jpg")', 'url("images/sights/img-5-2.jpg")', 'url("images/sights/img-5-3.jpg")',
    'url("images/sights/img-5-4.jpg")', 'url("images/sights/img-5-5.jpg")'],
  ['url("images/sights/img-6-1.jpg")', 'url("images/sights/img-6-2.jpg")', 'url("images/sights/img-6-3.jpg")',
    'url("images/sights/img-6-4.jpg")', 'url("images/sights/img-6-5.jpg")']
]

const allNamesSights = [
  ['Ниагарский водопад (США, Канада)', 'Капитолий штата Вашингтон (США)', 'Большой каньон (США)',
    'Центральный парк штата Нью-Йорк (США)', 'Статуя Свободы (США)'],
  ['Тропические леса Амазонии', 'город Рио-де-Жанейро (Бразилия)', 'Галапагосские острова (Эквадор)',
    'Национальный парк Лос-Гласьярес (Аргентина)', 'болота Пантанал (Бразилия)'],
  ['Пирамиды Гизы (Египет)', 'Мыс Доброй Надежды (ЮАР)', 'Мечеть Хасана II (Марокко)',
    'Долина Царей (Египет)', 'Набережная Виктории и Альфреда (ЮАР)'],
  ['Эйфелева башня (Франция)', 'храм Парфенон (Греция)', 'Лувр (Франция)',
    'Пизанская башня (Италия)', 'Голубая мечеть (Турция)'],
  ['Тхат-Луанг (Лаос)', 'Мечеть Путра (Малайзия)', 'Замок Химэдзи (Япония)',
    'Ангкор-Ват (Камбоджа)', 'Красный форт (Индия)'],
  ['Сиднейский оперный театр (Австралия)', 'Остров Тасмания (Австралия)', 'Озеро Хиллиер (Австралия)',
    'Великая океанская дорога (Австралия)', 'Голубые горы (Австралия)']
]

const enableAnimation = (element, animationDirection) => {
  if (element.target.classList.contains(`${animationDirection}-off`)) {
    element.target.classList.remove(`${animationDirection}-off`);
    element.target.classList.add(`${animationDirection}-on`)
  }
}

// const disableAnimation = (element, animationDirection) => {
//   if (element.target.classList.contains(`${animationDirection}-on`)) {
//     element.target.classList.remove(`${animationDirection}-on`);
//     element.target.classList.add(`${animationDirection}-off`)
//   }
// }

const callbackObserver = entries => {
  entries.forEach((entry => {
    if (entry.isIntersecting) {
      enableAnimation(entry, 'animation-left');
      enableAnimation(entry, 'animation-center');
      enableAnimation(entry, 'animation-right');
      enableAnimation(entry, 'animation-top');
      enableAnimation(entry, 'animation-bottom');
    }

    else {
      disableAnimation(entry, 'animation-left');
      disableAnimation(entry, 'animation-center');
      disableAnimation(entry, 'animation-right');
      disableAnimation(entry, 'animation-top');
      disableAnimation(entry, 'animation-bottom');
    }

  }))
};

const observer = new IntersectionObserver(callbackObserver, optionsObserver);

const scrollingAnimation = items => {
  items.forEach(object => {
    for (let item of object) {
      observer.observe(item);
    }
  })
}

const showOnHover = (object, i) => {
  object.two.childNodes[i].addEventListener('mouseover', () => {
    for (let i = 1; i <= object.three.childNodes.length - 1; i++) {
      if (i % 2 == 0) continue
      object.three.childNodes[i].style.display = 'none';
    }

    object.one.childNodes[1].style.backgroundImage = `url('images/wonders-of-the-world/img-${i + 2}.jpg')`;
    object.one.childNodes[1].style.transition = 'background-image .5s ease-in-out';
    object.three.childNodes[i + 2].style.display = 'block';
  });
}

const hideOnHover = (object, i) => {
  object.two.childNodes[i].addEventListener('mouseout', () => {
    for (let i = 1; i <= object.three.childNodes.length - 1; i++) {
      if (i % 2 == 0) continue
      object.three.childNodes[i].style.display = 'none';
    }

    object.one.childNodes[1].style.backgroundImage = `url('images/wonders-of-the-world/img-1.jpg')`;
    object.three.childNodes[1].style.display = 'block';
  });
}

const changeOnHover = items => {
  const children = {
    one: items[0],
    two: items[1],
    three: items[2]
  }

  for (let i = 1; i < children.two.childNodes.length - 1; i++) {
    if (i % 2 == 0) continue
    let index = i;

    showOnHover(children, index);
    hideOnHover(children, index);
  }
}

const changeSights = (array, index, images, headers) => {
  array[index].addEventListener('click', () => {
    switch (sightsImages[0].style.backgroundImage) {
      case images[0]:
        sightsImages[0].style.backgroundImage = images[1];
        sightsHeaders[0].childNodes[1].textContent = headers[1];
        break;
      case images[1]:
        sightsImages[0].style.backgroundImage = images[2];
        sightsHeaders[0].childNodes[1].textContent = headers[2];
        break;
      case images[2]:
        sightsImages[0].style.backgroundImage = images[3];
        sightsHeaders[0].childNodes[1].textContent = headers[3];
        break;
      case images[3]:
        sightsImages[0].style.backgroundImage = images[4];
        sightsHeaders[0].childNodes[1].textContent = headers[4];
        break;
      default:
        sightsImages[0].style.backgroundImage = images[0];
        sightsHeaders[0].childNodes[1].textContent = headers[0];
        break;
    }
  })
}

const scrollPage = () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 1000) {
      scrollUp.style.display = 'flex';
      scrollDown.style.display = 'flex';
    } else {
      scrollUp.style.display = 'none';
      scrollDown.style.display = 'none';
    };
  });

  scrollUp.onclick = () => {
    window.scrollTo({
      top: 0,
      left: 0
    });
  }

  scrollDown.onclick = () => {
    window.scrollTo(0, document.body.scrollHeight);
  }
}

scrollingAnimation(forAnimation);
changeOnHover(boxes);

for (let i = 0; i < allContinents.length; i++) {
  changeSights(allContinents, i, allImagesSights[i], allNamesSights[i]);
}

scrollPage();