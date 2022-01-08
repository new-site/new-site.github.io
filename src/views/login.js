import { html, render } from "../../src/api/library.js";

let loginTemplate = () => html`

<div class= "fullLogin">

    <div class="login">
        <div class="wrapper">
            <div class="title">
                <span>Login Form</span>
            </div>
            <form action="#">
                <div class="row">
                    <link href="https://use.fontawesome.com/releases/v5.0.4/css/all.css" rel="stylesheet">
                    <i class="fa fa-user"></i>
                    <input type="text" placeholder="Email" required>
                </div>
                <div class="row">
                    <link href="https://use.fontawesome.com/releases/v5.0.4/css/all.css" rel="stylesheet">
                    <i class="fa fa-lock"></i>
                    <input type="password" placeholder="Password" required>
                </div>
                <div class="row button">
                    <input type="submit" value="Login">
                </div>
                <div class="signup-link">Not a member? <a href="#">Sign up now</a></div>
            </form>
        </div>

    </div>

`;


export function loginPage(ctx) {
    ctx.render(loginTemplate());

};


