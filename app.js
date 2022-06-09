import { http } from "./http.js";

await new Promise((res) => {
    setTimeout(() => {
        res(console.log("hello world"));
    }, 100);
});
