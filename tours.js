document.addEventListener("DOMContentLoaded", function() {
    var moreInfoButtons = document.querySelectorAll('.more-info-btn');

    moreInfoButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var tourElement = this.closest('.tour');
            var tourName = tourElement.querySelector('h2').textContent.split(':')[1].trim();

            // Construct the URL with the specific tour's name as a query parameter
            var detailsUrl = 'details.html?tour=' + encodeURIComponent(tourName);

            // Redirect to the details page
            window.location.href = detailsUrl;
        });
    });
});
