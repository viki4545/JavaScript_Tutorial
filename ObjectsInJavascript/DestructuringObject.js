// Object destructuring

const band = {
    bandName: "led zeppelin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir"
};

// const var1 = band.bandName;
// const var2 = band.famousSong;
// console.log(bandName,famousSong);

// object destructuring

// const {bandName: var1,famousSong: var2, year : var3, anotherFamousSong : var4} = band;
// console.log(var1);
// console.log(var2);
// console.log(var3);
// console.log(var4);

const {bandName: var1,famousSong: var2, ...restProps} = band;
console.log(restProps);