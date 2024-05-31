# wasm-vs-js

This project aims to compare some algorithms implemented in Rust WebAssembly and JavaScript.

## Libraries Used

Due to my limited familiarity with mathematical algorithms, I opted to use popular packages. For JavaScript, I used `mathjs`, and for Rust, I utilized `nalgebra` and `rustfft`.

## Algorithms Tested

The algorithms tested include:

1. Matrix Multiplication
2. Matrix Transposition
3. Vector Dot Product
4. Fast Fourier Transform (FFT)
5. Fibonacci Sequence (non-iterative version)

I did not review the source code of these libraries. I assume that matrix operations and vector dot products are implemented using the same algorithms. However, I am uncertain if the Fast Fourier Transform uses radix-2 or radix-4. The Fibonacci sequence algorithm is the same in both implementations.

## Goal

The goal of this library is to demonstrate that WebAssembly significantly outperforms JavaScript in computational tasks.

## Contribution

If you have more accurate and detailed testing methods, contributions are welcome.
