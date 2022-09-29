const tempCalculator = () =>{
    const numtemp = document.querySelector('#temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) =>{
        let fahrenheit = Math.round((cel * 9/5 ) + 32 );
        return fahrenheit;
    }
    const celToKel = (cel) =>{
        let kelvin = (Number(cel) + 273.15);
        return kelvin;
    }
    const fahToCel = (fah) =>{
        let celcius = Math.round((fah - 32 ) * 5/9 );
        return celcius;
    }
    const fahToKel = (fah) =>{
        let kelvin = Math.round((fah - 32 ) * 5/9 + 273.15);
        return kelvin;
    }

    const kelToFah = (kel) =>{
        let fahrenheit = Math.round((kel -273.15) *9/5 + 32 );
        return fahrenheit;
    }
    const kelToCel = (kel) =>{
        let celcius = (Number(kel) - 273.15);
        return celcius;
    }


    let result1, result2;

    if(valueTemp == 'cel'){
        result1 = celToFah(numtemp);
        document.getElementById('resultContainer1').innerHTML = `= ${result1}°Fahrenheit` ;
        result2 = celToKel(numtemp);
        document.getElementById('resultContainer2').innerHTML = `= ${result2}°Kelvin` ;
    }
    else if(valueTemp == 'fah'){
        result1 = fahToCel(numtemp);
        document.getElementById('resultContainer1').innerHTML = `= ${result1}°Celcius` ;
        result2 = fahToKel(numtemp);
        document.getElementById('resultContainer2').innerHTML = `= ${result2}°Kelvin` ;
    }
    else{
        result1 = kelToFah(numtemp);
        document.getElementById('resultContainer1').innerHTML = `= ${result1}°Fahrenheit` ;
        result2 = kelToCel(numtemp);
        document.getElementById('resultContainer2').innerHTML = `= ${result2}°Celcius` ;
    }

}