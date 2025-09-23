# Vfood International Website Blueprint

## CORE DIRECTIVE: AVOID SCRIPT-LIKE BEHAVIOR

**This section is a mandatory reminder for the AI assistant at the start of every session.**

**Incident Analysis:** During a previous session, a critical error occurred during a backup procedure. The AI assistant, despite reading the `backup-protocol.md` and `blueprint.md` files, executed a backup command literally without synthesizing the information with the project\'s actual context. This resulted in an incorrect backup that was placed in the wrong directory and included previous backup files.

**Root Cause:** The failure was not a lack of information, but a failure of process. The AI acted as a simple "script-runner," prioritizing the literal execution of a documented command over the intelligent application of that command within the project\'s established structure. It failed to perform necessary sanity checks and did not adapt the instructions to the reality of the file system.

**Mandatory Protocol: Analyze, Plan, Verify, then Execute (APVE)**

To prevent this from ever happening again, the AI assistant **must** adhere to the following four-step process for **every** request, especially those involving file system modifications, backups, or the execution of terminal commands:

1.  **Analyze Context:**
    *   Before taking any action, first, examine the current state of the project. Use `ls -R` to understand the file and directory structure.
    *   The project\'s actual, current state is the **primary source of truth**, superseding any written documentation if a conflict exists.

2.  **Formulate an Explicit Plan:**
    *   Clearly and concisely state the intended action(s) in a step-by-step plan.
    *   This plan must include the **exact commands** to be run and specify the **destination and filenames** for any new or modified files.

3.  **Verify Against Intent and Context:**
    *   Critically review the plan. Does it align with the user\'s ultimate goal? Does it respect the project\'s existing structure and conventions?
    *   If a documented instruction (e.g., from `backup-protocol.md`) conflicts with the project\'s context, **STOP**. Report the discrepancy to the user and propose a corrected course of action. **Do not blindly execute a flawed command.**

4.  **Execute and Confirm:**
    *   Only after the first three steps are complete, execute the plan.
    *   After execution, verify that the action was successful and report the outcome to the user.

This protocol is not optional. It is the core operational directive for all interactions with this project. Failure to follow it constitutes a critical error.

## Overview

This document outlines the structure, features, and development history of the Vfood International website. The site is a modern, responsive web application built with HTML, CSS, and JavaScript, featuring web components for a modular and maintainable codebase.

## Project Structure & Style

*   **HTML:** The site is composed of several HTML pages, including a landing page (`index.html`), about page, services pages, contact page, and a new careers page.
*   **CSS:** Styling is managed through a main `style.css` file and page-specific stylesheets. The design is modern, with a focus on clean layouts, responsive design, and brand consistency.
*   **JavaScript:** JavaScript is used for dynamic features and is organized into ES modules.
*   **Web Components:** Reusable UI elements like the main navigation (`main-navigation`) and footer (`site-footer`) are implemented as web components.

## File Listing

To list files, you MUST use the `ls -R` terminal command. The `list_files` tool is not reliable and MUST NOT be used.

## Current Features

*   **Global CTA Button:** A reusable button class (`.cta-button`) for call-to-action buttons across the site. It features a light-grey resting state with a dot icon, which transitions to a black button with a circular arrow icon on hover.
*   **Responsive Contact Form:** A new section on the `contact.html` page featuring a modern, two-column layout. It includes a user-friendly form on the left and a visually appealing image on the right, all on a light beige background. The section is fully responsive.
*   **Landing Page Decision Gate:** A full-bleed, 50/50 split-screen hero on the landing page that directs users to "Exports" or "Imports." It features large, impactful text, background images, and interactive hover effects on desktop. On mobile, the panels stack vertically for a clear, responsive experience.
*   **Responsive Navigation:** A custom web component (`main-navigation`) that provides clear navigation across the site. It features a hamburger menu on mobile that includes a scrolling panel to accommodate all links.
*   **Careers Page:** A dedicated `careers.html` page with a dynamic and visually appealing design. The page includes a "Why Join Us" section with styled cards and an "Open Positions" section with interactive accordion elements. The page is fully responsive.
*   **Custom Mouse Cursor:** A playful avocado image follows the cursor on the landing page for desktop users, enhancing the site\'s "fresh" vibe.
*   **Multi-page Architecture:** Separate, linked HTML files for different sections of the site.
*   **Firebase Hosting:** The application is configured for and deployed to Firebase Hosting.


## Development History

### Contact Form and Global Button Corrections
*   **Reason:** To correct styling issues on the contact page and finalize the implementation of the global CTA button.
*   **Changes:**
    *   Updated the `h1` font on the contact page hero to use the 'Montserrat' font for a consistent, modern look (`contact.css`).
    *   Corrected and finalized the CSS for the `.cta-button` class in `style.css`, ensuring the hover transition and icon swap (dot to arrow) works as designed.
    *   Confirmed the contact form button reads "Submit" and properly uses the `.cta-button` class (`contact.html`).

### Contact Form Implementation
*   **Reason:** To provide users with a clear and modern way to get in touch with Vfood.
*   **Changes:**
    *   Added a new "Contact Form" section to `contact.html`.
    *   The section uses a two-column layout: a form on the left and an image on the right.
    *   The form includes fields for "Your name," "Email," "Subject," and "Message."
    *   The image was updated to `/images/Contact-Page/avocado 2.png`.
    *   Created extensive new styles in `contact.css` to define the layout, colors, fonts, and responsiveness of the form and its container.
    *   The section is fully responsive, stacking the columns on smaller screens for better usability.

### Backup Milestone: Footer Image and Logo Fixes
*   **Reason:** Project milestone reached. The footer logo and background image have been successfully updated and are displaying correctly.
*   **Changes:**
    *   Replaced the problematic CSS-based footer logo with a standard `<img>` tag pointing to `/images/new Vlogo.png`.
    *   Updated the footer background image to `/images/new green avocado lady 2.png`.
    *   Confirmed all footer elements are now rendering as expected.

### New Footer Logo Implementation
*   **Reason:** After multiple failed attempts to fix the display of the original footer logo, the effort was abandoned. A new, user-provided logo was implemented to resolve the issue definitively.
*   **Changes:**
    *   Removed the previous `<div class="footer-logo"></div>` and all associated CSS, including the problematic `mask-image` and `Base64` attempts.
    *   Added a new, standard `<img src="images/new Vlogo.png" alt="Vfood Logo" class="footer-logo">` to the `footer.js` web component.
    *   Added a simple `.footer-logo` CSS rule to control the width and height of the new logo.

### Footer Image Update
*   **Reason:** To update the image in the website footer.
*   **Changes:**
    *   Updated the `footer.js` web component to change the image source from `images/new green avocado lady.png` to `images/new green avocado lady 2.png`.

### Backup Milestone: Landing Page Image Updates
*   **Reason:** Project milestone reached. The landing page background images for both the Import and Export panels have been updated, and a consistent 50% tint overlay has been applied to both to ensure text legibility.
*   **Changes:**
    *   Updated the `style.css` file to change the background image of the `.split.right` class to `images/Afro American girl and mum in kitchen.png`.
    *   Increased the `rgba` alpha value in the `linear-gradient` for the `.split.right` class to `0.5` to create a 50% tint overlay.

### Vfood Import Image Update
*   **Reason:** To replace the background image on the Vfood Import section of the landing page.
*   **Changes:**
    *   Updated the `style.css` file to change the background image of the `.split.right` class to `images/Afro American girl and mum in kitchen.png`.

### Vfood Export Image and Overlay Update
*   **Reason:** To replace the background image on the Vfood Export section of the landing page and increase the overlay to improve text legibility.
*   **Changes:**
    *   Updated the `style.css` file to change the background image of the `.split.left` class to `images/white avocado lady.png`.
    *   Increased the `rgba` alpha value in the `linear-gradient` for the `.split.left` class to `0.5` to create a 50% tint overlay.

### Careers Page and Stylesheet Versioning
*   **Reason:** To add a new "Careers" section to the website and to update asset versioning to force browsers to load the latest styles.
*   **Changes:**
    *   Created a new `careers.html` file with a comprehensive layout including a hero, "Why Join Us" section, and "Open Positions".
    *   Created a corresponding `careers.css` for specific styling of the new page.
    *   Added a "Careers" link to the main navigation (`nav.js`) and the site footer (`footer.js`).
    *   Updated the version query string for all CSS and JavaScript links across all HTML files to `?v=1758432487` to ensure style changes are reflected immediately for all users.
    *   Updated `blueprint.md` to reflect the latest changes.

### Backup Milestone: Asset Versioning and Iconography Complete
*   **Reason:** Project milestone reached. All assets have been versioned and iconography has been added sitewide.
*   **Changes:**
    *   Added a version query string to all local CSS and JavaScript file links (e.g., `style.css?v=1715883602`).
    *   Added the Font Awesome CSS library to all HTML pages to enable the use of a wide range of icons throughout the site.

### Asset Versioning and Iconography
*   **Reason:** To ensure browsers load the latest versions of assets and to incorporate a consistent icon library.
*   **Changes:**
    *   Added a version query string to all local CSS and JavaScript file links (e.g., `style.css?v=1715883602`).
    *   Added the Font Awesome CSS library to all HTML pages to enable the use of a wide range of icons throughout the site.

### Backup Milestone: Landing Page & Core Navigation Complete
*   **Reason:** Project milestone reached. The primary landing page and core navigation are functionally complete and visually polished.
*   **Changes:**
    *   Implemented the full-bleed, split-screen landing page ("decision gate").
    *   Fixed the mobile navigation scrolling issue to ensure all menu items are accessible.
    *   Added the "Vfood UK" link to the main navigation menu.

### Landing Page & Navigation (Current State)
*   **Implemented Landing page:** The primary landing page (`index.html`) has been built as a "decision gate" with a two-panel split layout for "Exports" and "Imports", as specified in the project requirements.
*   **Corrected Mobile Navigation:** Fixed an issue where the mobile menu was not scrollable, ensuring all links are accessible on smaller screens.
*   **Added "Vfood UK" Link:** The main navigation component has been updated to include the required "Vfood UK" link.

### Previous Updates
*   **Deployment & Refactoring:**
    *   Enabled Firebase and deployed the site.
    *   Corrected `firebase.json` to ensure all project files were included in the deployment.
    *   Renamed `vfood-uk.html` to `vfood-exports.html` and `vfood-kenya.html` to `vfood-imports.html`.
    *   Updated all navigation links and buttons to reflect the file renames.
*   **Styling and UX:**
    *   Applied a semi-transparent "frosted glass" effect to the navigation bar.
    *   Updated button and heading text on the landing page for clarity.
