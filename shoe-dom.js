//get reference to the dropdown manue
var colorElem = document.querySelector(".color");
var sizeElem = document.querySelector(".size");
var brandElem = document.querySelector(".brand");
var searchBtn = document.querySelector(".searchBtn");

var shoesCatalogue = ShoeCatalogue();
var filtered = [];
var BuyList = [];
function searchShoes() {
    filtered = [];
    var color = colorElem.value;
    var size = sizeElem.value;
    var brand = brandElem.value;
    if (color != "" && size == "" && brand == "") {
        let SearchByColor = shoesCatalogue.SearchByColor(color)
        for (let i = 0; i < SearchByColor.length; i++) {
            let element = SearchByColor[i];
            if (!filtered.includes(element))
                filtered.push(element)
        }
    }
    if (size != "" && color == "" && brand == "") {
        var SearchBySize = shoesCatalogue.SearchBySize(size)
        for (let i = 0; i < SearchBySize.length; i++) {
            var element = SearchBySize[i];
            if (!filtered.includes(element))
                filtered.push(element)
        }
    }
    if (size == "" && color == "" && brand != "") {
        var SearchByBrand = shoesCatalogue.SearchByBrand(brand)
        for (let i = 0; i < SearchByBrand.length; i++) {
            var element = SearchByBrand[i];
            if (!filtered.includes(element))
                filtered.push(element)
        }
    }
    if (color != "" && size != "" && brand == "") {
        var SearchByColorAndSize = shoesCatalogue.SearchByColorAndSize(color, size)
        for (let i = 0; i < SearchByColorAndSize.length; i++) {
            var element = SearchByColorAndSize[i];
            if (!filtered.includes(element))
                filtered.push(element)
        }
    }
    if (color != "" && brand != "" && size == "") {
        var SearchByColorAndBrand = shoesCatalogue.SearchByColorAndBrand(color, brand)
        for (let i = 0; i < SearchByColorAndBrand.length; i++) {
            var element = SearchByColorAndBrand[i];
            if (!filtered.includes(element))
                filtered.push(element)
        }
    }
    if (size != "" && brand != "" && color == "") {
        var SearchBySizeAndBrand = shoesCatalogue.SearchBySizeAndBrand(size, brand)
        for (let i = 0; i < SearchBySizeAndBrand.length; i++) {
            var element = SearchBySizeAndBrand[i];
            if (!filtered.includes(element))
                filtered.push(element)
        }
    }
    if (color != "" && size != "" && brand != "") {
        var SearchByColorAndSizeAndBrand = shoesCatalogue.SearchByColorAndSizeAndBrand(color, size, brand)
        for (let i = 0; i < SearchByColorAndSizeAndBrand.length; i++) {
            var element = SearchByColorAndSizeAndBrand[i];
            if (!filtered.includes(element))
                filtered.push(element)
        }
    }
    createElement();
    
}
searchBtn.addEventListener('click', searchShoes);
function createElement() {
    // get a reference to the template script tag
    var templateSource = document.querySelector(".userTemplate").innerHTML;

    // compile the template
    var userTemplate = Handlebars.compile(templateSource);

    // get a reference to tableBody where users is to be displayed
    var userDataElem = document.querySelector(".userData");
    var message = "";
    if (filtered.length > 0)
        message = "we have the following shoes in stock"
    else
        message = "item not available"


    var userData = {
        message: message,
        shoes: filtered
    };

    // compile the template
    var userDataHTML = userTemplate(userData);
    userDataElem.innerHTML = userDataHTML;
}

var priceElem2 = document.getElementById("price")
var colorElem2 = document.getElementById("color");
var sizeElem2 = document.getElementById("size");
var brandElem2 = document.getElementById("brand");
var AddBtn = document.querySelector(".AddBtn");

function addShoe() {
    var newshoe =
    {
        color: colorElem2.value,
        brand: brandElem2.value,
        size: Number(sizeElem2.value),
        price: Number(priceElem2.value)
    }
    shoesCatalogue.addNewShoe(newshoe);

    if(filtered.length > 0){
        searchShoes();
    }
       
}
AddBtn.addEventListener('click', addShoe)

var priceElem3 = document.getElementById("price2")
var colorElem3 = document.getElementById("color2");
var sizeElem3 = document.getElementById("size2");
var brandElem3 = document.getElementById("brand2");
var BuyBtn = document.querySelector(".BuyBtn");

function buyShoe() {
    var buyshoe =
    {
        color: colorElem3.value,
        brand: brandElem3.value,
        size: Number(sizeElem3.value),
        price: Number(priceElem3.value),
    }
    shoesCatalogue.BuyShoe(buyshoe);
    createBuyListElement()

    if(filtered.length > 0){
        searchShoes();
    }
}
BuyBtn.addEventListener('click', buyShoe)

function createBuyListElement() {
    // get a reference to the template script tag
    var templateSource2 = document.querySelector(".userTemplate2").innerHTML;

    // compile the template
    var userTemplate2 = Handlebars.compile(templateSource2);

    // get a reference to tableBody where users is to be displayed
    var userDataElem2 = document.querySelector(".userData2");
    var message2 = "";
    var basketList = shoesCatalogue.shoeOnBasket();
    if (basketList.length > 0)
        message2 = "Shopping List: "
    else
        message2 = "Currently out stock"


    var userData2 = {
        message: message2,
        total: shoesCatalogue.buyTotal(),
        shoes: basketList
    };

    // compile the template
    var userDataHTML2 = userTemplate2(userData2);
    userDataElem2.innerHTML = userDataHTML2;
}

var removeBtn = document.querySelector(".ClearBtn");
function removeitems(){
     //remove all current plates
     const elementList = document.querySelectorAll(".shoe2")
     const elementEl = document.querySelector(".total")
     for (let i = 0; i < elementList.length; i++) {
         elementList[i].remove();
     }
     elementEl.innerHTML = "Total cost : 0"
    shoesCatalogue.removeitems();
}
removeBtn.addEventListener('click',removeitems)