document.getElementById('linkedin').onclick = function() {
    window.open('https://www.linkedin.com/in/thikmanik-nongrang-a2632029', '_blank');
};


document.getElementById('whatsapp').onclick = function() {
    window.open('https://wa.me/6009159849', '_blank');
};


// Get the contact details container
const contactDetails = document.getElementById('contact-details');

// Create the contact number and email elements
const contactNumber = document.createElement('p');
contactNumber.innerHTML = `Contact Number: <a href="tel:6009159849">6009159849</a>`;

const email = document.createElement('p');
email.innerHTML = `Email: <a href="mailto:cse230001077@iiti.ac.in">cse230001077@iiti.ac.in</a>`;

// Append the elements to the contact details section
contactDetails.appendChild(contactNumber);
contactDetails.appendChild(email);



