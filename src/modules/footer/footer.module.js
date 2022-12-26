function render() {
  const template = document.createElement("template");

  template.innerHTML = `
  <footer>I'm Footer!</footer>
  `;

  return template.content;
}

export const footer = { render };
