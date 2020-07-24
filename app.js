function isRequired() {
    throw new Error();
}

function name(name = isRequired()) {
    console.log(name);
}

name();