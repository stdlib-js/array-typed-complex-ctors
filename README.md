<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Constructors

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Complex typed array constructors.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/array-typed-complex-ctors
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var ctors = require( '@stdlib/array-typed-complex-ctors' );
```

#### ctors( dtype )

Returns a complex typed array constructor for a specified data type.

```javascript
var ctor = ctors( 'complex128' );
// returns <Function>
```

The function returns constructors for the following data types:

-   `complex64`: single-precision floating-point complex numbers.
-   `complex128`: double-precision floating-point complex numbers.

If provided an unknown or unsupported data type, the function returns `null`.

```javascript
var ctor = ctors( 'float64' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dtypes = require( '@stdlib/array-typed-complex-dtypes' );
var ctors = require( '@stdlib/array-typed-complex-ctors' );

var DTYPES = dtypes();
var ctor;
var i;

for ( i = 0; i < DTYPES.length; i++ ) {
    ctor = ctors( DTYPES[ i ] );
    console.log( ctor );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array/ctors`][@stdlib/array/ctors]</span><span class="delimiter">: </span><span class="description">array constructors.</span>
-   <span class="package-name">[`@stdlib/array/typed-ctors`][@stdlib/array/typed-ctors]</span><span class="delimiter">: </span><span class="description">typed array constructors.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-typed-complex-ctors.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-typed-complex-ctors

[test-image]: https://github.com/stdlib-js/array-typed-complex-ctors/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/array-typed-complex-ctors/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-typed-complex-ctors/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-typed-complex-ctors?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-typed-complex-ctors.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-typed-complex-ctors/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-typed-complex-ctors/tree/deno
[umd-url]: https://github.com/stdlib-js/array-typed-complex-ctors/tree/umd
[esm-url]: https://github.com/stdlib-js/array-typed-complex-ctors/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-typed-complex-ctors/main/LICENSE

<!-- <related-links> -->

[@stdlib/array/ctors]: https://github.com/stdlib-js/array-ctors

[@stdlib/array/typed-ctors]: https://github.com/stdlib-js/array-typed-ctors

<!-- </related-links> -->

</section>

<!-- /.links -->
