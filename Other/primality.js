// primality
function primality(n) {
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i == 0) {
            return ("not prime");
        }
    }
    return ("Prime");
}
console.log(primality(101));

// big - O= O(sqrt(n))