'use strict';

/**
 * Метод устанавливает необходимые по условию атрибуты таблице
 * @param {Element} table
 */
 const tableItem = document.querySelector('.chatUsers')

function highlight(table) {
  for (let index = 1; index < table.rows.length; index++) {
    const element = table.rows[index];
  console.log('element: ', element)
    for (let index = 0; index < element.cells.length; index++) {
      const item = element.cells[index];
      if(index === 3) {
        if(item.dataset.role) {
          item.dataset.role === 'regular' ? element.classList.add('regular') : element.classList.add('admin');
        }
        else {
          element.hidden = true;
        }
      } if (index === 2) {
        console.log("item: ", item.innerHTML);
        item.innerHTML === 'm' ? element.classList.add('male') : element.classList.add('female')
      } if (index === 1) {
        item.innerHTML < 18 && element.setAttribute('style', 'text-decoration: line-through')
      }

    }
  }
}

highlight(tableItem);