function hh(uu){
input1 = document.getElementById('w').value
input2 = document.getElementById('p').value

input1 = parseFloat(input1);
input2 = parseFloat(input2);


    if(input1 <85){
document.getElementById('result').innerText ="لم تبلغ النصاب"
return;
    }

    else if(input2 > 0){
        zakat = input1*input2 * 2.5/100
document.getElementById("result").innerText = 'قيمة الزكاة;' + zakat
return;
    }


    else{
        document.getElementById('result').innerText="قسمة غير صحيحة"
        return;
    }
    
}
