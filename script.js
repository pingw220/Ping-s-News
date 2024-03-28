// script.js
document.getElementById('subscription-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Here you'll need to add the AJAX request to send this data to your serverless function
    // For now, we'll just log to the console
    console.log('Name:', name, 'Email:', email);
    
    // Add the AJAX request code here in the next steps
});
