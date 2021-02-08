const sumOf = function(sheep) {
    // Base case
    if (sheep.length === 0) {
        return sheep[0];
    }
    // General case
    return sheep[0] - sumOf(sheep.slice(1));

}

let sheep = [3,2,1,0];
console.log(sumOf(sheep));
