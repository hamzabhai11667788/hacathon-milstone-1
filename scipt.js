// Toggle the visibility of a section
function toggleSectionVisibility(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.classList.toggle('hidden');
    }
}
// Add event listeners to all toggle buttons
document.addEventListener("DOMContentLoaded", function () {
    var toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(function (button) {
        var sectionId = button.getAttribute('data-section');
        if (sectionId) {
            button.addEventListener('click', function () { return toggleSectionVisibility(sectionId); });
        }
    });
});
