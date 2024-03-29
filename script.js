///////////////////////////////////////
// Lecture: Hoisting



// Functions
// calculateAge(1990);

// function calculateAge(year) {
//     console.log(2019 - year);
// }

// // retirement(1990); //here it doesn't work
// var retirement = function(year) {
//     console.log(65 - (2019-year));
// }
// retirement(1990); // here it works



// Variables
// var age = 23;
// console.log(age);

// function foo() {
//     var age = 65;
//     console.log(age);
// }

// foo();
// console.log(age);



///////////////////////////////////////
// Lecture: Scoping


// First scoping example

// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }




// Example to show the differece between execution stack and scope chain

// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(a + b + c + d);
// }



// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(c);
// }



///////////////////////////////////////
// Lecture: The this keyword


// console.log(this);

// calcAge(1985);

// function calcAge(year) {
//     console.log(2019 - year);
//     console.log(this);
// }


var john = {
    name: 'John',
    yearBirth: 1990,
    calcAge: function() {
        console.log(this);
        console.log(2019 - this.yearBirth);

        // function inner() {
        //     console.log(this);
        // }
        // inner();
    }
}

john.calcAge();

var mike = {
    name: 'Mike',
    yearBirth: 1984,
};

mike.calAge = john.calcAge;
mike.calAge();