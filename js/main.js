const header = document.getElementById('header');
const review = document.getElementById('review');
const price = document.getElementById('price');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bg = document.querySelectorAll(".animated-bg");
const animated_bg_text = document.querySelectorAll(".animated-bg-text");

setTimeout(getData,2500)

function getData(){
    header.innerHTML ='<img src="./img/homestay.jpg" alt=""/>';
    title.innerHTML = 'Homeward Mountain Resort';
    review.innerHTML = '<span class="badge">4.4&nbsp;<i class="fa fa-star"></i></span> <a href="#">173 Reviews</a>';
    excerpt.innerHTML ='Feauturing free WiFi and an outdoor pool, Homeward mountain resort is a pet-friendly.';
    price.innerHTML = 'price starts with &#36;23 /Day';
    profile_img.innerHTML = '<img src="./img/owner.jpg" alt=""/>';
    name.innerHTML= 'John Doe';
    date.innerHTML = 'CEO/Manager';

    animated_bg.forEach((bg) => bg.classList.remove('animated-bg')); 
    animated_bg_text.forEach((bg) => bg.classList.remove('animated-bg-text'));
}