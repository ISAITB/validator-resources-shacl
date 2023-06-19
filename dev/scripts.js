$(document).ready(function() {
    $("#validatorBannerTitle").off().on("click", function() {
        window.location.href="upload";
    });
    $(".toggleDetailRuleDisplayButton").on("click", function () {
        if ($("#detailedRules").is(":hidden")) {
            $("#detailedRules").show();
            $("#viewButton").hide();
            $("#hideButton").show();
        } else {
            $("#detailedRules").hide();
            $("#viewButton").hide();
            $("#hideButton").show();
        }
    });
    $('#infoModal').on('show.bs.modal', function () {
        $("#detailedRules").hide();
    });
});