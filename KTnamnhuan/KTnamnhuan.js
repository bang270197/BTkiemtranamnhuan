let year =prompt("Mời nhập năm :");
/*if(year%4==0){
    if(year%100==0){
        if (year%400==0){
            alert("la nam nhuan");
        } else {
            alert("la nam khong nhuan");
        }
    }else {
        alert("La nam nhuan");
    }
}else {
    alert("khong la nam nhuan");
}*/
if((year%4==0)&&(year%100!==0) ||(year%400==0))
{
    alert("La nam nhuan")
}else{
    alert("La nam khong nhuan");
}
//nam nhuan la nam phai chia het cho 4 va khong chia het cho100, hoac chi can chia het cho 400