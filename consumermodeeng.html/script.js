// Function to add a new category dynamically
document.getElementById('addCategoryButton').addEventListener('click', function() {
    const newCategory = document.getElementById('newCategory').value.trim();

    if (newCategory) {
        const filterContainer = document.querySelector('.filter-options');
        const newFilter = document.createElement('label');
        newFilter.innerHTML = `<input type="checkbox" name="profession" value="${newCategory.toLowerCase()}" class="filter-checkbox"> ${newCategory}`;
        filterContainer.appendChild(newFilter);
        document.getElementById('newCategory').value = ''; // Clear input

        addFilterListeners(); // Re-apply event listeners to new checkboxes
    }
});

// Function to handle card filtering based on selected checkboxes
function filterCards() {
    const selectedFilters = Array.from(document.querySelectorAll('.filter-checkbox:checked')).map(checkbox => checkbox.value);
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const profession = card.getAttribute('data-profession');
        if (selectedFilters.length === 0 || selectedFilters.includes(profession)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Function to add event listeners to all filter checkboxes
function addFilterListeners() {
    const checkboxes = document.querySelectorAll('.filter-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterCards);
    });
}

// Initialize filter listeners on page load
addFilterListeners();
