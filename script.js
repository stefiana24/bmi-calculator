window.onload = () => {
    let button = document.querySelector("#calculate-btn");
    
    
    button.addEventListener("click", calculateBMI);
    };
    
    function calculateBMI() {
    
    
    let height = parseInt(document
            .querySelector("#height").value);
    
    
    let weight = parseInt(document
            .querySelector("#weight").value);
    
    let result = document.querySelector("#bmi-result");
    
    
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";
    
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";
    
    
    else {
    
        
        let bmi = (weight / ((height / 100)^2)) ;
    
       
        if (bmi < 18.5) result.innerHTML = "Your BMI is " + (bmi) + " which means you are underweight";
    
        else if (bmi >= 18.5 && bmi < 24.9) 
            result.innerHTML = 
                "Your BMI is " + (bmi) + " which means you are Normal";
    
        else if (bmi >= 25 && bmi <= 29.9) 
          result.innerHTML =
            "Your BMI is " + (bmi) + " which means you are overweight";
      
      else result.innerHTML = "Obesity";
    }
    }