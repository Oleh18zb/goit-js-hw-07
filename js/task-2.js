

const images = [
      {
        url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
        alt: "White and Black Long Fur Cat",
      },
      {
        url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
        alt: "Orange and White Koi Fish Near Yellow Koi Fish",
      },
      {
        url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
      },
      {
        url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
        alt: "Alpine Spring Meadows",
      },
      {
        url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
        alt: "Nature Landscape",
      },
      {
        url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
        alt: "Lighthouse Coast Sea",
      },
    ];
    
    const galleryList = document.querySelector('.gallery');

    const galleryItemsMarkup = images
    .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`)
    .join('');

    galleryList.insertAdjacentHTML('beforeend', galleryItemsMarkup);


    // Створити розмітку на основі масива даних, де у кожного елемента списку
// буде вказано ім'я, кількість лайків і перелічені теги
// в index.html додайте список ul.stats, в який буде рендеритись цей список
const tweets = [
  { id: "000", name: "Alex", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", name: "Oleh", likes: 2, tags: ["html", "css"] },
  { id: "002", name: "Ihor", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", name: "Borys", likes: 8, tags: ["css", "react"] },
  { id: "004", name: "Jhon", likes: 0, tags: ["js", "nodejs", "react"] },
];

const statsList = document.querySelector('.stats');

const statsListAdd = tweets
.map(({name, likes, tags}) => `<li><p>name: ${name}</p><p>likes: ${likes}</p><p>tags: ${tags.join(', ')}</p></li>`)
.join('');

statsList.insertAdjacentHTML("beforeend", statsListAdd);
console.log(statsListAdd);
