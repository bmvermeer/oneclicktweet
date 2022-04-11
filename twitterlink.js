$('#tweettext').attr('required','');
$('#tweettext').attr('data-error', 'This field is required.');
$('#link').attr('required','');
$('#link').attr('data-error', 'This field is required.');
$('#via').attr('required','');
$('#via').attr('data-error', 'This field is required.');


$( "#createLink" ).submit(function( event ) {
    event.preventDefault();
    const baseUrl = 'https://twitter.com/share'
    let output = baseUrl;

    const text = $('#tweettext').val();
    const link = $('#link').val();
    const via = $('#via').val();

    output +='?url=' + link + '&via=' + via + '&text=' + encodeURIComponent(text)
    // document.getElementById('tweetLink').innerHTML=output;
    document.getElementById('tweetLink').value=output;


});

function copyText() {
    var content = document.getElementById('tweetLink');

    content.select();
    document.execCommand('copy');

    alert("Copied!");
}

