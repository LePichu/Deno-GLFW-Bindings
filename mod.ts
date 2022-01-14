import glfw from "./src/glfw.ts"

if (!glfw.glfwInit())
    Deno.exit(-1)

let window = glfw.glfwCreateWindow(640,480,null,null,null)

glfw.glfwMakeContextCurrent(window)