const menuBtn = document.querySelector('.btnMenu');
const closeBtn = document.querySelector('.closeMenu');
const rightSide = document.querySelector('.right_div');

function displayMenu() {
  rightSide.style.top = '0';
}

menuBtn.addEventListener('click', displayMenu);

function closeMenu() {
  rightSide.style.top = '-100%';
}

closeBtn.addEventListener('click', closeMenu);

const featureArr = [
  {
    name: 'yohai benkler',
    profession: 'Professor at Harvard Law School',
    discussion: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.',
    image: './Images/speaker8.jpg',
  },

  {
    name: 'Jeon Gil-nam',
    profession: 'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
    discussion: "By developing Asia's first Internet protocol network SDN and leading Korea's first private line Internet connection in 1990, it ushered in the era of the Internet in earnest.",
    image: './Images/speaker7.jpg',
  },

  {
    name: 'Noh So-young',
    profession: 'Representative of Young Pirates of Europe',
    discussion: "European integration and online youth participation in politics and democracy are major concerns, and a report has been published that will potentially affect the revision of the EU's.",
    image: './Images/speaker5.jpg',
  },

  {
    name: 'Julia Leda',
    profession: 'Art Center Nabi Director, CC Korea Director',
    discussion: "As the author of <Digital Art Art of Our Time>, he opened 'Art Center Nabi', Korea's first digital art institution in 2000, and is currently serving.",
    image: './Images/speaker6.jpg',
  },

  {
    name: 'Layla Tretikov',
    profession: 'Secretary General of the Wikimedia Foundation',
    discussion: "Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​every month to over 100 million people, nearly half of the world's population.",
    image: './Images/speaker3.jpg',
  },

  {
    name: 'Ryan Merkley',
    profession: 'Creative Commons CEO, Former Mozilla Foundation COO',
    discussion: 'He led open source projects at the Mozilla Foundation, and joined CC as CEO in 2014. He has been active in open movements such as open government and open source.',
    image: './Images/speaker1.jpg',
  },
];

const divFeatured = document.querySelector('.flex_professional');

function displayFeatures() {
  divFeatured.innerHTML = featureArr.map(
    (arrObject) => `
        <div class="div_featured">
          <div class="flex_features">
               <img src="${arrObject.image}" alt="${arrObject.name}">
          </div>
          <div class="flex_personnality">
             <h3>${arrObject.name}</h3>
              <span>${arrObject.profession}</span>
              <p>${arrObject.discussion}</p>
          </div>
        </div>  
  `,
  ).join('');
}

displayFeatures();
