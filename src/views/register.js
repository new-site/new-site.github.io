import { html, render } from "../../src/api/library.js";

let registerTemplate = () => html`

<div class="fullRegister">

    <div class="register">
        <div class="wrapper">
            <div class="title">
                <span>Register Form</span>
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
                <div class="row">
                    <link href="https://use.fontawesome.com/releases/v5.0.4/css/all.css" rel="stylesheet">
                    <i class="fa fa-lock"></i>
                    <input type="password" placeholder="Repeat password" required>
                </div>
                <div class="row">
                    <link href="https://use.fontawesome.com/releases/v5.0.4/css/all.css" rel="stylesheet">
                    <i class="fas fa-building"></i>
                    <input type="text" placeholder="City">
                </div>
                <div class="row">
                    <link href="https://use.fontawesome.com/releases/v5.0.4/css/all.css" rel="stylesheet">
                    <i class="fas fa-phone-square"></i>
                    <input type="text" placeholder="Phone number">
                </div>
                <div class="row button">
                    <input type="submit" value="Login">
                </div>
                <div class="signup-link">You are member? <a href="#">Sign in now</a></div>
            </form>
        </div>
    </div>

</div>
`;


export function registerPage(ctx) {
    ctx.render(registerTemplate());

};


