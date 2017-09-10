console.log('this is event')

$('#input').focus(function () {
    $('#delete').show()
});
$('#input').blur(function asd () {
    if (event.relatedTarget.id !== $('#delete').attr('id')) {
        $('#delete').hide();
    }
});
$('#delete').click(function qwe () {
    $('#input').val('');
    console.log('this is btn');
    $('#delete').hide();
});
