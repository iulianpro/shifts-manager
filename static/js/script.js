$(document).ready(function () {
    // Show loading spinner on submit edit shift form
    $('#update-form').on('submit', function () {
        $('#loading').removeClass('d-none');
        $('#loading').addClass('d-inline');
    });

    // Hide collapse navbar on click a link-item
    $('.navbar-nav li').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Targeting delete elements to show confirm dialog box
    $("[title|='Delete shift'],[title^='Erase'],[title^='Delete employee']").confirm({
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

    // Targeting edit element to show confirm dialog box 
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

    // Targeting left navbar to show loanding spinner
    $("[title|='View calendar'],[title|='Manage employee']").click(function () {
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
    });

    // Targeting forms to show loanding spinner on submit
    $('#addform,#editform').submit(function () {
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
    });
});