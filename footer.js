const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <style>
    /* Import Google Fonts & Font Awesome */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');

    @font-face {
      font-family: 'Braven';
      src: url('fonts/Braven/BravenRegular.woff2') format('woff2'),
           url('fonts/Braven/BravenRegular.woff') format('woff'),
           url('fonts/Braven/BravenRegular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }

    :host {
      display: block;
      --vfood-green: #5a733c; 
      --vfood-white: #FFFFFF;
      --vfood-light-gray: #f0f0f0;
      --vfood-subtle-gray: #ccc;
    }

    .footer-container {
      background-color: var(--vfood-green);
      color: var(--vfood-white);
      font-family: 'Inter', sans-serif;
      padding: 5rem 3rem 0;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 3rem;
      max-width: 1200px;
      margin: 0 auto;
      align-items: start;
    }
    
    /* Left Column: Brand Info */
    .brand-image-container {
        display: inline-block;
        border-radius: 15px;
        background-color: #5a733c;
        margin-bottom: 1.5rem;
    }
    .brand-column .brand-image {
        width: 100%;
        max-width: 250px;
        border-radius: 15px;
        display: block;
    }
    .brand-column .brand-text {
        font-size: 0.9rem;
        line-height: 1.6;
        opacity: 0.9;
        margin-bottom: 1.5rem;
    }

    /* Center & Right Columns */
    .links-column h4, .hours-column h4 {
        font-family: 'Braven', sans-serif;
        font-size: 2rem;
        font-weight: normal;
        margin: 0 0 1.5rem 0;
        color: var(--vfood-white);
    }

    .links-column ul { list-style: none; padding: 0; margin: 0; }
    .links-column li { margin-bottom: 1rem; }
    .links-column a {
        color: var(--vfood-light-gray);
        text-decoration: none;
        transition: color 0.3s ease;
    }
    .links-column a:hover { color: var(--vfood-white); }

    .hours-list { list-style: none; padding: 0; margin: 0; font-size: 0.9rem;}
    .hours-list li {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    .hours-list li span:last-child { color: var(--vfood-subtle-gray); }
    .hours-list li.highlight span:last-child { color: #9AE6B4; font-weight: bold; }

    /* Footer Bottom: Social Links & Logo */
    .footer-socials {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 3rem auto 0;
        padding: 2rem 0;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    .social-links a {
        color: var(--vfood-white);
        font-size: 1.5rem;
        margin: 0 0.75rem;
        text-decoration: none;
        transition: opacity 0.3s ease;
    }
    .social-links a:hover { opacity: 0.8; }

    .footer-logo {
        width: 120px;
        height: auto;
    }
    
    .footer-legal-bar {
        background-color: #000;
        color: var(--vfood-light-gray);
        padding: 1.5rem 3rem;
        text-align: center;
    }
    .footer-legal {
        max-width: 1200px;
        margin: 0 auto;
        font-size: 0.8rem;
        opacity: 0.8;
    }
    .footer-legal a, .footer-legal p {
        color: var(--vfood-light-gray);
        text-decoration: none;
        margin: 0 0.5rem;
        display: inline-block;
    }
    .footer-legal a:hover { color: var(--vfood-white); }

    /* Responsive Adjustments */
    @media (max-width: 992px) {
        .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
        }
    }
    
    @media (max-width: 768px) {
        .footer-container { padding: 4rem 1.5rem 0; }
        .footer-grid {
            grid-template-columns: 1fr;
            text-align: center;
        }
        .brand-column {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .footer-socials {
            flex-direction: column;
        }
        .footer-logo {
            margin-top: 1.5rem;
        }
    }

  </style>
  <footer class="footer-wrapper">
    <div class="footer-container">
      <div class="footer-grid">
        <div class="footer-column brand-column">
            <div class="brand-image-container">
                <img src="images/new green avocado lady 2.png" alt="Woman holding an avocado" class="brand-image">
            </div>
          <p class="brand-text">Vfood is a premium food food company that is committed to offering value to food chains around the world, from logistics to being an intermediary representative of other food companies around the world. We are currently based in Kenya and in the United kingdom.</p>
        </div>
        <div class="footer-column links-column">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="./index.html">Home</a></li>
            <li><a href="./about.html">About Us</a></li>
            <li><a href="./vfood-exports.html">Exports</a></li>
            <li><a href="./vfood-imports.html">Imports</a></li>
            <li><a href="./services.html">Services</a></li>
            <li><a href="./contact.html">Contact Us</a></li>
            <li><a href="./blog.html">Blog</a></li>
          </ul>
        </div>
        <div class="footer-column hours-column">
          <h4>Opening Hours</h4>
          <ul class="hours-list">
            <li><span>Monday</span><span>08:00-17:00</span></li>
            <li><span>Tuesday</span><span>08:00-17:00</span></li>
            <li><span>Wednesday</span><span>08:00-17:00</span></li>
            <li><span>Thursday</span><span>08:00-17:00</span></li>
            <li><span>Friday</span><span>08:00-17:00</span></li>
            <li class="highlight"><span>Saturday</span><span>08:00-12:00</span></li>
            <li><span>Sunday</span><span>We are closed</span></li>
          </ul>
        </div>
      </div>
      <div class="footer-socials">
        <div class="social-links">
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-tiktok"></i></a>
          <a href="#"><i class="fab fa-facebook-f"></i></a>
        </div>
        <img src="images/new Vlogo.png" alt="Vfood Logo" class="footer-logo">
      </div>
    </div>
    <div class="footer-legal-bar">
        <div class="footer-legal">
            <a href="./privacy.html">Privacy Policy</a>
            <a href="./terms.html">Terms of Service</a>
            <p>&copy; 2024 Vfood. All Rights Reserved.</p>
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
