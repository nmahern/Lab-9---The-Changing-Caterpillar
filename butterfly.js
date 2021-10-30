   
   $(function(){
        $('#metamorphose').on('click',function(){

            $("h1").text("The Butterfly");
            $("#p1").html("This is a <strong> butterfly </strong> in its natural habitat:");
            $("img").attr("src", 'https://www.kasandbox.org/programming-images/animals/butterfly_monarch.png');
            $("a").text("Butterfly");
            $("a").attr("href","https://en.wikipedia.org/wiki/Butterfly");
            $('a').after('<ul>');
            $('ul').append('<li>The oldest American butterfly is the Late Eocene Prodryas persephone from the Florissant Fossil Beds, approximately 34 million years old</li>');
            $('ul').append('<li>Butterflies are distributed worldwide except Antarctica, totalling some 18,500 species.</li>');
            $('ul').append('<li>Butterfly eggs are protected by a hard-ridged outer layer of shell, called the chorion. This is lined with a thin coating of wax which prevents the egg from drying out before the larva has had time to fully develop.</li>');
            $('ul').append('<li>The colorful patterns on many butterfly wings tell potential predators that they are toxic</li>');
            $("#p1").css("color", "green");
            $("li").addClass("result");
            $("#metamorphose").hide(); 
            $("#restore").show(); 
        });

        $('#restore').on('click',function(){
            location.reload(true);
        });
   });