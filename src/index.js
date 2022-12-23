import { header } from "./js/header.module";
import { main } from "./js/main.module";
import { footer } from "./js/footer.module";

import "reset-css";
import "./css/index.css";

const body = document.body;

body.appendChild(header.render());
body.appendChild(main.render());
body.appendChild(footer.render());
