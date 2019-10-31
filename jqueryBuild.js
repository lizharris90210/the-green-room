// Whatever liz name's the button here
${'#add-btn'}.on('click', function(event){
    event.preventDefault();
    var reservation = {
        // Liz form fields here
    }
    $.post('api/reservations', lizVar).then(function(data){
        console.log('reservations.html', data);
        alert('You Added boo');
    })
})

$('#search-btn').on('click', function(){
    var lizVar2 = $('#search').val().trim();

    lizVar2 = lizVar2.replace(/\s+/g, "").toLowerCase();

    $.get('/api/characters/' + lizVar2, function(data){
        console.log(data);
        if(data){

        }
        else{
            $('').text("Sucks to suck! #WaitListed");
            $('').hide();
        };
    });
});