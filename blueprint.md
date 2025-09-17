
# Vfood Website Blueprint

## Overview

This document outlines the structure, design, and features of the Vfood website. It serves as a single source of truth for the project, from its initial version to the current state.

## Project Outline

### Design and Style

*   **Typography:**
    *   Headings: "Braven" (a custom font), with `<h1>` elements styled in uppercase.
    *   Body: "Inter"
*   **Color Palette:**
    *   Left Split (Exports): `#5a733c` (green)
    *   Right Split (Imports): `#cc9436` (gold)
*   **Layout:**
    *   **Landing Page:** A split-screen layout with hover effects. The screen is divided into two vertical sections, "Exports" and "Imports", which expand on hover.
    *   **Navigation:** A main navigation bar is included on all pages.
    *   **Footer:** A site footer is included on all pages.
*   **Styling:**
    *   Global styles are managed in `style.css`.
    *   Page-specific styles for the "About" and "Contact" pages are managed in `about.css` and `contact.css`, respectively.

### Features

*   **Interactive Landing Page:** The split-screen landing page provides a visually engaging introduction to the two main sections of the site.
*   **Custom Font:** The use of the "Braven" font for headings gives the site a unique brand identity.
*   **Mouse Trailer:** A custom mouse trailer (an avocado image) is implemented on the landing page for a playful user experience.

## Completed Task: Fix Font and Style Issues

### Summary of Changes

*   **Replaced the "Kristal" font with "Braven"** across the entire project.
*   **Styled all `<h1>` headers to be uppercase**.
*   **Centralized page-specific styles** by creating `about.css` and `contact.css` and removing all inline styles from `about.html` and `contact.html`.
*   **Linked the new stylesheets** to their corresponding HTML pages.
*   **Removed the unnecessary font import** from the HTML files, as all fonts are now managed by the global stylesheet.

