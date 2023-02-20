// filter is also same like a foreach but has return type

const nums = [0,10,20,30,40,50];

function nu(num) {
    return num > 20;
}
console.log(nums.filter(nu));
