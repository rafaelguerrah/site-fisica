function calcular() {
    const altura = Number(document.querySelector("#inAltura").value);
    const peso = Number(document.querySelector("#inPeso").value);
    const resp = document.querySelector("h3");

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert("Por favor digite algum valor Positivo...")
        return
    }

    const imc = peso / Math.pow(altura, 2);
    resp.textContent = `Seu IMC é ${imc.toFixed(2)}`;

    if (imc < 18.5) {
        resp.textContent += " (Abaixo do peso)";
    } else if (imc >= 18.5 && imc <= 24.9) {
        resp.textContent += " (Peso normal)";
    } else if (imc >= 25 && imc <= 29.9) {
        resp.textContent += " (Sobrepeso)";
    } else if (imc >= 30 && imc <= 34.9){
        resp.textContent+= " (Obesidade Grau 1)";
    }else if(imc >= 35 && imc <= 39.9){
        resp.textContent+= " (Obesidade Grau 2)"
    }else{
        resup.textContent += " (Obesidade Grau 3)";
    }

}