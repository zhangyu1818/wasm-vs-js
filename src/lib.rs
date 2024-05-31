use wasm_bindgen::prelude::*;
use nalgebra::{DMatrix,DVector};
use rustfft::{FftPlanner, num_complex::Complex};

#[wasm_bindgen]
pub fn rs_matrix_multiply(a: &[f64], b: &[f64], n: usize, m: usize, p: usize) -> Vec<f64> {
    let a = DMatrix::from_row_slice(n, m, a);
    let b = DMatrix::from_row_slice(m, p, b);
    let c = &a * &b;
    c.iter().cloned().collect()
}

#[wasm_bindgen]
pub fn rs_matrix_transpose(a: &[f64], n: usize, m: usize) -> Vec<f64> {
    let a = DMatrix::from_row_slice(n, m, a);
    let t = a.transpose();
    t.iter().cloned().collect()
}

#[wasm_bindgen]
pub fn rs_vector_dot_product(a: &[f64], b: &[f64]) -> f64 {
    let a = DVector::from_row_slice(a);
    let b = DVector::from_row_slice(b);
    a.dot(&b)
}

#[wasm_bindgen]
pub fn rs_fft(input: &[f64]) -> Vec<f64> {
    let mut planner = FftPlanner::new();
    let fft = planner.plan_fft_forward(input.len());

    let mut buffer: Vec<Complex<f64>> = input.iter().map(|&x| Complex { re: x, im: 0.0 }).collect();
    fft.process(&mut buffer);

    buffer.iter().flat_map(|c| vec![c.re, c.im]).collect()
}

#[wasm_bindgen]
pub fn rs_fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => rs_fibonacci(n - 1) + rs_fibonacci(n - 2),
    }
}

