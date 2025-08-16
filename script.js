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
