import { header } from "./modules/header/header.module";
import { main } from "./modules/main/main.module";
import { footer } from "./modules/footer/footer.module";

import "reset-css";
import "./index.css";

const body = document.body;

body.appendChild(header.render());
body.appendChild(main.render());
body.appendChild(footer.render());
