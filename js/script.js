// ===============================
// Ocean Crown Resort - JS
// ===============================

// Contact Form Validation
function validateContactForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields.");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}

// Booking Form Validation
function validateBookingForm() {
  const name = document.getElementById("bname").value;
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;

  if (name === "" || checkin === "" || checkout === "") {
    alert("Please complete booking details.");
    return false;
  }

  alert("Booking request submitted!");
  return true;
}
