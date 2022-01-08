import { html, render } from "../../src/api/library.js";

let homeTemplate = () => html`
<div class="home">

</div>`;


export function homePage(ctx) {
    ctx.render(homeTemplate());

};


