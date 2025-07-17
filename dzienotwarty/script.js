// Select all class items
const classItems = document.querySelectorAll('.class-item');

// Function to calculate the distance of an element from the center of the viewport
function getDistanceFromCenter(element) {
    const rect = element.getBoundingClientRect(); // Get the bounding box of the element
    const viewportHeight = window.innerHeight; // Height of the viewport
    const elementCenter = rect.top + rect.height / 2; // Vertical center of the element
    const viewportCenter = viewportHeight / 2; // Vertical center of the viewport

    // Adjust for elements near the bottom of the viewport
    if (rect.bottom <= viewportHeight && rect.top >= 0) {
        return Math.abs(elementCenter - viewportCenter);
    } else if (rect.bottom > viewportHeight) {
        // If the element is partially visible at the bottom, prioritize it
        return Math.abs(rect.top - viewportCenter);
    } else {
        // If the element is above the viewport, calculate distance normally
        return Math.abs(elementCenter - viewportCenter);
    }
}

// Function to scale the closest element to the center
function scaleClosestElement() {
    let closestElement = null;
    let smallestDistance = Infinity;

    // Find the element closest to the center
    classItems.forEach(item => {
        const distance = getDistanceFromCenter(item);
        if (distance < smallestDistance) {
            smallestDistance = distance;
            closestElement = item;
        }
    });

    // Check if the user has scrolled to the bottom of the page
    const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

    // If at the bottom, force the last element to scale
    if (isAtBottom) {
        closestElement = classItems[classItems.length - 1]; // Last element
    }

    // Reset all elements to their default scale
    classItems.forEach(item => {
        item.style.transform = 'scale(1)';
    });

    // Scale up the closest element
    if (closestElement) {
        closestElement.style.transform = 'scale(1.05)';
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', scaleClosestElement);

// Trigger the function on page load to handle initial scaling
window.addEventListener('load', scaleClosestElement);