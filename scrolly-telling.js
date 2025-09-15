const scrollyTemplate = document.createElement('template');
scrollyTemplate.innerHTML = `
    <style>
        :host { display: block; width: 100%; }
        .scrolly-container { max-width: 900px; margin: 0 auto; padding: 4rem 0; }
        .scrolly-content { margin-bottom: 2rem; }
        .scrolly-card-deck { display: flex; justify-content: space-between; gap: 1.5rem; margin-bottom: 1rem; padding: 0; }
        .scrolly-card { flex: 1; text-align: left; color: var(--light-text, #888); transition: color 0.4s ease; }
        .scrolly-card.active { color: var(--dark-text, #1a1a1a); }
        .scrolly-card-header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; }
        .scrolly-card-title { font-family: 'Archivo Black', sans-serif; font-size: 1.25rem; margin: 0; }
        .scrolly-card-description { font-size: 0.95rem; line-height: 1.5; margin: 0; }
        .scrolly-slider-track { position: relative; width: 100%; height: 2px; background-color: #ddd; }
        .scrolly-slider { position: absolute; height: 100%; background-color: var(--dark-text, #1a1a1a); width: 0; left: 0; }
        .scrolly-image-container { position: relative; width: 100%; height: 85vh; border-radius: 20px; overflow: hidden; margin-top: 2rem; background-color: #e0e0e0; }
        .scrolly-image { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transform: scale(1.05); transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out; }
        .scrolly-image.active { opacity: 1; transform: scale(1); }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
    </style>
    <div class="scrolly-container">
        <div class="scrolly-content">
            <div class="scrolly-card-deck"></div>
            <div class="scrolly-slider-track">
                <div class="scrolly-slider"></div>
            </div>
        </div>
        <div class="scrolly-image-container"></div>
    </div>
`;

class ScrollyTelling extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(scrollyTemplate.content.cloneNode(true));

        this.init = this.init.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.isInitialized = false;
    }

    connectedCallback() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
        window.addEventListener('resize', this.init, { passive: true });
    }

    disconnectedCallback() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.init);
    }

    set items(data) {
        this._items = data;
        this.render();
    }

    render() {
        const cardDeck = this.shadowRoot.querySelector('.scrolly-card-deck');
        const imageContainer = this.shadowRoot.querySelector('.scrolly-image-container');
        cardDeck.innerHTML = '';
        imageContainer.innerHTML = '';

        (this._items || []).forEach((item, index) => {
            const card = document.createElement('div');
            card.classList.add('scrolly-card');
            card.dataset.index = index;
            card.innerHTML = `<div class="scrolly-card-header"><span class="material-symbols-outlined">${item.icon || 'circle'}</span><h3 class="scrolly-card-title">${item.title}</h3></div><p class="scrolly-card-description">${item.description}</p>`;
            cardDeck.appendChild(card);

            const image = document.createElement('img');
            image.classList.add('scrolly-image');
            image.dataset.index = index;
            image.src = item.imageUrl;
            imageContainer.appendChild(image);
        });

        // Schedule the init function to run after the browser has painted the new elements.
        requestAnimationFrame(this.init);
    }

    init() {
        this.cards = Array.from(this.shadowRoot.querySelectorAll('.scrolly-card'));
        if (!this.cards.length || this.cards[0].offsetWidth === 0) {
            return; // Layout not ready, wait for another trigger.
        }

        this.isInitialized = true;

        this.images = Array.from(this.shadowRoot.querySelectorAll('.scrolly-image'));
        this.slider = this.shadowRoot.querySelector('.scrolly-slider');
        this.activeIndex = -1;

        this.slider.style.width = `${this.cards[0].offsetWidth}px`;
        this.sliderStartPosition = this.cards[0].offsetLeft;
        const sliderEndPosition = this.cards[this.cards.length - 1].offsetLeft;
        this.sliderTravelDistance = sliderEndPosition - this.sliderStartPosition;

        this.handleScroll();
    }

    handleScroll() {
        if (!this.isInitialized) return;

        const { top, height } = this.getBoundingClientRect();
        if (height === 0) return;

        const animationStartPoint = window.innerHeight * 0.5;
        let progress = (animationStartPoint - top) / height;
        progress = Math.max(0, Math.min(progress, 1));

        const newSliderLeft = this.sliderStartPosition + (this.sliderTravelDistance * progress);
        this.slider.style.left = `${newSliderLeft}px`;

        const sliderMidPoint = newSliderLeft + (this.slider.offsetWidth / 2);
        const newActiveIndex = this.cards.findIndex(card => {
            const cardStart = card.offsetLeft;
            const cardEnd = card.offsetLeft + card.offsetWidth;
            return sliderMidPoint >= cardStart && sliderMidPoint < cardEnd;
        });

        if (newActiveIndex !== -1 && newActiveIndex !== this.activeIndex) {
            this.activeIndex = newActiveIndex;
            this.cards.forEach((c, i) => c.classList.toggle('active', i === newActiveIndex));
            this.images.forEach((img, i) => img.classList.toggle('active', i === newActiveIndex));
        }
    }
}

if (!customElements.get('scrolly-telling')) {
    customElements.define('scrolly-telling', ScrollyTelling);
}
