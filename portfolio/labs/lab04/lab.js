$(function(){
    var card = ['ace-of-club.svg','ace-of-diamonds.svg','ace-of-hearts.svg','ace-of-spades.svg'];
    for (var i = 0; i <8; i++) {
        var ran = Math.floor(Math.random()*4);
        var id = (parseInt(i)+1)*2;
        var inser_id1 = Math.floor(Math.random()*i*2)+1;
        var inser_id2 = Math.floor(Math.random()*(i*2+1))+1;
        var id_0 = id-1;
        var counter=0;
        if (i==0)
        {
            $('#d2').append('<img src="./'+card[ran]+'" id= "'+id_0+'" class="'+ran+'" type="zzz" >');
        }else{
            $('#'+inser_id1).after('<img src="./'+card[ran]+'" id= "'+id_0+'" class="'+ran+'" type="zzz">');
        }
        $('#'+inser_id2).after('<img src="./'+card[ran]+'" id= "'+id+'" class="'+ran+'" type="zzz">');
    }
        $('#b1').on('click',function(){
            for(var i = 1 ; i <= 16 ; i++)
            {
                $('#'+i).attr('type','wow')
                $('#'+i).attr('src','./joker-card.svg')
            }

        });
        $('img').click(function(){
            if($(this).attr('type')=="wow")
            {
            var fllower = $(this).attr('class');
            $(this).attr('src','./'+card[fllower]);
            counter++;
            if (counter==2){
                var a = $('[src*="ace"][type="wow"]').eq(0).attr('src');
                var b = $('[src*="ace"][type="wow"]').eq(1).attr('src');
                if(a==b){
                         $('[src*="ace"][type="wow"]').animate({opacity:0},300,function(){
                            $('[src*="ace"][type="wow"]').addClass('done').attr('type','zzz');
                        });
                }
                else{
                    setTimeout(function(){
                        $('[src*="ace"][type="wow"]').attr('src','./joker-card.svg');
                    },500);
                }
                counter = 0;
            }
        }
        });
});
