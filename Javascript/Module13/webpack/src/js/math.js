function sum (...args) {
    return args.reduce((acc, el) => acc + el,0);
};

function substr (...args){
    return args.reduce((acc,el) => acc - el);
}

function pow (a,b) {
    return Math.pow(a,b);
}

export {pow, sum, substr};