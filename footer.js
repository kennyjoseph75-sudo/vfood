const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <style>
    /* Import Google Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

    /* Define local font */
    @font-face {
      font-family: 'Braven';
      src: url('fonts/Braven/BravenRegular.woff2') format('woff2'),
           url('fonts/Braven/BravenRegular.woff') format('woff'),
           url('fonts/Braven/BravenRegular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }

    /* Component-wide styles */
    :host {
      display: block;
      font-family: 'Inter', sans-serif; /* Default font */
      --vfood-green: #5a733c;
      --vfood-cream: #EAE5E1;
      --vfood-dark-gray: #282828;
      --vfood-text-dark: #333;
    }

    /* CONTACT BANNER SECTION */
    .contact-banner {
        max-width: 1200px;
        margin: 4rem auto 2rem;
        background-color: var(--vfood-green);
        border-radius: 20px;
        padding: 3rem 4rem;
        display: grid;
        grid-template-columns: 55% 45%;
        align-items: center;
        gap: 2rem;
    }

    .contact-banner-text-box {
        color: white;
    }

    /* Apply 'Braven' font to the banner heading */
    .contact-banner-text-box h2 {
        font-family: 'Braven', sans-serif;
        font-size: 3.2rem; /* Increased size for impact */
        font-weight: normal;
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
        height: auto;
        max-height: 300px;
        object-fit: contain; /* Changed from cover to contain */
        border-radius: 15px;
        display: block;
    }

    /* MAIN FOOTER SECTION */
    .main-footer {
      background-color: var(--vfood-cream);
      padding: 4rem 2rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid #ccc;
    }
    
    /* Apply 'Braven' font to footer column headings */
    .footer-column h4 {
      font-family: 'Braven', sans-serif;
      font-weight: normal; /* Braven doesn't need bold */
      font-size: 1.8rem;
      margin-bottom: 1rem;
      color: var(--vfood-green);
    }
    
    .footer-column ul { list-style: none; padding: 0; margin: 0; }
    .footer-column ul li { margin-bottom: 0.75rem; }
    .footer-column a { color: var(--vfood-text-dark); text-decoration: none; transition: color 0.3s; font-size: 0.9rem; }
    .footer-column a:hover { color: var(--vfood-green); }
    
    .subscribe-form { display: flex; flex-direction: column; }
    .subscribe-form input { padding: 0.8rem; border-radius: 8px; border: 1px solid #ccc; margin-bottom: 0.5rem; font-size: 1rem; font-family: 'Inter', sans-serif; }
    .subscribe-form button { padding: 0.8rem; border-radius: 8px; border: none; background-color: var(--vfood-green); color: white; font-size: 1rem; cursor: pointer; transition: background-color 0.3s; font-family: 'Inter', sans-serif; }
    .subscribe-form button:hover { background-color: #4a632c; }
    
    .footer-bottom { display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; }
    .footer-logo img { height: 60px; }
    .social-links a { color: var(--vfood-green); font-size: 1.5rem; margin-left: 1rem; text-decoration: none; transition: color 0.3s; }
    .social-links a:hover { color: #4a632c; }

    /* RESPONSIVE ADJUSTMENTS */
    @media (max-width: 960px) {
        .contact-banner {
            grid-template-columns: 1fr;
            text-align: center;
             padding: 2.5rem;
        }
        .contact-banner-image {
            display: none;
        }
    }
    @media (max-width: 600px) {
        .footer-bottom { flex-direction: column; }
        .footer-logo { margin-bottom: 1rem; }
        .contact-banner h2 { font-size: 2.5rem; }
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
        <div class="footer-column"><h4>Subscribe</h4><p>Join our community to receive updates</p><form class="subscribe-form"><input type="email" placeholder="Enter your email"><button type="submit">Subscribe</button></form></div>
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
