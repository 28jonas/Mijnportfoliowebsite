class Bestelling {
    constructor(productName, customerName, orderStatus) {
        this.productName = productName;
        this.customerName = customerName;
        this.orderStatus = orderStatus;
    }
}

document.getElementById("orderForm").addEventListener("submit", function (event){
    event.preventDefault()

    /*haal alle waarden op uit het formulier*/
    const productName = document.getElementById("productName").value;
    const customerName = document.getElementById("customerName").value;
    const orderStatus = document.getElementById("orderStatus").value;

    /*Maak nieuwe bestelling*/
    const nieuweBestelling = new Bestelling(productName, customerName, orderStatus);


    switch(orderStatus){
        case "Inafwachting":
            let pendingtap = document.getElementById("pending")
            let pendingParagraaf = document.createElement("p")
            pendingParagraaf.textContent = nieuweBestelling.customerName + "," + nieuweBestelling.productName;
            pendingtap.appendChild(pendingParagraaf)
            break;
        case "Inbehandeling":
            let processingtap = document.getElementById("processing")
            let processingParagraaf = document.createElement("p")
            processingParagraaf.textContent = nieuweBestelling.customerName + " , " + nieuweBestelling.productName;
            processingtap.appendChild(processingParagraaf)
            break;
        default:
            let shippedtap = document.getElementById("shipped")
            let shippedParagraaf = document.createElement("p")
            shippedParagraaf.textContent = nieuweBestelling.customerName + "," + nieuweBestelling.productName;
            shippedtap.appendChild(shippedParagraaf)
    }
})


