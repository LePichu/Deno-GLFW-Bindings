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
    },
    glfwExtensionSupported: {
        parameters: ["pointer"],
        result: "i32"
    },
    glfwGetProcAddress: {
        parameters: ["pointer"],
        result: "pointer"
    },
    glfwInit: {
        parameters: [],
        result: "i32"
    },
    glfwTerminate: {
        parameters: [],
        result: "void"
    },
    glfwInitHint: {
        parameters: ["i32", "i32"],
        result: "void"
    },
    glfwCreateWindow: {
        parameters: ["i32","i32", "pointer", "pointer", "pointer"],
        result: "pointer"
    },
})

export default glfw.symbols