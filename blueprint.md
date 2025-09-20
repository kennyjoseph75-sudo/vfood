# Vfood International Website Blueprint

## Overview

This document outlines the structure, features, and development history of the Vfood International website. The site is a modern, responsive web application built with HTML, CSS, and JavaScript, featuring web components for a modular and maintainable codebase.

## Project Structure & Style

*   **HTML:** The site is composed of several HTML pages, including a landing page (`index.html`), about page, services pages, and contact page.
*   **CSS:** Styling is managed through a main `style.css` file. The design is modern, with a focus on clean layouts, responsive design, and brand consistency.
*   **JavaScript:** JavaScript is used for dynamic features and is organized into ES modules.
*   **Web Components:** Reusable UI elements like the main navigation (`main-navigation`) and footer (`site-footer`) are implemented as web components.

## File Listing

To list files, you MUST use the `ls -R` terminal command. The `list_files` tool is not reliable and MUST NOT be used.

## Current Features

*   **Landing Page Decision Gate:** A full-bleed, 50/50 split-screen hero on the landing page that directs users to "Exports" or "Imports." It features large, impactful text, background images, and interactive hover effects on desktop. On mobile, the panels stack vertically for a clear, responsive experience.
*   **Responsive Navigation:** A custom web component (`main-navigation`) that provides clear navigation across the site. It features a hamburger menu on mobile that includes a scrolling panel to accommodate all links. The menu includes a "Vfood UK" link.
*   **Custom Mouse Cursor:** A playful avocado image follows the cursor on the landing page for desktop users, enhancing the site's "fresh" vibe.
*   **Multi-page Architecture:** Separate, linked HTML files for different sections of the site.
*   **Firebase Hosting:** The application is configured for and deployed to Firebase Hosting.

## Development History

### Backup Milestone: Landing Page & Core Navigation Complete
*   **Reason:** Project milestone reached. The primary landing page and core navigation are functionally complete and visually polished.
*   **Changes:**
    *   Implemented the full-bleed, split-screen landing page ("decision gate").
    *   Fixed the mobile navigation scrolling issue to ensure all menu items are accessible.
    *   Added the "Vfood UK" link to the main navigation menu.

### Landing Page & Navigation (Current State)
*   **Implemented Landing Page:** The primary landing page (`index.html`) has been built as a "decision gate" with a two-panel split layout for "Exports" and "Imports", as specified in the project requirements.
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
