
// console.log(number)

// number.reverse()
// console.log(number);


const numbers = [12, 23, 24, 25, 26, 28, 27, 2]
// const reverse=numbers.reverse()
// console.log(reverse);

// const rev_number =  [ ];
// for (const num of number) {
//     console.log(num)
//     rev_number.unshift
// }
// console.log(rev_number)

// const rev_number = [];
// for (const num of number) {
//     // console.log(num)
//     rev_number.push(num)
// }
// // console.log(rev_number)
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const rev_number = [];

// for (let i = 0; i < number.length; i++) {
//     const num = number[i]
//     rev_number.unshift(num)
// }

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let i=number.length-1; i>=0; i--){
    const num=number[i];
    console.log(num);
}