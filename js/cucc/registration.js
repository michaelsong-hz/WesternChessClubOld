$(document).ready(function (){
    $("#numTeams").change(function() {
        var teams = $(this).val();
        switch (teams) {
            case "1":
                $("#team2").hide();
                $("#team3").hide();
                $("#team4").hide();
                $("#team5").hide();
                document.getElementById('priceHelp').innerHTML = "Total Cost: $120";
                break;
            case "2":
                $("#team2").show();
                $("#team3").hide();
                $("#team4").hide();
                $("#team5").hide();
                document.getElementById('priceHelp').innerHTML = "Total Cost: $220";
                break;
            case "3":
                $("#team2").show();
                $("#team3").show();
                $("#team4").hide();
                $("#team5").hide();
                document.getElementById('priceHelp').innerHTML = "Total Cost: $320";
                break;
            case "4":
                $("#team2").show();
                $("#team3").show();
                $("#team4").show();
                $("#team5").hide();
                document.getElementById('priceHelp').innerHTML = "Total Cost: $420";
                break;
            case "5":
                $("#team2").show();
                $("#team3").show();
                $("#team4").show();
                $("#team5").show();
                document.getElementById('priceHelp').innerHTML = "Total Cost: $520";
                break;
        }
    });
});
