// Create new class for 'Person' object
class Person {
    // Construct person object with parameters 'name', 'age' & 'email'
    constructor(name, age, email) { 
        // They all become attributes
        this.name = name;
        this.age = age;
        this.email = email;
    }

    // Create method getPersonInfo ()
    getPersonInfo() {
        // Returns attributes when called
        return {
            Name: this.name,
            Age: this.age,
            Email: this.email
        }
    }
}

// The whole class is getting exported
module.exports = Person;