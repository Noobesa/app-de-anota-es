

$(function(){
    $('.btn-add').click(function(){
        let el = '<div class="anotação-single"><textarea placeholder="Sua nova anotação..."></textarea></div>';
        $('.container').append(el);

        var textArea = $('.anotação-single').last().find('textarea');

        var date = new Date();
        var hora = date.getHours();
        var minutos = date.getMinutes();
        var horaFinal = hora+':'+minutos;

        textArea.html('Nova anotação em: '+horaFinal);
    })
})