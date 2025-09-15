$(document).ready(function () {
    $('#checkout').validate({
        rules: {
            firstname: {
                required: true,
                maxlength: 100
            },
            lastname: {
                maxlength: 100
            },
            address: {
                required: true
            },
            apartment: {
                required: true,
                maxlength: 100
            },
            city: {
                required: true,
                maxlength: 100
            },
            state: {
                required: true,
            },
            pincode: {
                required: true,
                digits: true,
                minlength: 6,
                maxlength: 6
            },
            phone: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 10,
                // pattern: /^[6-9]\d{9}$/
            },
            bill_firstname: {
                required: true,
                maxlength: 100
            },
            bill_lastname: {
                maxlength: 100
            },
            bill_address: {
                required: true
            },
            bill_apartment: {
                required: true,
                maxlength: 100
            },
            bill_city: {
                required: true,
                maxlength: 100
            },
            billing_state: {
                required: true,
            },
            bill_pincode: {
                required: true,
                digits: true,
                minlength: 6,
                maxlength: 6
            },
            bill_phone: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 10,
                // pattern: /^[6-9]\d{9}$/
            }

        },
        /* messages: {
            firstname: {
                required: "First Name is required",                
            },            
        }, */
        errorPlacement: function (error, element) {
            // console.log(error);            
            /* if (element.attr('name') == 'state') {
                
            } else { */
                element.closest('.form-group').after(error);
            /* } */
        },
        // submitHandler: function (form) {
            
        // }
    });    
});    