document.querySelector('.btn-1').onclick=MyClick;
document.querySelector('.btn-2').onclick=MyClick2;
document.querySelector('.btn-4').onclick=MyClick4;
document.querySelector('.btn-2_1').onclick=MyClick2_1;
document.querySelector('.btn-3').onclick=MyClick3;
document.querySelector('.btn-5').onclick=MyClick5;
document.querySelector('.btn-6').onclick=MyClick6;
document.querySelector('.btn-7').onclick=MyClick7;
document.querySelector('.btn-8').onclick=MyClick8;
document.querySelector('.btn-9').onclick=timeSubstraction;
document.querySelector('.btn-10').onclick=MyClick10;
document.querySelector('.btn-11').onclick=MyClick11;
document.querySelector('.btn-12').onclick=MyClick12;


    function MyClick() {
        let a = document.querySelector('.z-1').value;
        document.querySelector('.out').innerHTML = checkDigits(a);
    }
    function MyClick2(){
        let a = document.querySelector('.z-1').value;
        document.querySelector('.out').innerHTML = checkEmail(a);
    }
    function MyClick4() {
        let a = document.querySelector('.z-4').value;
        document.querySelector('.out-4').innerHTML = checkEmail_2(a);
    }
    function MyClick2_1() {
        let a = document.querySelector('.z-2').value;
        document.querySelector('.out-2').innerHTML = checkDigits_2(a);
    }
    function MyClick3() {
        let a = document.querySelector('.z-3').value;
        document.querySelector('.out-3').innerHTML = DeleteProbil(a);
    }
    


    function checkDigits(str){
for(var i=0; i<str.length; i++)
{
if(str.charCodeAt(i) < 47 || str.charCodeAt(i) >57)
return "This is not a number";
return "This is a number"; 
}
}
    function checkDigits_2(str){
        for(var i=0; i<str.length;i++){
            if(str.charCodeAt(i) < 47 || str.charCodeAt(i) >57)
            return "Це не число";
            if(str.indexOf(".")!=-1 || str.indexOf(",")!=-1 )
            return "Це дійсне число"
            
            return "Це просте число"
        }
    }
    
    function DeleteProbil(str){
        for(var i=0; i<str.length;i++){
            modifiedTExst=str.replace("  "," ");
            str=modifiedTExst;
        }
        return str;
    }



str = "Here may be your own text"; /*Задаємо текст біжучої стрічки */
function floatingText(){
    
str = str.substring(1,str.length); 
if(str.length) 
res = setTimeout("floatingText()",200); 
else
clearTimeout(res);
alert(window.status)
window.status = str; 

}

function checkEmail(str) 

{

if(str.indexOf("@") == -1) 

     return "E-mail задано неправильно";

if(str.indexOf("@") != str.lastIndexOf("@")) 

     return "E-mail задано неправильно";

if(str.charAt(0) =="@" || str.charAt(str.length) == "@") 

     return "E-mail задано неправильно";

return "Потрібна додаткова перевірка"; 

}

function checkEmail_2(str) 

{

if(str.indexOf("@") == -1) 
     return "E-mail задано неправильно";

if(str.indexOf("@") != str.lastIndexOf("@")) 
     return "E-mail задано неправильно";

if(str.charAt(0) =="@" || str.charAt(str.length) == "@") 
     return "E-mail задано неправильно";

if(str.indexOf(".")==-1)
    return "E-mail немає крапки";

    var ind_1= str.indexOf("@");
    var ind_2=str.indexOf(".");
    if(ind_2-ind_1<=1)
        return "Між @ та крапкою немає символів";

return "Потрібна додаткова перевірка"; 

}

    function MyClick5(){
    var   d = new Date();
    var m=d.getMonth();
    m++;
    alert("Сьогодні "+ d.getDate()+"/"+ m +"/"+d.getFullYear()+" " + d.getHours() + ":" + d.getMinutes());
    }

    function MyClick6(){
        var d = new Date(2002,4,26);
        var day=d.getDay()+1;
        alert("Я народився в "+ day+" день тижня");
    }

    function MyClick7(){
        var d= new Date();
        var birthday = new Date(2002,4,26);
        birthday.setFullYear(d.getFullYear()-10);
        var day=birthday.getDay()+1;
        var m = birthday.getMonth()+1;
        alert(birthday.getDate()+ "."+m+"."+birthday.getFullYear() +" 10 років назад мій день народення був "+ day +" день тижня");
        birthday.setFullYear(d.getFullYear()-12);
        day=birthday.getDay()+1;
        alert(birthday.getDate()+ "."+m+"."+birthday.getFullYear() +" 12 років назад мій день народення був "+ day +" день тижня");
        birthday.setFullYear(d.getFullYear()-25);
        day=birthday.getDay()+1;
        alert(birthday.getDate()+ "."+m+"."+birthday.getFullYear() +" 25 років назад мій день народення був "+ day +" день тижня");
        birthday.setFullYear(d.getFullYear()-38);
        day=birthday.getDay()+1;
        alert(birthday.getDate()+ "."+m+"."+birthday.getFullYear() +" 38 років назад мій день народення був "+ day +" день тижня");
    }

    function MyClick8(){
        var d= new Date();
        var birthday = new Date(2002,4,26);
        birthday.setFullYear(d.getFullYear()+3);
        var day=birthday.getDay()+1;
        var m = birthday.getMonth()+1;
        alert(birthday.getDate()+ "."+m+"."+birthday.getFullYear() +" Через 3 роки мій день нородження буде в "+ day +" день тижня");
    }

    function timeSubstraction(){
        let h1 = document.querySelector('.hour1').value;
        let h2 = document.querySelector('.hour2').value;
        let m1 = document.querySelector('.minute1').value;
        let m2 = document.querySelector('.minute2').value;

        var d1 = new Date(null,null,null,h1,m1);
        var d2 = new Date(null,null,null,h2,m2);
        var d= new Date();
        d=d2-d1;
        let hours = Math.floor((d % 86400000) / 3600000);
        let minutes = Math.round(((d % 86400000) % 3600000) / 60000);
        document.querySelector('.out-9').innerHTML = hours+":"+ minutes
        
    }

    function MyClick10 (){

        let t= document.querySelector('.z-10').value;
        if(isNaN(t)==true)
        document.querySelector('.out-10').innerHTML = "Це не число!"
        else document.querySelector('.out-10').innerHTML = "Це  число!"
    }

    function MyClick11(){
        var d= new Date(2002,4,26);
        var a=new Number(d.getDate());
        var b=new Number(d.getMonth()+1);
        var c=new Number(d.getFullYear());
        var sum=a+b+c;
        let str="Десяткова система: "+sum.toString()+"\n"+"Двійкова система: "+sum.toString(2)+"\n"+"Шістнадцяткова система: "+sum.toString(16)+"\n"
        alert(str);

    }

    function MyClick12(){
        var a=document.querySelector(".z-12_1").value
        var b=document.querySelector(".z-12_2").value
        var a1=new Number(a);
        var a2=new Number(b);
        var c= Math.sqrt(Math.pow(a1,2)+Math.pow(a2,2));
        alert("Гіпотенуза = "+c.toFixed(2));
        
    }