document.getElementsByTagName("h1")[0].style.fontSize = "6vw";function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'خطأ';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const currentdate = new Date(document.getElementById('currentdate').value);
    
    if (!birthdate || !currentdate || isNaN(birthdate) || isNaN(currentdate)) {
        document.getElementById('ageResult').textContent = 'يرجى إدخال تواريخ صحيحة.';
        return;
    }

    let age = currentdate.getFullYear() - birthdate.getFullYear();
    const month = currentdate.getMonth() - birthdate.getMonth();
    
    if (month < 0 || (month === 0 && currentdate.getDate() < birthdate.getDate())) {
        age--;
    }

    document.getElementById('ageResult').textContent = `عمرك هو ${age} سنة.`;
}