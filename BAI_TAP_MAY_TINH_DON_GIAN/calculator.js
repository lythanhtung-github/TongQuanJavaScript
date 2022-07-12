var x ="";
function hienthi(id){
    return document.getElementById(id);
}
function set_num(num){
    x+=num;
    hienthi('kq').value=x;
}
function xoa(){
    x="";
    hienthi('kq').value=x;
}
function hien_kq()
{
    hienthi('kq').value=eval(hienthi('kq').value);
    x="";
}