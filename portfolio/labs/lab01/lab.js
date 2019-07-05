/*

*/


function start(e) {
    var name = [
        {
                char: '楊    ',
                big5: ' B7A8',
                cns:  '  1-644E',
                unicode: '  694A'
        },{
                char:'晨    ',
                big5:'  B1E1',
                cns:'  1-5B27',
                unicode:'  6668'
        },{
                char:'志    ',
                big5:'  A7D3',
                cns:'  1-4A35',
                unicode:'  5FD7 '
        }
    ];
        var ele=document.getElementById('div1');
        
        for (var i=0;i<3;i++){
        
            ele.innerHTML += name[i].char;
            ele.innerHTML +='   big5';
            ele.innerHTML += name[i].big5;
            ele.innerHTML +=' cns';
            ele.innerHTML += name[i].cns;
            ele.innerHTML +='    unicode';
            ele.innerHTML += name[i].unicode;
            ele.innerHTML +='<br>';
        }
}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
