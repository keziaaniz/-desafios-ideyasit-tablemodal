
function shipInformation(ShipName, MaritimeAgency, CameFrom, BerthNumber, Deadline, BLNumber, Cargo, Type, Authorization) {
    var tb = document.getElementById("tbInformation");
    var qtdLinhas = tb.ariaRowCount.length;
    var linha = tb.insertRorw(qtdLinhas);

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
}
