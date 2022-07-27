function calculate(){
    var bmi;
    var result=document.getElementById("result");
    var weight=parseInt(document.getElementById("weight").value);
    document.getElementById("wtval").textContent=weight+"kg";
    var height=parseInt(document.getElementById("height").value);
    document.getElementById("htval").textContent=height+"cm";
    bmi=(weight/Math.pow((height/100),2)).toFixed(1);
    result.textContent=bmi;
    if(bmi<18.5){
        category="Under Weigth";
        result.style.color="#ffc44d";
    }
    else if(bmi>=18.5 && bmi<=24.9){
        category="Normal Weight";
        result.style.color="#obe881";
    }
    else if(bmi>=25 && bmi<=29.9){
        category="Over Weight";
        result.style.color="#ff884d";
    }
    else{
        category="Obese";
        result.style.color="#ff5e57";
    }
    document.getElementById("category").textContent=category;
}