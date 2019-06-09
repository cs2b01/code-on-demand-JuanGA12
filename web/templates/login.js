function getData(){
        $('#action').append('<img src="/static/gifs/200.gif/">');
        var username = $('#username').val();
        var password = $('#password').val();
        var message = JSON.stringify({
                "username": username,
                "password": password
            });

        $.ajax({
            url:'/authenticate',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',
            success: function(response){
                //alert(JSON.stringify(response));
                $('#action').html(response['statusText']);
                $('#action').append('<img src="/static/gifs/giphy.gif/">');
            },
            error: function(response){
                //alert(JSON.stringify(response));
                $('#action').html(response['statusText']);
                $('#action').append('<img src="/static/gifs/giphy2.gif/">');

            }
        });
    }