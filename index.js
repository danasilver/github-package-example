function helloWorld() {
    console.log("Hello, World!");
}

function helloWorldWithName(name) {
    console.log(`Hello, ${name}!`);
}

module.exports = {
    helloWorld: helloWorld,
    helloWorldWithName: helloWorldWithName
};
