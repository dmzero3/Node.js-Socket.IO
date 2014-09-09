$(function(){
    var socket = io.connect('http://localhost:3000');
    $('.js_submit_data').click(function(){
        var $inputData = $('.js_input_data');
        var data = $inputData.val();

        if(data == ""){
            alert('テキストが入力されてません。');
            return;
        }
        socket.emit('text', data);

        appendItem(data, true);
        $inputData.val('');

    });

    function appendItem(data, isOwner){
        var $item = $('<div class="b-chat__item clearfix">');
        $item.append('<p class="b-chat__text js_chat-text">');
        var $chatText = $item.find('.js_chat-text');
        if(isOwner) {
            $chatText.addClass('b-chat__text--is-owner');
        }
        $chatText.text(data);
        $('.js_push_data').append($item);
    }

    socket.on('text', function(data){
        appendItem(data);
    });
});