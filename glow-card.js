class GlowCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    --glow-color-1: #9EF01A; /* Lime Green */
                    --glow-color-2: #FACC15; /* Golden Orange */
                    display: block; /* The component itself should be a block-level element */
                }

                .card {
                    width: 100%;
                    height: 250px;
                    background: #232323;
                    border-radius: 15px;
                    padding: 2rem;
                    box-sizing: border-box;
                    position: relative;
                    overflow: hidden;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    box-shadow: 0 0 10px rgba(0,0,0,0.5);
                }

                .card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 15px 35px rgba(0,0,0,0.5);
                }

                /* The main colorful spotlight */
                .card::before {
                    content: '';
                    position: absolute;
                    top: var(--mouse-y, -1000px);
                    left: var(--mouse-x, -1000px);
                    width: 300px;
                    height: 300px;
                    background: radial-gradient(circle at center, 
                        var(--glow-color-1), 
                        var(--glow-color-2), 
                        transparent 50%
                    );
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0.8);
                    filter: blur(60px);
                    pointer-events: none;
                    transition: opacity 0.3s ease, transform 0.3s ease;
                }

                .card:hover::before {
                    opacity: 0.4;
                    transform: translate(-50%, -50%) scale(1);
                }

                /* The illuminated border */
                .card::after {
                    content: '';
                    position: absolute;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    border-radius: 15px;
                    background: radial-gradient(
                        250px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px),
                        rgba(255, 255, 255, 0.6),
                        transparent
                    );
                    padding: 1px;
                    -webkit-mask: \
                        linear-gradient(#fff 0 0) content-box, \
                        linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                }

                .content {
                    position: relative;
                    z-index: 2;
                }
            </style>
            <div class="card">
                <div class="content">
                    <slot></slot> <!-- This is where the user's content will go -->
                </div>
            </div>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.cardElement = this.shadowRoot.querySelector('.card');
    }

    connectedCallback() {
        this.cardElement.addEventListener('mousemove', this.handleMouseMove.bind(this));
        this.cardElement.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
    }

    disconnectedCallback() {
        this.cardElement.removeEventListener('mousemove', this.handleMouseMove.bind(this));
        this.cardElement.removeEventListener('mouseleave', this.handleMouseLeave.bind(this));
    }

    handleMouseMove(e) {
        const rect = this.cardElement.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        this.cardElement.style.setProperty('--mouse-x', `${x}px`);
        this.cardElement.style.setProperty('--mouse-y', `${y}px`);
    }

    handleMouseLeave() {
        this.cardElement.style.removeProperty('--mouse-x');
        this.cardElement.style.removeProperty('--mouse-y');
    }
}

customElements.define('glow-card', GlowCard);
