import { page, render } from "./api/library.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";



let root = document.querySelector("main");

page(decorateContext);
page("/", homePage);
page("/login", loginPage);
page("/register", registerPage);    

page.start();

async function decorateContext(ctx, next) {
    ctx.render = (template) => render(template, root);

    next();
};