document.addEventListener('DOMContentLoaded', function() {
  // DOM Manipulation
  var sendButton = document.querySelector('form button[type="submit"]');
  sendButton.addEventListener('click', function(event) {
    event.preventDefault();
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageTextarea = document.getElementById('message');

    // Form Handling
    var name = nameInput.value;
    var email = emailInput.value;
    var message = messageTextarea.value;
    // Change the text content of an element
      document.getElementById('myElement').textContent = 'Updated text';

      // Change the style of an element
      document.getElementById('myElement').style.color = 'red';

      // Add or remove CSS classes from an element
      document.getElementById('myElement').classList.add('active');
      document.getElementById('myElement').classList.remove('inactive');


    // Data Processing and Presentation
    if (name && email && message) {
      var output = 'Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message;
      alert(output);
      nameInput.value = '';
      emailInput.value = '';
      messageTextarea.value = '';
    } else {
      alert('Please fill in all fields.');
    }
  });
});
