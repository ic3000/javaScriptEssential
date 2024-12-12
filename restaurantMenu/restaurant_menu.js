const breakfastMenu = ['Pancakes - $5', 'Eggs Benedict - $4', 'Oatmeal - $4', 'Frittata - $3'];
const mainCourseMenu = ['Steak - $5', 'Pasta - $6', 'Burger - $4', 'Salmon - $7'];
const dessertMenu = ['Cake - $5', 'Ice Cream - $2', 'Pudding - $2', 'Fruit Salad - $4'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;