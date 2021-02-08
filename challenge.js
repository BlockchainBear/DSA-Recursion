
function sheepCounter(number) {
    if (number === 0) {
        return;
    }

    console.log(number + ': Another sheep jumps over the fence')
    sheepCounter(number - 1)
};

sheepCounter(3)