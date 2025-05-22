function factorial(n) {
    if (n == 1 || n == 0) return 1;
    if (n == 2) return 2;

    return n * factorial(n-1);
}

// Jangan hapus kode di bawah ini!
export default factorial;
