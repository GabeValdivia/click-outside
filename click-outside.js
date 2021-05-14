const cardButtons = document.querySelectorAll('.card button');

function handleButtonClick() {
  console.log('You clicked a button!');
}

cardButtons.forEach((button) =>
  button.addEventListener('click', handleButtonClick)
);
