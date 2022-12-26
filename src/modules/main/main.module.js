import "./main.css";
import PlatingVideo from "./plating.mp4";
import RestaurantImage from './restaurant.jpg'

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
        <section class="about">
            <div class="image">
                <img src="${RestaurantImage}" alt="restaurant">
            </div>
            <div class="about-text">
                <h1>El Manoel?</h1>
                <p>What type of cuisine is this? Portuguese sushi?
                It's like the best fusion you'll ever eat. According to chefs family.</p>
                <p>
                    You can visit us in your dreams at night. Those times
                    you get really hungry in the middle of the night. Instead of
                    waking up and go to the fridge. No! Just dream about us and
                    you'll be happy. You can also order on Uber Eats if that fails.
                </p>
            </div>
        </section>
    </div>
  `;

    return template.content;
}

export const main = { render };
