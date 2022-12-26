import "./header.css";

function render() {
  const template = document.createElement("template");

  template.innerHTML = `
  <header class="main-header">
    <nav>
        <div>about</div>
        <div>menu</div>
        <div>groups</div>
        <div>contact</div>
    </nav>
    <div class="logo">EL MANOEL</div>
    <div class="actions">
        <button class="primary">booking</button>
    </div>
  </header>
  `;

  return template.content;
}

export const header = { render };
