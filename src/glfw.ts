const glfw = Deno.dlopen("./glfw/glfw3.dll", {
    //Function defs here
    glfwMakeContextCurrent: {
        parameters: [
            "pointer"
        ],
        result: "void"
    },
    glfwGetCurrentContext: {
        parameters: [],
        result: "pointer"
    },
    glfwSwapInterval: {
        parameters: ["i32"],
        result: "void"
    }
})

export default glfw.symbols