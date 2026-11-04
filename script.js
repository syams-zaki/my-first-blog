document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const flashcards = document.querySelectorAll('.flashcard');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 1. Remove active state from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // 2. Add active state to clicked button
      button.classList.add('active');

      // 3. Get selected category
      const selectedCategory = button.getAttribute('data-category');

      // 4. Show/Hide cards matching the category
      flashcards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});