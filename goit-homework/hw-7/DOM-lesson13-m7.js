// Window - самий головний об'єкт у JavaScript, який представляє вікно браузера
// Він надає доступ до всіх інших об'єктів у браузері, таких як документ, історія, локальне сховище, консоль тощо.

// document - об'єкт, що представляє HTML-документ, завантажений у вікно браузера

// -- Порада --
// для зберігання елементів HTML-документу в змінні краще не робити їх однойменними,
// тобто не nav, а наприклад navEl(element) чи navRef

/*
 * document.querySelector(selector) та document.querySelectorAll(selector)
 *      selector - будь-який валідний CSS-селектор(тег, клас, айді) для вибору елементів
 *
 * Використання:
 *  document.querySelector - для вибору одного елемента
 *            Що повертає? - посилання на об'єкт або null
 *
 *  document.querySelectorAll - для вибору всіх елементів
 *               Що повертає? - NodeList або пустий NodeList - це колекція елементів, яка підлягає ітерації (точніше - їх копія, а не посилання)
 *
 *  Є ще  element.querySelector(selector) та element.querySelectorAll(selector)
 *          element - це посилання на DOM-елемент, в межах якого потрібно виконати пошук
 */

const ulRef = document.querySelector('ul'); // поверне перший знайдений елемент з тегом 'ul'
console.log(ulRef);

const firstUlItem = document.querySelector('ul>li'); // поверне перший знайдений елемент з тегом 'li', дочірній елемент 'ul'
console.log(firstUlItem);
// console.dir(ulRef);

const links = document.querySelectorAll('.link'); // поверне всі елементи з класом 'link' (навіть поза списком)
console.log(links);

// аналог для пошуку в межах конктретного елементу:

const ulLinks = ulRef.querySelectorAll('.link'); // поверне всі елементи з класом 'link', які є дочірніми елементами 'ul'
console.log(ulLinks);

const tasks = document.querySelectorAll('.task'); // поверне пустий NodeList
console.log(tasks);

/* ---------------- Властивості елементів  --------------------------
 *  Все є жс-об'єктом
 *  Більшість атрибутів хтмл-елементів в жс йдуть як властивості елементів - це значення, які можна читати або змінювати за допомогою JS
 *
 *  переважно доступ до них можна отримати через крапку:
 *      imgRef.src, titleRef.textContent тощо.
 *
 *  Для булевих атрибутів (наприклад, disabled, checked, selected, hidden):
 *      - el.disabled = true; // Додати атрибут
 *      - el.disabled = false; // Прибрати атрибут
 *
 *  Для класів можна використати — інтерфейс classList:
 *      - box.classList.add('active');    // Додати
 *      - box.classList.remove('hidden'); // Прибрати
 *      - box.classList.toggle('open');   // Перемкнути (якщо є - прибере, нема - додасть)
 *
 *  Для data-* атрибутів — dataset:
 *      // HTML: <div id="user" data-role="admin" data-user-id="42"></div>
 *      const div = document.querySelector('#user');
 *      console.log(div.dataset.role); // "admin"
 *      console.log(div.dataset.userId); // "42"
 *
 *  є також застарівші методи -- їх варто використовувати у випадку нестандартних тегів доданих до HTML-розмітки:
 *    - obj.getAttribute(attributeName) -> divRef.getAttribute('data-role');
 *    - obj.setAttribute(attributeName)
 *   ці для деяких задач можна:
 *    - obj.removeAttribute(attributeName)
 *    - obj.hasAttribute(attributeName)
 *
 *  Для перемикання атрибуту:
 *     input.toggleAttribute('disabled'); // Сам додасть або прибере атрибут
 *
 *
 *  всі текстові елементи мають властивості: textContent
 *
 */

const propertiesChangeBtn = document.querySelector('.properties-change');

propertiesChangeBtn.addEventListener('click', () => {
  const imgRef = document.querySelector('.properties-learn img');
  console.log(imgRef);
  imgRef.src = './michael-sum-LEpfefQf4rU-unsplash.jpg';
  imgRef.alt = 'A cute cat';
  console.log(imgRef);

  const propertiesLearnBlock = document.querySelector('.properties-learn');

  console.log(propertiesLearnBlock.querySelector('.title').textContent);
  propertiesLearnBlock.querySelector('.title').textContent = 'New title';

  // data - атрибути
  const actions = propertiesLearnBlock.querySelectorAll('.js-actions button');
  console.log(actions);
  console.log(1, actions[0].dataset.action);
  console.log(2, actions[1].dataset.action);
  console.log(actions[1].dataset);

  //input
  const inputRef = propertiesLearnBlock.querySelector('.js-input');
  console.log(inputRef.value);
  inputRef.value = 'New input value';
  console.log(inputRef.value);

  //classList
  const actionsBlock = propertiesLearnBlock.querySelector('.js-actions');
  console.log(actionsBlock.classList); //повертає DOMTokenList - масив всіх класів даного елементу

  console.log(actionsBlock);
  actionsBlock.classList.add('centered');
  actionsBlock.classList.remove('lesson');
  actionsBlock.classList.toggle('disabled');
  console.log(actionsBlock.classList);

  actionsBlock.classList.replace('disabled', 'active');
  actionsBlock.classList.toggle('centered');
  console.log(actionsBlock.classList);

  console.log(
    'Does it contain class active? ',
    actionsBlock.classList.contains('active'),
  );
  console.log(
    'Does it contain class centered? ',
    actionsBlock.classList.contains('centered'),
  );

  //
  const currentPageUrl = './index.html';
  const linkEl = document.querySelector(`.link[href="${currentPageUrl}"]`); // поверне об'єкт - це посилання
  // [href=''] - це селектор атрибута, який шукає елемент з певним значенням атрибута href
  // ` ` - це шаблонний літерал, який дозволяє вбудовувати вирази - це зручно для динамічних значень
  console.log(linkEl);
});

/* ----------------- Властивості навігації по вузлах DOM ----------------------------------*/

// Не завжди потрібно ходити кожен раз по всьому дереву документу через querySelector
// інколи, якщо вже є посилання на елемент, доцільно використовувати властивості навігації по вузлах

const nodesNavigationBtn = document.querySelector('.nodes-navigation');

nodesNavigationBtn.addEventListener('click', () => {
  const listRef = document.querySelector('ul');
  console.log(listRef);
  console.log(listRef.firstChild); // Повертає перший дочірній вузол (будь-який тип - текстовий, елемент тощо)
  // тобто відступ в нтмл розмітці є першим дочірнім вузлом
  console.log(listRef.firstElementChild); // Повертає перший дочірній елемент (тільки елемент, без текстових вузлів)

  console.log(listRef.lastChild);
  console.log(listRef.lastElementChild);

  console.log(listRef.children); // Повертає HTMLCollection всіх дочірніх елементів

  const firstItemRef = listRef.firstElementChild;
  console.log(firstItemRef.parentElement); // Повертає батьківський елемент
});

/* ------------------ Створення та додавання елементів ---------------------- */

const createElementBtn = document.querySelector('.creating-elements');

createElementBtn.addEventListener('click', () => {
  // Створення нового абзацу
  const paragraph = document.createElement('p');
  paragraph.textContent = 'New Paragraph';
  paragraph.classList.add('accent-text');
  paragraph.style.color = 'orange';

  // Створення нового зображення
  const imageEl = document.createElement('img');
  imageEl.src = './dezzubik.jpeg';
  imageEl.alt = 'Беззубік';
  imageEl.height = 200;
  imageEl.width = 150;

  //Додавання тексту та зображення
  document.body.appendChild(paragraph);
  document.body.appendChild(imageEl);

  //або можна кілька одразу:
  document.body.append(paragraph, imageEl);

  // Створення нового елементу списку
  const newListItem = document.createElement('li');
  newListItem.classList.add('new-link');

  const newListItemLink = document.createElement('a');
  newListItemLink.href = '#';
  newListItemLink.textContent = 'New Task';
  newListItemLink.classList.add('link');

  newListItem.appendChild(newListItemLink);
  console.log(newListItem);

  //ulRef.appendChild(newListItem);         // додає в кінець списку
  //ulRef.insertBefore(newListItem, ulRef.children[3]);      // додає перед вказаним елементом
  ulRef.insertBefore(newListItem, ulRef.firstElementChild);

  // ---------- створення та додаванння колекції елементів ---------
  const colorPickerOptions = [
    { label: 'Red', value: '#ff0000' },
    { label: 'Green', value: '#00ff00' },
    { label: 'Blue', value: '#0000ff' },
    { label: 'Yellow', value: '#ffff00' },
    { label: 'Purple', value: '#800080' },
    { label: 'Pink', value: '#ffc0cb' },
  ];

  const colorPickerContainerEl = document.querySelector('.js-color-picker');

  // старий підхід - багаторазове додавання в DOM - НЕ ЕФЕКТИВНО
  //   colorPickerOptions.forEach(option => {
  //     const colorOption = document.createElement('button');
  //     colorOption.style.backgroundColor = option.value;
  //     colorOption.textContent = option.label;
  //     colorOption.classList.add('color-picker-option');
  //     colorPickerContainerEl.appendChild(colorOption);

  // map ПОВЕРТАЄ новий масив кнопок: [button, button, button...]
  const elements = colorPickerOptions.map(option => {
    const colorOption = document.createElement('button');
    colorOption.style.backgroundColor = option.value;
    colorOption.textContent = option.label;
    colorOption.classList.add('color-picker-option');
    return colorOption;
  });

  console.log(elements);

  // Ми робимо вставку в DOM лише ОДИН РАЗ
  colorPickerContainerEl.append(...elements);
});
