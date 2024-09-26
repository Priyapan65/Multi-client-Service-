// Payment options page - handle button clicks
document.addEventListener('DOMContentLoaded', function () {
    const bankButtons = document.querySelectorAll('.bank-button');
    const selectedBankText = document.getElementById('selected-bank');

    bankButtons.forEach(button => {
        button.addEventListener('click', function () {
            const bankName = this.innerText;
            selectedBankText.innerHTML = `You have selected: <strong>${bankName}</strong> as your payment method.`;
            // Simulate further actions like opening payment gateways here
            alert(`Redirecting to ${bankName} payment gateway...`);
        });
    });
});
