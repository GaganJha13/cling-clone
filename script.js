// Get a reference to the checkbox element
const checkbox = document.querySelector('.l');

// Get references to the text elements you want to change the color of
const textElements = document.querySelectorAll('.text-to-change-color'); // Adjust the selector as needed

// Add an event listener for changes to the checkbox
checkbox.addEventListener('change', function () {
    // Check if the checkbox is checked
    if (checkbox.checked) {
        // Change the background color to black
        document.body.style.backgroundColor = 'black';

        // Change the text color to white for all selected elements
        textElements.forEach(function (element) {
            element.style.color = 'white';
        });
    } else {
        // Change the background color back to its original color (e.g., white)
        document.body.style.backgroundColor = 'white';

        // Change the text color back to its original color for all selected elements
        textElements.forEach(function (element) {
            element.style.color = ''; // Reset to the default text color
        });
    }
});
