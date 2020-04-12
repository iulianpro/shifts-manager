$(document).ready(function () {
    $('#update-form').on('submit', function () {
        $('#loading').removeClass('d-none');
        $('#loading').addClass('d-inline');
    });

    $('.navbar-nav li').click(function () {
        $('.navbar-collapse').collapse('hide');
    });


    $("[title|='Delete shift']").confirm({
        columnClass: 'col-md-4 col-md-offset-4',
        draggable: false,
        backgroundDismissAnimation: 'glow',
        type: 'red',
        typeAnimated: true,
        buttons: {
            Cancel: {
                btnClass: 'btn-default'
            },
            Delete: {
                btnClass: 'btn-red',
                action: function () {
                    $.confirm({
                        boxWidth: '72px',
                        useBootstrap: false,
                        icon: 'fa fa-spinner fa-spin',
                        draggable: false,
                        title: false,
                        buttons: {
                            yes: {
                                isHidden: true
                            }
                        }
                    });
                    location.href = this.$target.attr('href');
                }
            }
        }
    });

    $("[title|='Edit shift']").confirm({
        columnClass: 'col-md-4 col-md-offset-4',
        draggable: false,
        backgroundDismissAnimation: 'glow',
        type: 'orange',
        typeAnimated: true,
        buttons: {
            Cancel: {
                btnClass: 'btn-default'
            },
            Edit: {
                btnClass: 'btn-warning',
                action: function () {
                    $.confirm({
                        boxWidth: '72px',
                        useBootstrap: false,
                        icon: 'fa fa-spinner fa-spin',
                        draggable: false,
                        title: false,
                        buttons: {
                            yes: {
                                isHidden: true
                            }
                        }
                    });
                    location.href = this.$target.attr('href');
                }
            }
        }
    });
});