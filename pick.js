document.addEventListener("DOMContentLoaded", function() {
    // Ensure elements exist before adding event listeners
    const campCard = document.getElementById('campCard');
    const storeCard = document.getElementById('storeCard');
    const campDropdown = document.getElementById('campDropdown');
    const storeInput = document.getElementById('storeInput');
    const pickupOptions = document.querySelectorAll('input[name="pickupOption"]');

    // Check if the radio buttons exist
    if (pickupOptions.length > 0) {
        // Attach change event listener
        $('input[name="pickupOption"]').change(function () {
            if (this.value === 'camp') {
                // Camp pickup is selected
                $('#campCard').addClass('active');
                $('#storeCard').removeClass('active');
                $('#campDropdown').show();
                $('#storeInput').hide();
            } else if (this.value === 'store') {
                // Store pickup is selected
                $('#storeCard').addClass('active');
                $('#campCard').removeClass('active');
                $('#campDropdown').hide();
                $('#storeInput').show();
            }
        });
    } else {
        console.error('Pickup option elements not found');
    }

    // Ensure the form elements are properly hidden or shown based on default selection
    campDropdown.style.display = 'none';
    storeInput.style.display = 'none';
});