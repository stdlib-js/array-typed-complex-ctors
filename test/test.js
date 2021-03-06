/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

'use strict';

// MODULES //

var tape = require( 'tape' );
var dtypes = require( '@stdlib/array-typed-complex-dtypes' );
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex64Array = require( '@stdlib/array-complex64' );
var isFunction = require( '@stdlib/assert-is-function' );
var ctors = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ctors, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns complex typed array constructors', function test( t ) {
	var expected;
	var dtypes;
	var ctor;
	var i;

	dtypes = [
		'complex128',
		'complex64'
	];
	expected = [
		Complex128Array,
		Complex64Array
	];
	for ( i = 0; i < dtypes.length; i++ ) {
		ctor = ctors( dtypes[ i ] );
		t.strictEqual( ctor, expected[ i ], 'returns expected value for ' + dtypes[ i ] );
	}
	t.end();
});

tape( 'the function returns a constructor for each supported complex typed array data type', function test( t ) {
	var DTYPES;
	var ctor;
	var i;

	DTYPES = dtypes();
	for ( i = 0; i < DTYPES.length; i++ ) {
		ctor = ctors( DTYPES[ i ] );

		// Note: this is a weak test for a "constructor"
		t.strictEqual( isFunction( ctor ), true, 'returns a function for ' + DTYPES[ i ] );
	}
	t.end();
});

tape( 'if provided an unknown/unsupported data type, the function returns `null`', function test( t ) {
	var dtypes;
	var i;

	dtypes = [
		'binary',
		'buffer',
		'buf',
		'generic',
		'float',
		'double',
		'single',
		'int',
		'integer',
		'uint',
		'uinteger',
		'byte',
		'bits',
		'float64',
		'float32',
		'uint32',
		'int32',
		'uint16',
		'int16',
		'uint8',
		'uint8c',
		'int8'
	];
	for ( i = 0; i < dtypes.length; i++ ) {
		t.strictEqual( ctors( dtypes[i] ), null, 'returns expected value for ' + dtypes[ i ] );
	}
	t.end();
});
