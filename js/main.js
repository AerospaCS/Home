// Toggle dropdown menus in sidebar navigation
function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    const allDropdowns = document.querySelectorAll('.dropdown-content');
    const clickedNavItem = dropdown.previousElementSibling;
    const allNavItems = document.querySelectorAll('.nav-item');
    
    // Close all other dropdowns and remove active class
    allDropdowns.forEach(dd => {
        if (dd !== dropdown) {
            dd.classList.remove('show');
        }
    });
    
    // Remove active class from all nav items
    allNavItems.forEach(item => {
        if (item !== clickedNavItem) {
            item.classList.remove('active');
        }
    });
    
    // Toggle current dropdown
    dropdown.classList.toggle('show');
    
    // Toggle active class on current nav item (this rotates the arrow via CSS)
    clickedNavItem.classList.toggle('active');
}

// Initialize page on load
document.addEventListener('DOMContentLoaded', function() {
    // Find active nav items and expand their dropdowns
    const activeNavItem = document.querySelector('.nav-item.active');
    if (activeNavItem) {
        const dropdown = activeNavItem.nextElementSibling;
        if (dropdown && dropdown.classList.contains('dropdown-content')) {
            dropdown.classList.add('show');
        }
    }
});