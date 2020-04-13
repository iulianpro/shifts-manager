$(document).ready(function () {
    $('#update-form').on('submit', function () {
        $('#loading').removeClass('d-none');
        $('#loading').addClass('d-inline');
    });

    $('.navbar-nav li').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    $("[title|='Delete shift']").confirm({
        animateFromElement: false,
        animation: 'zoom',
        columnClass: 'col-md-4 col-md-offset-4',
        draggable: false,
        backgroundDismissAnimation: 'glow',
        type: 'red',
        typeAnimated: false,
        buttons: {
            Cancel: {
                btnClass: 'btn-default'
            },
            Delete: {
                btnClass: 'btn-red',
                action: function () {
                    $.confirm({
                        animateFromElement: false,
                        animation: 'zoom',
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
        animateFromElement: false,
        animation: 'zoom',
        columnClass: 'col-md-4 col-md-offset-4',
        draggable: false,
        backgroundDismissAnimation: 'glow',
        type: 'orange',
        typeAnimated: false,
        buttons: {
            Cancel: {
                btnClass: 'btn-default'
            },
            Edit: {
                btnClass: 'btn-warning',
                action: function () {
                    $.confirm({
                        animateFromElement: false,
                        animation: 'zoom',
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

    $("[title^='Delete employee']").confirm({
        animateFromElement: false,
        animation: 'zoom',
        columnClass: 'col-md-4 col-md-offset-4',
        draggable: false,
        backgroundDismissAnimation: 'glow',
        type: 'red',
        typeAnimated: false,
        buttons: {
            Cancel: {
                btnClass: 'btn-default'
            },
            Delete: {
                btnClass: 'btn-red',
                action: function () {
                    $.confirm({
                        animateFromElement: false,
                        animation: 'zoom',
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

    $("[title|='View calendar'],[title|='Manage employee'],[title^='Erase'],[title|='UPDATE Employee'],[title|='ADD Emaployee']").click(function () {
        $.confirm({
            animateFromElement: false,
            animation: 'zoom',
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
    })
});