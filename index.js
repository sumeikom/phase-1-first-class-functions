function receivesAFunction(callback) {
 callback();
};

function returnsANamedFunction(){
    const newFunc = function() {
        console.log("")
    }
return newFunc
};

function returnsAnAnonymousFunction() {
    return () => console.log("")
};