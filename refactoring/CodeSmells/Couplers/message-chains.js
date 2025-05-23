// NOTE: EXAMPLE GENERATED BY AI

// Before Refactoring: Message Chain Example
class Address {
    constructor(city) {
        this.city = city;
    }

    getCity() {
        return this.city;
    }
}

class Person {
    constructor(address) {
        this.address = address;
    }

    getAddress() {
        return this.address;
    }
}

class Client {
    constructor(person) {
        this.person = person;
    }

    getPerson() {
        return this.person;
    }
}

// Usage
const address = new Address("New York");
const person = new Person(address);
const client = new Client(person);

// Message chain: client -> person -> address -> city
console.log(client.getPerson().getAddress().getCity()); // "New York"

// After Refactoring: Hide Delegate
class Address {
    constructor(city) {
        this.city = city;
    }

    getCity() {
        return this.city;
    }
}

class Person {
    constructor(address) {
        this.address = address;
    }

    getCity() {
        return this.address.getCity(); // Delegate call to Address
    }
}

class Client {
    constructor(person) {
        this.person = person;
    }

    getCity() {
        return this.person.getCity(); // Delegate call to Person
    }
}

// Usage
const refactoredAddress = new Address("New York");
const refactoredPerson = new Person(refactoredAddress);
const refactoredClient = new Client(refactoredPerson);

// No message chain: client -> city
console.log(refactoredClient.getCity()); // "New York"