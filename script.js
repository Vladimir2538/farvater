let plus = document.querySelector('.plus');
let addButton = document.querySelector('.add');
addButton.addEventListener('click', () => {
    let newElement = document.createElement('div');
    newElement.innerHTML = option.innerHTML;
    newElement.classList.add('function');
    newElement.draggable = 'true';
    frame.append(newElement);

    let deleteButton = newElement.querySelector('.frameDelete');
    deleteButton.addEventListener('click', () => {
        removeElements(newElement);
    });
});
addButton.addEventListener('mouseover', () => {
    addButton.style.backgroundColor = '#9953F1';
    plus.style.backgroundColor = '#AA68FE';
});

addButton.addEventListener('mouseout', () => {
    addButton.style.backgroundColor = '#833AE0';
    plus.style.backgroundColor = '#9953F1';
});
let option = document.querySelector('.function');
let deleteButton = document.querySelector('.frameDelete');
function removeElements(element) {
    let optionElements = document.querySelectorAll('.function');
    if (optionElements.length !== 0) {
        element.remove();
    }
}
deleteButton.addEventListener('click', () => {
    document.getElementById('find').value = '';

});
let sortDown = document.querySelector('.down');
let sortUp = document.querySelector('.up');
let inputData = document.querySelector('.inputText');
sortDown.addEventListener('click', () => {
    if(sortDown.style.display = 'block') {
        sortDown.style.display = 'none';
        sortUp.style.display = 'block';
    }
    let array = [];
    let values = document.querySelectorAll('.inputText');
  
    for ( let i = 0; i < values.length; i++){
        array.push(values[i].value);
    }
    array.sort((a, b) => {
      if (a < b) {
          return -1;
      }
      if (a > b) {
          return 1;
      }
      return 0;
  });
    for (let j = 0; j < array.length; j++) {
        values[j].value = array[j];
    }
  });
  sortUp.addEventListener('click', () => {
    if (sortUp.style.display = 'block') {
        sortUp.style.display = 'none';
        sortDown.style.display = 'block';
    }
    let array = [];
    let values = document.querySelectorAll('.inputText');
  
    for ( let i = 0; i < values.length; i++){
        array.push(values[i].value);
    }
    array.sort((a, b) => {
      if (a < b) {
          return 1;
      }
      if (a > b) {
          return -1;
      }
      return 0;
  });
    for (let j = 0; j < array.length; j++) {
        values[j].value = array[j];
    }
  });


let frame = document.querySelector('.frame');
frame.addEventListener('dragstart', (event) => {
    event.target.style.backgroundColor = '#FFDC40';
    event.target.classList.add('selected');
});
frame.addEventListener('drag', (event) => {
    event.target.style.backgroundColor = '#E4E4E4';
});
frame.addEventListener('dragend', (event) => {
    event.target.style.backgroundColor = 'white';
    event.target.classList.remove('selected');
});

frame.addEventListener('dragover', (event) => {
    event.preventDefault();

    let element = frame.querySelector('.selected');
    let currentElement = event.target;

    let move = element !== currentElement &&
    currentElement.classList.contains('function');

    if (!move) {
        return;
    }

    let nextElement;
    if (currentElement === element.nextElementSibling) {
        nextElement = currentElement.nextElementSibling;
    } else {
        nextElement = currentElement;
    }
    frame.insertBefore(element, nextElement);
});