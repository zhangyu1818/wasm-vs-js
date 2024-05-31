/* tslint:disable */
/* eslint-disable */
/**
* @param {Float64Array} a
* @param {Float64Array} b
* @param {number} n
* @param {number} m
* @param {number} p
* @returns {Float64Array}
*/
export function rs_matrix_multiply(a: Float64Array, b: Float64Array, n: number, m: number, p: number): Float64Array;
/**
* @param {Float64Array} a
* @param {number} n
* @param {number} m
* @returns {Float64Array}
*/
export function rs_matrix_transpose(a: Float64Array, n: number, m: number): Float64Array;
/**
* @param {Float64Array} a
* @param {Float64Array} b
* @returns {number}
*/
export function rs_vector_dot_product(a: Float64Array, b: Float64Array): number;
/**
* @param {Float64Array} input
* @returns {Float64Array}
*/
export function rs_fft(input: Float64Array): Float64Array;
/**
* @param {number} n
* @returns {number}
*/
export function rs_fibonacci(n: number): number;
/**
* @param {Int32Array} arr
*/
export function rs_exchange_sort(arr: Int32Array): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly rs_matrix_multiply: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => void;
  readonly rs_matrix_transpose: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly rs_vector_dot_product: (a: number, b: number, c: number, d: number) => number;
  readonly rs_fft: (a: number, b: number, c: number) => void;
  readonly rs_fibonacci: (a: number) => number;
  readonly rs_exchange_sort: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
