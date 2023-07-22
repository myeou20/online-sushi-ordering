// menu.js
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('selected'); // Toggle the 'selected' class on click

    // Change "Add" to "Remove" text when item is selected
    const addRemoveText = item.classList.contains('selected') ? 'Remove' : 'Add';
    item.querySelector('.add-remove-text').textContent = addRemoveText;
  });
});
