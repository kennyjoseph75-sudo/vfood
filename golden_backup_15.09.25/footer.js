const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700&family=Archivo+Black&display=swap');

    :host {
      display: block;
      --vfood-green: #5a733c;
      --vfood-cream: #EAE5E1;
      --vfood-dark-gray: #282828; /* This is kept for other potential uses, but not for the banner text background */
      --vfood-text-dark: #333;
    }

    /* CONTACT BANNER SECTION - Corrected to have NO dark box */
    .contact-banner {
        max-width: 1200px;
        margin: 4rem auto 2rem;
        background-color: var(--vfood-green); /* SINGLE GREEN CONTAINER */
        border-radius: 20px;
        padding: 3rem 4rem;
        display: grid;
        grid-template-columns: 55% 45%; /* Adjusted for better visual balance */
        align-items: center;
        gap: 2rem;
    }

    .contact-banner-text-box {
        color: white; /* WHITE TEXT directly on the green background */
    }

    .contact-banner-text-box h2 {
        font-family: 'Archivo Black', sans-serif;
        font-size: 2.8rem;
        line-height: 1.2;
        margin: 0 0 1rem 0;
    }

    .contact-banner-text-box p {
        font-size: 1rem;
        line-height: 1.6;
        opacity: 0.9;
        max-width: 450px;
    }

    .contact-banner-image img {
        width: 100%;
        height: auto; /* Maintain aspect ratio */
        max-height: 300px; /* Prevent image from being too tall */
        object-fit: cover;
        border-radius: 15px; /* Soften the image corners */
        display: block;
    }

    /* MAIN FOOTER SECTION */
    .main-footer { background-color: var(--vfood-cream); padding: 4rem 2rem 2rem; max-width: 1200px; margin: 0 auto; }
    .footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; padding-bottom: 2rem; border-bottom: 1px solid #ccc; }
    .footer-column h4 { font-family: 'Archivo', sans-serif; font-weight: 400; font-size: 1.2rem; margin-bottom: 1rem; color: var(--vfood-green); }
    .footer-column ul { list-style: none; padding: 0; margin: 0; }
    .footer-column ul li { margin-bottom: 0.75rem; }
    .footer-column a { color: var(--vfood-text-dark); text-decoration: none; transition: color 0.3s; font-size: 0.9rem; }
    .footer-column a:hover { color: var(--vfood-green); }
    .subscribe-form { display: flex; flex-direction: column; }
    .subscribe-form input { padding: 0.8rem; border-radius: 8px; border: 1px solid #ccc; margin-bottom: 0.5rem; font-size: 1rem; }
    .subscribe-form button { padding: 0.8rem; border-radius: 8px; border: none; background-color: var(--vfood-green); color: white; font-size: 1rem; cursor: pointer; transition: background-color 0.3s; }
    .subscribe-form button:hover { background-color: #4a632c; }
    .footer-bottom { display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; }
    .footer-logo img { height: 60px; }
    .social-links a { color: var(--vfood-green); font-size: 1.5rem; margin-left: 1rem; text-decoration: none; transition: color 0.3s; }
    .social-links a:hover { color: #4a632c; }

    /* RESPONSIVE ADJUSTMENTS */
    @media (max-width: 960px) {
        .contact-banner {
            grid-template-columns: 1fr; /* Stack on smaller screens */
            text-align: center; /* Center text when stacked */
             padding: 2.5rem;
        }
        .contact-banner-image {
            display: none; /* Hide image for simplicity on mobile */
        }
    }
    @media (max-width: 600px) {
        .footer-bottom { flex-direction: column; }
        .footer-logo { margin-bottom: 1rem; }
        .contact-banner h2 { font-size: 2rem; }
    }

  </style>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <footer class="footer-container">
    <div class="contact-banner">
        <div class="contact-banner-text-box">
            <h2>Contact Vfood for Kenya's Freshest Produce</h2>
            <p>A premium food company committed to offering value to food chains around the world. We are currently based in Kenya and the United Kingdom.</p>
        </div>
        <div class="contact-banner-image">
            <img src="images/green avocado lady 3.jpg" alt="Woman holding an avocado over her eye">
        </div>
    </div>
    <div class="main-footer">
      <div class="footer-grid">
        <div class="footer-column"><h4>Useful Links</h4><ul><li><a href="./index.html">Home</a></li><li><a href="./about.html">About Us</a></li><li><a href="./contact.html">Contact Us</a></li><li><a href="./services.html">Services</a></li><li><a href="./privacy.html">Privacy Policy</a></li></ul></div>
        <div class="footer-column"><h4>Careers</h4><ul><li><a href="#">Blog</a></li><li><a href="#">Press</a></li><li><a href="#">Partnerships</a></li><li><a href="#">Support</a></li><li><a href="#">Help Center</a></li></ul></div>
        <div class="footer-column"><h4>Resources</h4><ul><li><a href="#">Events</a></li><li><a href="#">Community</a></li><li><a href="#">Social Media</a></li><li><a href="#">Newsletter</a></li><li><a href="#">Subscribe</a></li></ul></div>
        <div class.="footer-column"><h4>Subscribe</h4><p>Join our community to receive updates</p><form class="subscribe-form"><input type="email" placeholder="Enter your email"><button type="submit">Subscribe</button></form></div>
      </div>
      <div class="footer-bottom">
        <div class="footer-logo"><a href="./index.html"><img src="images/vfood logo.png" alt="Vfood Logo"></a></div>
        <div class="social-links"><a href="#"><i class="fab fa-facebook-f"></i></a><a href="#"><i class="fab fa-instagram"></i></a><a href="#"><i class="fab fa-tiktok"></i></a></div>
      </div>
    </div>
  </footer>
`;

class SiteFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
  }
}

customElements.define('site-footer', SiteFooter);
