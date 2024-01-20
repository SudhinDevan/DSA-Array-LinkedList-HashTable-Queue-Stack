function fact(num) {
    if (num < 1) {
        return 1;
    }
    num * fact(num - 1)

}