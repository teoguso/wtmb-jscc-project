// var armagan = {
//     name: 'Armagan',
//     age: 35,
//     greet(person) {
//         console.log("Hello " + person.name + ", my name is " + this.name + ".")
//     }
// }

// var mert = {
//     name: 'Mert',
//     age: 34
// }

// class Person {

// }

Person = class {
    constructor(name, age) {
        console.log('Hi, I am created, my name is ', name)
        this.name = name
        this.age = age
        this.meetups = []
    }

    greet(person) {
        console.log("Hello " + person.name + ", my name is " + this.name + ".")
    }

    attend(meetup) {
        this.meetups.push(meetup)
        meetup.addAttendee(this)
    }
}

armagan = new Person('Armagan', 35)
mert = new Person('Mert', 34)

// console.log(armagan, mert)
armagan.greet(mert)
mert.greet(armagan)

Meetup = class {
    constructor(name) {
        this.name = name
        this.attendees = []
    }
    
    addAttendee(attendee) {
        this.attendees.push(attendee)
        console.log("New attendee at " + wtmb.name + ": " + attendee.name)
    }

    printAttendeeNames() {
        console.log('List of attendees:')
        this.attendees.forEach(printName)
    }
}

printName = person => console.log(person.name, person.age)

wtmb = new Meetup('Women Techmakers Berlin')

armagan.attend(wtmb)
mert.attend(wtmb)

mihri = new Person("Mihri", 23)
mihri.attend(wtmb)
armagan.attend(wtmb)

wtmb.printAttendeeNames()