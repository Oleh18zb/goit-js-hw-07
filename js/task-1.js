


// const categoriesList = document.querySelectorAll("#categories .item");
//     console.log(`Number of categories: ${categoriesList.length}`);
//     categoriesList.forEach(category => {
//       const categoryTitle = category.querySelector("h2").textContent;
//       const itemsCount = category.querySelectorAll("ul li").length;
//       console.log(`Category: ${categoryTitle}`);
//       console.log(`Elements: ${itemsCount}`);
//     });

    /*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/


const items = document.querySelectorAll('.listItem');
const btn = document.querySelector('#double');
btn.addEventListener('click', doubleItems);
function doubleItems() {
  items.forEach(item => {
    // console.log(item);
    item.textContent *= 2;
    
  })
}