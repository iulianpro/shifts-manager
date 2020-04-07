$(document).ready(function () {
    $('#update-form').on('submit', function () {
        $('#loading').removeClass('d-none');
        $('#loading').addClass('d-inline');
    });

    $('.navbar-nav li').click(function () {
        $('.navbar-collapse').collapse('hide');
    });
});