/*
Q42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.
*/
var magiciansName = ["Atif", "Anmol", "Arsalan", "Ayaan", "Arman"];
function show_magicians1(greet) {
    for (var _i = 0, magiciansName_1 = magiciansName; _i < magiciansName_1.length; _i++) {
        var items = magiciansName_1[_i];
        console.log(greet, items);
    }
}
show_magicians1("Hello, How are you Mr.");
