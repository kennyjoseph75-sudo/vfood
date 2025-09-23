const template = document.createElement('template');
template.innerHTML = `
  <style>
    @font-face {
      font-family: 'Braven';
      src: url('fonts/Braven/BravenRegular.woff2') format('woff2'),
           url('fonts/Braven/BravenRegular.woff') format('woff'),
           url('fonts/Braven/BravenRegular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }

    :host {
      position: fixed;
      top: 2rem;
      left: 2rem;
      z-index: 10000;
      --nav-brand-color: #5a733c;
    }

    .nav-container {
      position: relative;
      display: flex;
      align-items: center;
      background-color: white;
      border-radius: 12px;
      padding: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
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
      z-index: 10003;
      position: relative;
    }

    .hamburger-btn span {
      display: block;
      width: 100%;
      height: 3px;
      background-color: var(--nav-brand-color);
      border-radius: 3px;
      transition: all 0.3s ease-in-out;
    }

    .nav-container.open .hamburger-btn span:nth-child(1) {
        transform: translateY(11px) rotate(45deg);
    }
    .nav-container.open .hamburger-btn span:nth-child(2) {
        opacity: 0;
    }
    .nav-container.open .hamburger-btn span:nth-child(3) {
        transform: translateY(-11px) rotate(-45deg);
    }
    
    .nav-links {
      display: flex;
      max-width: 0;
      opacity: 0;
      transition: max-width 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.3s ease, transform 0.3s ease-in-out;
      white-space: nowrap;
      overflow: hidden;
    }

    .nav-container.open .nav-links {
      max-width: 800px;
      opacity: 1;
      transition-delay: 0s, 0.2s;
      overflow: visible;
    }

    ul {
        position: relative;
        list-style: none;
        padding: 0 1rem;
        margin: 0;
        display: flex;
        align-items: center;
    }
    li {
        margin: 0 0.8rem;
        z-index: 1;
    }
    a {
        text-decoration: none;
        color: #333;
        font-family: 'Braven', sans-serif;
        font-weight: 700;
        font-size: 1.2rem;
        transition: color 0.3s ease;
    }

    @media (min-width: 769px) {
      li:hover > a {
          color: white;
      }
    }

    .link-bubble {
        position: absolute;
        background-color: var(--nav-brand-color);
        border-radius: 40px;
        transform: scale(0);
        transform-origin: center;
        transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        pointer-events: none;
        z-index: 0;
        box-shadow: 0 0 15px 8px var(--nav-brand-color);
        opacity: 0.9;
    }

    .logo-container {
      padding: 5px 15px;
      margin-left: 8px;
      flex-shrink: 0;
    }

    .logo img {
      height: 40px;
      width: auto;
    }
    
    .dropdown {
        position: relative;
        padding-bottom: 10px;
        margin-bottom: -10px;
    }
    
    .dropdown > a {
        cursor: default;
    }

    .dropdown-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        background-color: white;
        border-radius: 8px;
        padding: 0.5rem 0;
        list-style: none;
        margin: 0;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        min-width: 180px;
        z-index: 10002;
    }

    .dropdown-menu.show {
        display: block;
    }
    
    .dropdown-menu li a {
        padding: 0.5rem 1rem;
        font-weight: normal;
    }

    .dropdown-menu li:hover {
        background-color: var(--nav-brand-color);
    }
    
    .dropdown-menu li:hover a {
        color: white;
    }
    
    .mobile-logo {
        display: none;
    }

    /* --- Mobile Navigation Styles --- */
    @media (max-width: 768px) {
        :host {
            top: 0;
            left: 0;
            width: 0;
            height: 0;
        }

        .nav-container {
            background: transparent;
            box-shadow: none;
            padding: 0;
            top: 1rem;
            left: 1rem;
            position: fixed;
            border-radius: 12px;
        }

        .nav-container.open {
            width: 100vw;
            height: 100vh;
            background: rgba(0,0,0,0.5);
            top: 0;
            left: 0;
            border-radius: 0;
        }

        .hamburger-btn {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            position: fixed; /* Keep it in the corner */
            top: 1rem;
            left: 1rem;
        }

        .link-bubble { display: none; }

        .nav-links {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 70%;
            max-width: 300px;
            background-color: white;
            box-shadow: 2px 0 10px rgba(0,0,0,0.1);
            display: flex; 
            flex-direction: column;
            align-items: stretch;
            transform: translateX(-100%);
            z-index: 10002;
            opacity: 1;
        }

        .nav-container.open .nav-links {
            transform: translateX(0);
            max-width: 300px;
        }
        
        .mobile-logo {
            display: block;
            text-align: center;
            padding: 1rem 0;
            border-bottom: 1px solid #eee;
            flex-shrink: 0; /* Prevent logo from shrinking */
        }
        .mobile-logo img {
            width: 80%;
            height: auto;
            max-width: 180px;
        }

        .nav-links ul {
            flex-direction: column;
            align-items: center;
            width: 100%;
            padding: 1rem 0;
            overflow-y: auto; 
            flex-grow: 1; 
            padding-bottom: 4rem;
        }

        .nav-links li {
            margin: 1rem 0;
            width: 80%;
            text-align: center;
        }
        
        .nav-links a { font-size: 1.5rem; }

        .dropdown-menu {
            position: static;
            transform: none;
            box-shadow: none;
            background-color: #f9f9f9;
            width: 100%;
            margin-top: 0.5rem;
            border-radius: 0;
        }
        
        .dropdown > a { cursor: pointer; }

        .logo-container {
            display: none;
        }
    }
  </style>
  <div class="nav-container">
    <button class="hamburger-btn" aria-label="Open navigation menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div class="nav-links">
        <div class="mobile-logo">
            <a href="./index.html">
                <img src="/images/new Vlogo.png" alt="Vfood Logo">
            </a>
        </div>
        <ul>
            <div class="link-bubble"></div>
            <li><a href="./index.html">Home</a></li>
            <li><a href="./about.html">About</a></li>
            <li class="dropdown">
                <a href="#" aria-haspopup="true">Exports & Imports</a>
                <ul class="dropdown-menu">
                    <li><a href="./vfood-uk.html">Vfood UK</a></li>
                    <li><a href="./vfood-kenya.html">Vfood Kenya</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="./services.html" aria-haspopup="true">Services</a>
                <ul class="dropdown-menu">
                    <li><a href="./horeca.html">HORECA</a></li>
                    <li><a href="./warehouse.html">Warehouse & Cold Chain</a></li>
                    <li><a href="./cloud-kitchen.html">Cloud Kitchen</a></li>
                </ul>
            </li>
            <li><a href="./blog.html">Blog</a></li>
            <li><a href="./vfood-uk.html">Vfood UK</a></li>
            <li><a href="./contact.html">Contact</a></li>
        </ul>
    </div>
    <div class="logo-container">
        <a href="./index.html" class="logo">
            <img src="/images/new Vlogo.png" alt="Vfood Logo">
        </a>
    </div>
  </div>
`;

class MainNavigation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._mql = window.matchMedia('(max-width: 768px)');
    this._isMobile = this._mql.matches;
  }

  connectedCallback() {
    this.hamburgerBtn = this.shadowRoot.querySelector('.hamburger-btn');
    this.navContainer = this.shadowRoot.querySelector('.nav-container');
    this.navLinks = this.shadowRoot.querySelector('.nav-links');

    this.hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.navContainer.classList.toggle('open');
    });

    this._handleInteractions();
    this._mql.addEventListener('change', this._handleResize.bind(this));
    
    this.navContainer.addEventListener('click', (e) => {
        if (this._isMobile && this.navContainer.classList.contains('open') && e.target === this.navContainer) {
            this.navContainer.classList.remove('open');
        }
    });
  }
  
  _handleResize(e) {
      this._isMobile = e.matches;
      this.navContainer.classList.remove('open');
      this._rebuildInteractions();
  }
  
  _rebuildInteractions() {
    // A simple way to deal with event listener duplication is to clone and replace the node
    const oldNavLinks = this.navLinks;
    this.navLinks = oldNavLinks.cloneNode(true);
    oldNavLinks.parentNode.replaceChild(this.navLinks, oldNavLinks);
    this._handleInteractions();
  }

  _handleInteractions() {
    const dropdowns = this.shadowRoot.querySelectorAll('.dropdown');

    if (this._isMobile) {
        dropdowns.forEach(dropdown => {
            const trigger = dropdown.querySelector('a');
            const menu = dropdown.querySelector('.dropdown-menu');

            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Close other open dropdowns
                dropdowns.forEach(d => {
                    if (d !== dropdown) {
                        d.querySelector('.dropdown-menu').classList.remove('show');
                    }
                });
                menu.classList.toggle('show');
            });
        });
    } else { // Desktop
        const navList = this.shadowRoot.querySelector('.nav-links ul');
        const linkBubble = this.shadowRoot.querySelector('.link-bubble');
        const links = this.shadowRoot.querySelectorAll('.nav-links > ul > li');

        dropdowns.forEach(dropdown => {
            const menu = dropdown.querySelector('.dropdown-menu');
            let hideTimeout;

            const showMenu = () => {
                clearTimeout(hideTimeout);
                menu.classList.add('show');
            };
            const hideMenu = () => {
                hideTimeout = setTimeout(() => menu.classList.remove('show'), 200);
            };
            
            dropdown.addEventListener('mouseenter', showMenu);
            dropdown.addEventListener('mouseleave', hideMenu);
            dropdown.addEventListener('focusin', showMenu);
            dropdown.addEventListener('focusout', hideMenu);
        });

        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                const bubblePadding = 15;
                linkBubble.style.transform = 'scale(1)';
                linkBubble.style.left = `${link.offsetLeft - (bubblePadding / 2)}px`;
                linkBubble.style.top = `${link.offsetTop - (bubblePadding / 2)}px`;
                linkBubble.style.width = `${link.offsetWidth + bubblePadding}px`;
                linkBubble.style.height = `${link.offsetHeight + bubblePadding}px`;
            });
        });

        navList.addEventListener('mouseleave', () => {
            linkBubble.style.transform = 'scale(0)';
        });
    }
  }
}

customElements.define('main-navigation', MainNavigation);
