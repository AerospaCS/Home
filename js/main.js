function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    const navItem = dropdown.previousElementSibling;
    
    // Close all other dropdowns
    const allDropdowns = document.querySelectorAll('.dropdown-content');
    const allNavItems = document.querySelectorAll('.nav-item');
    
    allDropdowns.forEach(dd => {
        if (dd.id !== id) {
            dd.classList.remove('show');
        }
    });
    
    allNavItems.forEach(item => {
        if (item !== navItem) {
            item.classList.remove('active');
        }
    });
    
    // Toggle current dropdown
    dropdown.classList.toggle('show');
    navItem.classList.toggle('active');
}