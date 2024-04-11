document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var firstName = document.getElementById("first_name").value;
  var lastName = document.getElementById("last_name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var company = document.getElementById("company").value;

  var subject = "Contact Form Submission";
  var body = "First Name: " + firstName + "\n";
  body += "Last Name: " + lastName + "\n";
  body += "Email: " + email + "\n";
  body += "Phone: " + phone + "\n";
  body += "Company: " + company;

  var mailtoLink = "mailto:Support@curisprn.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

  window.location.href = mailtoLink;
});
