$(".submit").click(function() {
    let question1 = $("#ForS").val();
    let question2 = $("#age").val();

    console.log(question1);
    console.log(question2);
    
    let UserInput = $(".count").val();
    console.log(Number(UserInput + 1));
    
    if (question1 === "outgoing" && question2 <= 14) {
        $(".message1").append("You prefer " + $("#ForS").val() + " and your age is " + $("#age").val() + ".");
        $(".message1").append(" You got Patrick!");
        $("#patrick").show();
    }

    if (question1 === "outgoing" && question2 > 14) {
        $(".message2").append("You prefer " + $("#ForS").val() + " and your age is " + $("#age").val() + ".");
        $(".message2").append(" You got Spongebob!");
        $("#spongebob").show();
    }

    if (question1 === "not outgoing" && question2 <= 14) {
        $(".message3").append("You prefer " + $("#ForS").val() + " and your age is " + $("#age").val() + ".");
        $(".message3").append(" You got Mr. Krabs!");
        $("#mrkrabs").show();

    }

    if (question1 === "not outgoing" && question2 > 14) {
        $(".message4").append("You prefer " + $("#ForS").val() + " and your age is " + $("#age").val() + ".");
        $(".message4").append(" You got Squidward!");
        $("#squidward").show();
    }

});

$(".reset").click(function() {
    $(".message1").text("");
    $(".message2").text("");
    $(".message3").text("");
    $(".message4").text("");
    $("#patrick").hide();
    $("#spongebob").hide();
    $("#mrkrabs").hide();
    $("#squidward").hide();
});