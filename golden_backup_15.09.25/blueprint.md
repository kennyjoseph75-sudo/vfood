# vFood Application Blueprint

## Overview

vFood is a modern, responsive web application for a global food trade company. It serves as a digital storefront, showcasing the company's import and export services, and providing information about the company. The application is built using standard web technologies (HTML, CSS, JavaScript) and employs modern development practices like Web Components for reusable UI elements.

A key feature of the landing page is an interactive experience with a custom mouse trailer and a split-screen hover effect. This was implemented to create a unique and engaging user experience. The development process involved resolving several technical challenges, including script conflicts and browser caching issues, which have been successfully addressed. The mouse trailer has been customized to be a branded, wobbling avocado, adding a playful and memorable element to the site.

## Implemented Styles, Designs, and Features

### Global
*   **Typography:** 'Archivo Black' for primary headlines, 'Poppins' and 'Archivo' for other text.
*   **Color Palette:** 
    *   `--vfood-green: #5a733c`
    *   `--vfood-cream: #EAE5E1`
    *   `--vfood-text-dark: #333`
*   **Structure:** The site is multi-page, including Home, About, Services, Contact, Exports, Imports, and a UK-specific page.

### Components
*   **`main-navigation`:** A custom web component for the site's primary navigation. It has been correctly implemented on all pages.
*   **`site-footer`:** A custom web component for the site-wide footer, implemented on all pages.

### Interactive Features
*   **Avocado Mouse Trailer:**
    *   A custom mouse trailer is implemented on the landing page, replacing the default cursor with an avocado image (`images/avocado.png`) for a unique, branded visual effect.
    *   The avocado's appearance is defined in `style.css`. It is smaller than the previous blob, and features a subtle "wobble" animation using `@keyframes` and `transform: rotate()` for a dynamic, playful feel.
    *   The `mouse-trailer.js` script controls the avocado's position, making it smoothly follow the user's cursor.
    *   The avocado intelligently disappears and the default cursor reappears when hovering over the main navigation menu.
*   **Split-Screen Hover Effect:**
    *   The landing page features a split-screen layout that responds to the user's mouse position.
    *   The logic for this effect is consolidated within `mouse-trailer.js`, which adds `hover-left` or `hover-right` classes to the landing container based on the cursor's horizontal position.

### Technical Implementation
*   **Script Consolidation:** The functionality of the original `main.js` (for the split-screen effect) and `mouse-trailer.js` were merged into a single `mouse-trailer.js` script. This resolved a conflict where both scripts were listening for `mousemove` events, causing interference.
*   **Cache Busting:** A cache-busting query (`?v=...`) was added to the script tags in `index.html`. This ensures that any updates to the JavaScript files are immediately loaded by the browser, preventing issues with outdated, cached scripts.

### Pages
*   **Landing Page (`index.html`):** Features the consolidated interactive avocado mouse trailer and split-screen hero section.
*   **Static Pages:** All pages (`about.html`, `services.html`, etc.) correctly load the shared components.
*   **Blog Page:** A new `blog.html` page has been added.

---

## Current Task

All tasks are complete. The application is in a stable and functional state.

--- 
