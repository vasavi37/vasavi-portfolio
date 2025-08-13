// Dark Mode Toggle
const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Scroll to Top Button
const scrollBtn = document.getElementById('scrollTopBtn');
window.onscroll = () => {
    if(document.documentElement.scrollTop > 300){
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
};
scrollBtn.addEventListener('click', () => {
    window.scrollTo({top:0, behavior:'smooth'});
});

// Contact Form Submit
function submitForm(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert('Thank you ${name}! Your message has been sent successfully.');
    e.target.reset();
}