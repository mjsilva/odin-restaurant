function render() {
  const template = document.createElement("template");

  template.innerHTML = `
  <div class="main">I'm Main!</div>
  `;

  return template.content;
}

export const main = { render };
