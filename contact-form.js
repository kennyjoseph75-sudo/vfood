
import { db } from './firebase-init.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact-form form');
    const successMessage = document.getElementById('success-message');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = contactForm.querySelector('#name').value;
            const email = contactForm.querySelector('#email').value;
            const subject = contactForm.querySelector('#subject').value;
            const message = contactForm.querySelector('#message').value;
            const submitButton = contactForm.querySelector('button[type="submit"]');

            // Basic validation
            if (!name || !email || !subject || !message) {
                alert('Please fill out all fields.');
                return;
            }

            submitButton.disabled = true;
            submitButton.textContent = 'Submitting...';

            try {
                // Add a new document with a generated ID to the "contact-submissions" collection
                await addDoc(collection(db, "contact-submissions"), {
                    name: name,
                    email: email,
                    subject: subject,
                    message: message,
                    submittedAt: serverTimestamp()
                });

                // Hide the form and show the success message
                contactForm.style.display = 'none';
                successMessage.style.display = 'block';

            } catch (error) {
                console.error("Error adding document: ", error);
                alert('There was an error submitting your message. Please try again later.');
            } finally {
                // This part is no longer strictly necessary if the form is hidden, but we'll leave it for now.
                submitButton.disabled = false;
                submitButton.textContent = 'Submit';
            }
        });
    }
});
