
 function shipInformation(ShipName, MaritimeAgency, CameFrom, BerthNumber, Deadline, BLNumber, Cargo, Type, Authorization) {
     var tb = document.getElementById("tbInformation");
     var qtdLinhas = tb.rows.length;
     var linha = tb.insertRow(qtdLinhas);
     var cellShipName = linha.insertCell(0);
     var cellMaritimeAgency = linha.insertCell(1); 
     var cellCameFrom = linha.insertCell(2);
     var cellBerthNumber = linha.insertCell(3);
     var cellDeadline = linha.insertCell(4);
     var cellBLNumber = linha.insertCell(5);
     var cellCargo = linha.insertCell(6);
     var cellType = linha.insertCell(7);
     cellShipName.innerHTML = ShipName;
     cellMaritimeAgency.innerHTML = MaritimeAgency;
     cellCameFrom.innerHTML = CameFrom;
     cellBerthNumber.innerHTML = BerthNumber;
     cellDeadline.innerHTML = Deadline;
     cellBLNumber.innerHTML = BLNumber;
     cellCargo.innerHTML = Cargo;
    cellType.innerHTML = Type;
};

function handleSubmit(e) {
    e.preventDefault();
    const elementsLengthArray = Array.from({ length: e.target.elements.length -1});
    let allValues = [];

    elementsLengthArray.forEach((_, idx) => {
        const element = e.target.elements[idx];
        allValues.push(element.value);
    });
    shipInformation(...allValues);
}

const form = document.getElementById("create-form");
form.addEventListener("submit", handleSubmit);
