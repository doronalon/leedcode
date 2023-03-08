function log(target, name, descriptor) {
    const original = descriptor.value;
    if (typeof original === 'function') {
        descriptor.value = function(...args) {
            console.log(`Arguments: ${args}`);
            try {
                const result = original.apply(this, args);
                console.log(`Result: ${result}`);
                return result;
            } catch (e) {
                console.log(`Error: ${e}`);
                throw e;
            }
        }
    }
    return descriptor;
}

@log()
function test(age, multiple){
    console.info(`calulate the age: ${age*multiple}`)
}

test (3,2)