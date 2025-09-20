
# Bug Report: Navigation Dropdown

**ID:** 001
**Date:** 2024-05-16

**Status:** Closed

## **Description:**

The main navigation's dropdown menu for "Exports & Imports" is not functioning correctly within the IDE's live preview environment. The dropdown fails to appear when the user hovers over the parent link.

However, the dropdown menu functions as expected when the application is deployed and viewed on a remote server.

## **Environment:**

- **Failing:** IDE Live Preview
- **Working:** Remote Deployment

## **Symptoms:**

- In the IDE preview, hovering over the "Exports & Imports" navigation link does not trigger the dropdown menu.
- No console errors are immediately apparent in the IDE's developer tools.
- The rest of the navigation's functionality (e.g., link bubble effect, hamburger menu) appears to be working.

## **Hypothesis:**

The issue is likely related to one of the following:

1.  **Event Handling:** A discrepancy in how `mouseenter` and `mouseleave` events are handled between the IDE's preview and a standard browser.
2.  **CSS Rendering:** A problem with CSS rendering, particularly with the `.show` class that controls the `display` property of the dropdown menu in the IDE's preview.
3.  **JavaScript Timing:** A race condition or timing issue related to the `setTimeout` function used to delay the hiding of the menu.

## **Replication Steps:**

1.  Open the project in the IDE.
2.  Wait for the live preview to load.
3.  Hover the mouse over the "Exports & Imports" link in the main navigation.
4.  **Expected:** The dropdown menu should appear.
5.  **Actual:** The dropdown menu does not appear.

## **Resolution:**

**Date:** 2024-05-16

- **Action:** Added `focusin` and `focusout` event listeners to the dropdown menu in `nav.js`.
- **Reasoning:** The IDE's preview environment was not consistently firing `mouseenter` and `mouseleave` events. The `focusin` and `focusout` events provide a more robust way to handle the dropdown's visibility, ensuring it works with both mouse and keyboard interactions.
- **Result:** The dropdown menu now functions correctly in the IDE preview.
