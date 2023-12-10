    const form = document.querySelector('.form')
    const result = document.querySelector('#result')

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#weight').value);

        if(height === "" || height <= 0 || height === NaN){
            result.innerHTML = `Please enter valid height` 
        }
        else if(weight === "" || weight <= 0 || height === NaN){
            result.innerHTML = `Please enter valid weight`
        }
        else{
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);

            result.innerHTML = `Your BMI is: ${bmi} <br>`

            if(bmi < 18.6){
                result.appendChild(document.createTextNode("You are Under Weight"))
            }

            else if(bmi > 18.6 && bmi <= 24.9){
                result.appendChild(document.createTextNode("You are in Normal Range"))
            }

            else{
                result.appendChild(document.createTextNode("You are Over Weight"));
            }

        }

    } )