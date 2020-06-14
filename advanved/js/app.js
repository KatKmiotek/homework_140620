document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteAll = document.querySelector('.delete-all');
  deleteAll.addEventListener('click', handleDeleteAll);
});

const setTittle = document.querySelector('title');
setTittle.textContent = 'Halloween';

const create = document.querySelector('body');

const createHOne = document.createElement('h1');
create.appendChild(createHOne);
createHOne.textContent = 'Last Year Halloween Summary';

const mainForm = document.createElement('form');
mainForm.classList.add('form');
create.appendChild(mainForm);

const createLabel = document.querySelector('.form');
const nameLabel = document.createElement('label');
createLabel.appendChild(nameLabel);
nameLabel.classList.add('name');
nameLabel.textContent = 'Name';

const ageLabel = document.createElement('label');
createLabel.appendChild(ageLabel);
ageLabel.classList.add('age');
ageLabel.textContent = 'Age';

const createNameInput = document.querySelector('.name');
const nameInput = document.createElement('input');
createNameInput.appendChild(nameInput);
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('name', 'name');

const createAgeInput = document.querySelector('.age');
const ageInput = document.createElement('input');
createAgeInput.appendChild(ageInput);
ageInput.setAttribute('type', 'text');
ageInput.setAttribute('name', 'age');

const costumeLabel = document.createElement('label');
createLabel.appendChild(costumeLabel);
costumeLabel.classList.add('costume');
costumeLabel.textContent = 'Costume';

const createCostumeSelect = document.querySelector('.costume');
const costumeSelect = document.createElement('select');
createCostumeSelect.appendChild(costumeSelect);
costumeSelect.setAttribute('name', 'costume');

const creteCostumeOption = document.querySelector('select');
const costumeOne = document.createElement('option');
creteCostumeOption.appendChild(costumeOne);
costumeOne.textContent = 'select';
costumeOne.setAttribute('value', '');

const costumeTree = document.createElement('option');
creteCostumeOption.appendChild(costumeTree);
costumeTree.textContent = 'pumpkin';
costumeTree.setAttribute('value', 'pumpkin');
costumeTree.setAttribute('name', 'pumpkin');

const costumeFour = document.createElement('option');
creteCostumeOption.appendChild(costumeFour);
costumeFour.textContent = 'ghost';
costumeFour.setAttribute('value', 'ghost');
costumeFour.setAttribute('name', 'ghost');

const costumeFive = document.createElement('option');
creteCostumeOption.appendChild(costumeFive);
costumeFive.textContent = 'zombie';
costumeFive.setAttribute('value', 'zombie');
costumeFive.setAttribute('name', 'zombie');

const inputSubmit = document.createElement('input');
mainForm.appendChild(inputSubmit);
inputSubmit.setAttribute('value', 'save');
inputSubmit.setAttribute('type', 'submit');

const createList = document.createElement('ul');
create.appendChild(createList);
createList.textContent = 'Results';

const handleFormSubmit = function (event) {
  event.preventDefault();

  const newChild = createNewItem(event.target);
  const listOfChildren = document.querySelector('ul');
  listOfChildren.appendChild(newChild);
  event.target.reset();
};

const createNewItem = function (form) {
  const newChild = document.createElement('li');
  const childDetails = document.createElement('h3');
  childDetails.textContent = `${form.name.value} (${form.age.value} years old)`;
  newChild.appendChild(childDetails);

  const childCostume = document.createElement('h4');
  childCostume.textContent = ` was dressed as a ${form.costume.value}`;
  newChild.appendChild(childCostume);

  return newChild;
};

const deleteButton = document.createElement('button');
deleteButton.classList.add('delete-all');
deleteButton.textContent = 'delete all';
const formDelete = document.querySelector('ul');
formDelete.appendChild(deleteButton);

const handleDeleteAll = function (event) {
  const deleteForm = document.querySelector('li');
  deleteForm.textContent = '';

};
