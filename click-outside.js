const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  // Grab the image src
  const imgSrc = card.querySelector('img').src;
  // Grab description
  const desc = card.dataset.description;
  // Grab Title
  const name = card.querySelector('h2').textContent;
  // Populate modal with the new info
  modalInner.innerHTML = `
    <img src="${imgSrc.replace('200', '600')}" alt="${name}"/>
    <p>${desc}</p>
  `;
  // Show the modal
  modalOuter.classList.add('open');
}

cardButtons.forEach((button) =>
  button.addEventListener('click', handleButtonClick)
);
