'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteAll = document.querySelector('.delete-all');
  deleteAll.addEventListener('click', handleDeleteAll);

});

const handleFormSubmit = function (event) {
  event.preventDefault();
  const newChild = createNewItem(event.target);
  const listOfChildren = document.querySelector('ul');
  listOfChildren.appendChild(newChild);
  event.target.reset();
};

const createNewItem = function (form) {
  const newChild = document.createElement('li');
  newChild.classList.add('list-item');
  const childName = document.createElement('h3');
  childName.textContent = `${form.name.value} (age: ${form.age.value})`;
  newChild.appendChild(childName);

  const childDetails = document.createElement('h4');
  childDetails.textContent = `was dressed as ${form.costume.value}`;
  newChild.appendChild(childDetails);

  const childCollected = document.createElement('h5');
  childCollected.textContent = `and collected ${form.amount.value} ${form.sweets.value}`;
  newChild.appendChild(childCollected);
  return newChild;
};

const deleteButton = document.createElement('button');
deleteButton.classList.add('delete-all');
deleteButton.textContent = 'delete all';
const formDelete = document.querySelector('h2');
formDelete.appendChild(deleteButton);

const handleDeleteAll = function (event) {
  const deleteForm = document.querySelector('ul');
  deleteForm.textContent = '';
};

// const radio = document.createElement('input');
// radio.setAttribute('type', 'radio');
// const radioButton = document.querySelector('#age');
// radioButton.appendChild(radio);
