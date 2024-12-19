
$(function () {
    $('#email-form').on('submit', function (e) {


        e.preventDefault();
        $.ajax({
            url: './form.php',
            method: "POST",
            data: $('form').serialize(),
            success: function (result) {

                if (result === 'sucesso') {
                    $('.w-form-fail').hide();
                    $('.w-form-done').show();
                    $("input[type='tel']").val('');
                    $("input[type='phone']").val('');
                    $("input[type='email']").val('');
                    $("input[type='text']").val('');
                    $("textarea").val('');
                } else {
                    $('.w-form-fail').show();
                    $('.w-form-done').hide();
                    console.log(result)
                }

                setTimeout(() => {
                    $('.w-form-fail').hide();
                    $('.w-form-done').hide();

                }, 3000)
            },

        });

    });

});