$(document).ready(function() {

    $('ul.features #photographers').click(function() {
        window.location.href = '/founders';
        return false;
    });

    $('ul.features #prices').click(function() {
        var index = $(this).data('id');
        console.log(index);
        if(index % 2 == 1) {
            $(this).html("<h3 style=\"text-align: center;\">Our Prices</h3><p style=\"text-align: center;\">There is no need to compromise quality and cost with Old Westfield Photography.</p>");
        } else {
            $(this).html("<h3 style=\"text-align: center;\">Our Prices</h3><h4 class=\"animated bounceIn\">$45 per hour</h4>");
        }
        index += 1;
        console.log(index);
        $(this).data("id", index);
    });

    $('ul.features #tools').click(function() {
        var tools = [
            "<h4>Our Tools</h4>",
            "<ul class=\"icons animated bounceIn\">",
                "<li><a href=\"http://www.adobe.com/products/photoshop/selector.html\"><img class=\"tool_img\" src=\"/static/images/photoshop.png\" width=\"50%\"></a></li>",
                "<li><a href=\"https://www.adobe.com/products/photoshop-lightroom.html\"><img class=\"tool_img\" src=\"/static/images/lightroom.png\" width=\"50%\"></a></li>",
            "</ul>",
        ].join("");
        var og = [
            "<h3 style=\"text-align: center;\">Our Tools</h3>",
            "<p style=\"text-align: center;\">Combined with our cloud platform we provide our photographers industry standard software to deliver clients the highest quality media possible.</p>"
        ].join("");
        var index = $(this).data('id');
        if(index % 2 == 1) {
            $(this).html(og);
        } else {
            $(this).html(tools);
        }
        index += 1;
        $(this).data("id", index);
    });
});


/*
 She feels like those look like links?!
*/
