import "../css/main.css";
import PlatingVideo from "./../asset/video/plating.mp4";

function render() {
    const template = document.createElement("template");

    template.innerHTML = `
    <div class="hero-video-container">
        <video class="hero-video" id="vid" src="${PlatingVideo}" autoplay loop muted> </video>
    </div>
    <div class="logo-overlay">
        <div class="name"><p>EL</p><p>MANOEL</p></div>
        <div class="cuisine">Portuguese Sushi</div>
    </div>
    <div class="main">

    </div>
  `;

    return template.content;
}

export const main = { render };
