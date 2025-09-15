const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      position: fixed;
      top: 2rem;
      left: 2rem;
      z-index: 1000;
      --nav-brand-color: #5a733c; /* Using the green from the site's theme */
    }

    .nav-container {
      display: flex;
      align-items: center;
      background-color: white;
      border-radius: 12px;
      padding: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
      overflow: hidden;
    }

    .hamburger-btn {
      background: none;
      border: none;
      cursor: pointer;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 40px;
      height: 40px;
      flex-shrink: 0;
    }

    .hamburger-btn span {
      display: block;
      width: 100%;
      height: 3px;
      background-color: var(--nav-brand-color);
      border-radius: 3px;
    }
    
    .nav-links {
      display: flex;
      max-width: 0;
      opacity: 0;
      transition: max-width 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.3s ease;
      white-space: nowrap;
      overflow: hidden;
    }

    .nav-container.open .nav-links {
      max-width: 700px; /* Large enough to fit links */
      opacity: 1;
      transition-delay: 0s, 0.2s; /* Opacity transition starts after expansion begins */
    }

    ul {
        position: relative; /* For bubble positioning */
        list-style: none;
        padding: 0 1rem;
        margin: 0;
        display: flex;
        align-items: center;
    }
    li {
        margin: 0 1rem;
        z-index: 1; /* Ensure links are above the bubble */
    }
    a {
        text-decoration: none;
        color: #333;
        font-weight: 700;
        font-size: 1rem;
        transition: color 0.3s ease;
    }

    li:hover a {
        color: white;
    }

    .link-bubble {
        position: absolute;
        background-color: var(--nav-brand-color);
        border-radius: 40px; /* More circular/pill shape */
        transform: scale(0);
        transform-origin: center;
        transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        pointer-events: none;
        z-index: 0;
        box-shadow: 0 0 15px 8px var(--nav-brand-color); /* This creates the fuzzy glow */
        opacity: 0.9;
    }

    .logo-container {
      background-color: var(--nav-brand-color);
      border-radius: 8px;
      padding: 5px 20px;
      margin-left: 8px;
      flex-shrink: 0;
    }

    .logo {
      font-family: 'Archivo Black', sans-serif;
      font-size: 1.5rem;
      color: white;
      text-decoration: none;
    }

  </style>
  <div class="nav-container">
    <button class="hamburger-btn" aria-label="Open navigation menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div class="nav-links">
        <ul>
            <div class="link-bubble"></div>
            <li><a href="./index.html">Home</a></li>
            <li><a href="./about.html">About</a></li>
            <li><a href="./imports.html">Vfood Kenya</a></li>
            <li><a href="./vfood-uk.html">Vfood UK</a></li>
            <li><a href="./services.html">Services</a></li>
            <li><a href="./blog.html">Blog</a></li>
            <li><a href="./contact.html">Contact</a></li>
        </ul>
    </div>
    <div class="logo-container">
      <a href="./index.html" class="logo">Vfood</a>
    </div>
  </div>
`;

class MainNavigation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const hamburgerBtn = this.shadowRoot.querySelector('.hamburger-btn');
    const navContainer = this.shadowRoot.querySelector('.nav-container');
    const navList = this.shadowRoot.querySelector('.nav-links ul');
    const navLinks = this.shadowRoot.querySelectorAll('.nav-links ul li');
    const linkBubble = this.shadowRoot.querySelector('.link-bubble');


    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navContainer.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (!this.contains(e.target)) {
            navContainer.classList.remove('open');
        }
    });

    navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const bubblePadding = 15;
        // On hover, update the bubble's position and size
        linkBubble.style.transform = 'scale(1)';
        linkBubble.style.left = `${link.offsetLeft - (bubblePadding / 2)}px`;
        linkBubble.style.top = `${link.offsetTop - (bubblePadding / 2)}px`;
        linkBubble.style.width = `${link.offsetWidth + bubblePadding}px`;
        linkBubble.style.height = `${link.offsetHeight + bubblePadding}px`;
      });
    });

    navList.addEventListener('mouseleave', () => {
        // When the mouse leaves the list, hide the bubble
        linkBubble.style.transform = 'scale(0)';
    });

  }
}

customElements.define('main-navigation', MainNavigation);
