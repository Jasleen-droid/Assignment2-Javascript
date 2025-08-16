// Smoothie Class Definition

class Smoothie {
    // Constructor initializes a new Smoothie object with given properties
    constructor(size, base, fruits, extras) {
        this.size = size;       
        this.base = base;        
        this.fruits = fruits;     
        this.extras = extras;     
        this.price = this.calculatePrice(); 
    }
// Method: Calculate Price
 
    calculatePrice() {
        let basePrice = 0;

        // Determine base price according to size
        if (this.size === "small") basePrice = 3;
        if (this.size === "medium") basePrice = 5;
        if (this.size === "large") basePrice = 7;
        
        // Add $1 for each extra ingredient selected
        basePrice += this.extras.length * 1;

        return basePrice; // Return the total price
    }
// Method: Create Description
 
    getDescription() {
        // Returns a formatted HTML string showing the smoothie order
        return `
            <h2>✅ Your Smoothie Order</h2>
            <p><strong>Size:</strong> ${this.size}</p>
            <p><strong>Base:</strong> ${this.base}</p>
            <p><strong>Fruits:</strong> ${this.fruits.length > 0 ? this.fruits.join(", ") : "None"}</p>
            <p><strong>Extras:</strong> ${this.extras.length > 0 ? this.extras.join(", ") : "None"}</p>
            <p><strong>Total Price:</strong> $${this.price.toFixed(2)}</p>
        `;
    }
}
// Form Submission Handling


// Listen for the form submission event
document.getElementById("smoothieForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Step 1: Get the selected size and base from the dropdowns
    let size = document.getElementById("size").value;
    let base = document.getElementById("base").value;

    // Step 2: Get all selected fruits as an array
    let fruits = Array.from(document.querySelectorAll("input[name='fruit']:checked"))
                      .map(fruit => fruit.value);

    // Step 3: Get all selected extras as an array
    let extras = Array.from(document.querySelectorAll("input[name='extra']:checked"))
                      .map(extra => extra.value);

    // Step 4: Create a new Smoothie object with the selected options
    let mySmoothie = new Smoothie(size, base, fruits, extras);

    // Step 5: Display the smoothie order summary in the HTML page
    document.getElementById("orderSummary").innerHTML = mySmoothie.getDescription();
});
