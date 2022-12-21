function render() {
  const template = document.createElement("template");

  template.innerHTML = `
  <header>I'm Header!</header>
  `;

  return template.content;
}

export const header = { render };
