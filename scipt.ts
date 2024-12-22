// Toggle the visibility of a section
function toggleSectionVisibility(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.classList.toggle('hidden');
    }
  }
  
  // Add event listeners to all toggle buttons
  document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach((button) => {
      const sectionId = button.getAttribute('data-section');
      if (sectionId) {
        button.addEventListener('click', () => toggleSectionVisibility(sectionId));
      }
    });
  });
  