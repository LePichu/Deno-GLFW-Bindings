import glfwdll from "./glfw.ts"

const encoder = new TextEncoder();
function encodeCstring(cstring: string): Deno.UnsafePointer {
    const buffer = new Uint8Array(cstring.length + 1);
    encoder.encodeInto(cstring, buffer);
    return Deno.UnsafePointer.of(buffer);
}

export function createWindow(width: number, height: number, name: string) {
    glfwdll.glfwCreateWindow(width,height,encodeCstring(name),null,null);
}