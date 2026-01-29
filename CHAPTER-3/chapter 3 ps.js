let marks = {
    shivam: 90,
    aryan: 91,
    priyanshu: 92,
    sawood: 95,
};

for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}
