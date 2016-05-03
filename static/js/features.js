$(document).ready(function() {

    $('ul.features #photographers').click(function() {
        window.location.href = '/founders';
        return false;
    });

    $('ul.features #prices').click(function() {
        var index = $(this).data('id');
        console.log(index);
        if(index % 2 == 1) {
            $(this).html("<h3 style=\"text-align: center;\">Our Prices</h3><p style=\"text-align: center;\">We're not expensive which makes it great for anyone who wants a photographer for any reason.</p>");
        } else {
            $(this).html("<h3 style=\"text-align: center;\">Our Prices</h3><h4>$45 per hour</h4>");
        }
        index += 1;
        console.log(index);
        $(this).data("id", index);
    });

    $('ul.features #tools').click(function() {
        var tools = [
            "<h4>Our Tools</h4>",
            "<ul class=\"icons\">",
                "<li><a href=\"http://www.adobe.com/products/photoshop/selector.html\"><img src=\"/static/images/photoshop.png\" width=\"50%\"></a></li>",
                "<li><a href=\"https://www.adobe.com/products/photoshop-lightroom.html\"><img src=\"/static/images/lightroom.png\" width=\"50%\"></a></li>",
            "</ul>",
        ].join("");
        var og = [
            "<h3 style=\"text-align: center;\">Our Tools</h3>",
            "<p style=\"text-align: center;\">We use amazing tools so we can make our clients experience as seamless as possible.</p>"
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
