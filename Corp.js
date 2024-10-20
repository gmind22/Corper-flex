document.addEventListener("DOMContentLoaded", function() {
    var selectElement = document.getElementById("floatingSelect");
    var phones = []; // Declare the phones variable outside

    // Fetch phone data from JSON
    fetch('Phones.json')
        .then(response => response.json())
        .then(data => {
            console.log("Fetched phone data:", data); // Ensure data is loaded
            phones = data.phones; // Initialize phones with data from JSON

            selectElement.addEventListener("change", function() {
                var selectedPhone = selectElement.value;
                console.log("Dropdown changed to:", selectedPhone); // Log the selected phone name

                // Find the selected phone in the JSON data
                var phoneDetails = phones.find(phone => phone.name === selectedPhone);

                if (phoneDetails) {
                    console.log("Selected phone details:", phoneDetails); // Log the selected phone details
                    
                    // Set phone name (as button)
                    document.getElementById("phone-name").innerText = phoneDetails.name;

                    // Set phone image
                    console.log("Setting image source to:", phoneDetails.image); // Log the image source
                    document.getElementById("phone-image").src = phoneDetails.image;

                    // Set phone specifications
                    var specsList = document.getElementById("phone-specs");
                    specsList.innerHTML = ""; // Clear previous specs
                    for (var key in phoneDetails.specs) {
                        if (key !== "Price") {
                            console.log("Adding spec:", key + ": " + phoneDetails.specs[key]); // Log each spec being added
                            var li = document.createElement("li");
                            li.innerText = key + ": " + phoneDetails.specs[key];
                            specsList.appendChild(li);
                        }
                    }

                    // Set price button href to "bvn.html"
                    var priceButton = document.getElementById("phone-price");
                    priceButton.innerText = "Price: ₦" + phoneDetails.specs["Price"];
                    
                    // Ensure the button links to 'bvn.html' after selecting a phone
                    console.log("Setting the price button link to 'bvn.html'");
                    priceButton.href = "bvn.html"; // Update the href to point to bvn.html
                    
                    // Show the phone details section
                    document.getElementById("phone-details").style.display = "block"; // Make it visible
                    document.getElementById("phone-details").scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to phone details
                } else {
                    console.log("Phone details not found for:", selectedPhone); // Log if no phone was found
                    document.getElementById("phone-details").style.display = "none"; // Hide if no details found
                }
            }); // End of change event listener
        }) // End of fetching data
        .catch(error => {
            console.error("Error fetching phone data:", error); // Catch errors in fetching
        }); // End of catch block
}); // End of DOMContentLoaded

document.getElementById('bvn').addEventListener('keypress', function(event) {
    // Check if the Enter key is pressed
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission

        // Get the BVN value
        const bvnValue = this.value;

        // Validate the BVN length (assuming it should be 11 digits)
        if (bvnValue.length === 11 && /^\d+$/.test(bvnValue)) {
            // Navigate to the next page or stage
            window.location.href = 'tellUs.html'; // Change this to your desired URL
        } else {
            alert('Please enter a valid 11-digit BVN.');
        }
    }
});