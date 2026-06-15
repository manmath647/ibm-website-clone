$(document).ready(function() {
    $('.gridbox').hover(
        function() {
            // On mouseenter: switch to long text
            var $box = $(this);
            var $text = $box.find('.gridtext');
            var longText = $box.attr('data-long');
            
            $text.fadeOut(150, function() {
                $(this).text(longText).fadeIn(150);
            });
        },
        function() {
            // On mouseleave: switch back to short text
            var $box = $(this);
            var $text = $box.find('.gridtext');
            var shortText = $box.attr('data-short');
            
            $text.fadeOut(150, function() {
                $(this).text(shortText).fadeIn(150);
            });
        }
    );
    // Mega Menu Interactions: Update right content title and active state on click
    $('.mega-sidebar-link').click(function(e) {
        e.preventDefault(); // Prevent page scroll jump
        e.stopPropagation(); // Prevent Bootstrap dropdown from closing
        
        // Remove active class from all sidebar links
        $('.mega-sidebar-link').removeClass('active');
        // Add active class to the currently clicked link
        $(this).addClass('active');
        
        // Update the title in the right content area to match the clicked link's text
        var newTitle = $(this).text();
        $('.mega-content-title').html(newTitle + ' &rarr;');
    });
});
