let a=[],b=0,c=[],d,e,f
function onclick(){
    a=input.value
    d=a.length-1
    while(b<a.length){
        c[b]=a[d]
        b++
        d--
    }
    document.write("the reverse of your input:"+c)
    document.write("<br>")
    d=c.length-1
    for(e=0;e<c.length;e++){
        if(a[e]==c[e]){
            f="palindrome"
        }else{
            f="not an palindrome"
        }
        d--
    }
    document.write("result :"+f)
}
var button=document.getElementById('b1')
button.addEventListener('click',onclick)