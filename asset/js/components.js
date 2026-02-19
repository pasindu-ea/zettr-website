// Component Loader Utility
// Add this script to any page where you want to use header/footer components

function loadComponent(componentId, componentFile) {
  fetch(componentFile)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      const element = document.getElementById(componentId);
      if (element) {
        element.innerHTML = data;
      }
    })
    .catch(error => console.error(`Error loading ${componentFile}:`, error));
}

// Load all components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Load header if container exists
  if (document.getElementById('header-component')) {
    loadComponent('header-component', 'header.html');
  }
  
  // Load footer if container exists
  if (document.getElementById('footer-component')) {
    loadComponent('footer-component', 'footer.html');
  }

  // Add smooth scrolling for anchor links
  setTimeout(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, 100);
});
