document.getElementById('toggleSidebar').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = this[0].value;
    const serviceType = this[1].value;
    const email = this[2].value;

    const serviceList = document.getElementById('serviceList');
    const newService = document.createElement('div');
    newService.classList.add('service');
    
    // Use backticks `` for template literals
    newService.innerHTML = `<strong>${name}</strong> offers ${serviceType} (Contact: ${email})`;
    
    serviceList.appendChild(newService);
    
    this.reset(); // Clear the form
});

// Handle booking submission
function handleBooking(event) {
    event.preventDefault();
    
    const serviceName = event.target[0].value;
    const bookingDate = event.target[1].value;

    // Use backticks for the alert message
    alert(`Successfully booked ${serviceName} on ${bookingDate}!`);
    event.target.reset(); // Clear the form
}

// Handle review submission
function handleReview(event) {
    event.preventDefault();
    
    const reviewerName = event.target[0].value;
    const reviewText = event.target[1].value;

    const reviewList = document.getElementById('reviewList');
    const newReview = document.createElement('div');
    newReview.classList.add('review');
    
    // Use backticks for template literals
    newReview.innerHTML = `<strong>${reviewerName}:</strong> ${reviewText}`;
    
    reviewList.appendChild(newReview);
}
document.getElementById('paymentRedirectButton').addEventListener('click', function() {
    window.location.href = 'payment.html';  // This will redirect to payment.html
});
