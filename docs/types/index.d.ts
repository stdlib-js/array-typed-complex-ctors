/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

import Complex128Array = require( '@stdlib/array-complex128' );
import Complex64Array = require( '@stdlib/array-complex64' );

/**
* Returns a `Complex128Array` constructor.
*
* @param dtype - data type
* @returns constructor
*
* @example
* var ctor = ctors( 'complex128' );
* // returns <Function>
*/
declare function ctors( dtype: 'complex128' ): typeof Complex128Array;

/**
* Returns a `Complex64Array` constructor.
*
* @param dtype - data type
* @returns constructor
*
* @example
* var ctor = ctors( 'complex64' );
* // returns <Function>
*/
declare function ctors( dtype: 'complex64' ): typeof Complex64Array;

/**
* Returns a complex typed array constructor.
*
* @param dtype - data type
* @returns constructor or null
*
* @example
* var ctor = ctors( 'complex128' );
* // returns <Function>
*
* @example
* var ctor = ctors( 'float64' );
* // returns null
*/
declare function ctors( dtype: string ): Function | null;


// EXPORTS //

export = ctors;
