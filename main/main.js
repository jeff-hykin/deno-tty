const library = Deno.dlopen("target.ignore/debug/deps/libfornix.dylib", {
    add: {
        parameters: ['f64', 'f64',], result: "f64", 
    }
})

console.debug(`library.symbols.add(10, 45.5) is:`,library.symbols.add(10, 45.5))