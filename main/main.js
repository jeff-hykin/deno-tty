const library = Deno.dlopen("target.ignore/debug/deps/libfornix.dylib", {
    print_stuff: {
        parameters: ['buffer'],
        result: "void", 
    },
})

library.symbols.print_stuff(new TextEncoder().encode("Howdy\0"))

// console.debug(`library.symbols.add(10, 45.5) is:`,)