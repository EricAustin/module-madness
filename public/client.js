$(document).ready(function () {
    $.ajax({
        method: 'GET',
        url: 'moduleMadness',
        success: function (response) {
            $('p').html(response);
        }
    })
})