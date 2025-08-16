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
