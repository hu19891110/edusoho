define(function(require, exports, module) {

    var Notify = require('common/bootstrap-notify');
    var Validator = require('bootstrap.validator');
    require('common/validator-rules').inject(Validator);

    exports.run = function() {
        var $form = $('#category-form');
        var $modal = $form.parents('.modal');

        var validator = new Validator({
                element: $form,
                autoSubmit: false,
                onFormValidated: function(error, results, $form) {
                if (error) {
                    return ;
                }

                $.post($form.attr('action'), $form.serialize(), function(html){
                    $modal.modal('hide');
                    location.reload();
                    Notify.success('更新栏目成功！');
                }).fail(function() {
                    Notify.danger("更新栏目成功失败，请重试！");
                });

            }
        });

        validator.addItem({
            element: '#category-name-field',
            required: true,
            rule: 'remote'
        });

        $('body').on('click', '#live', function(){
            $('.order-form').addClass('hide');
        });
        
        $('body').on('click', '#course', function(){
            $('.order-form').removeClass('hide');
        });

        $('body').on('click', '#classroom', function(){
            $('.order-form').removeClass('hide');
        })
    };

});