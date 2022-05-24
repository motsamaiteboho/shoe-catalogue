//get reference to the dropdown manue
var colorElem = document.querySelector(".color");
var sizeElem = document.querySelector(".size");
var brandElem = document.querySelector(".brand");
var searchBtn = document.querySelector(".searchBtn");

var shoesCatalogue = ShoeCatalogue();
var filtered = [];
function searchShoes() {
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
    filtered = [];
}
searchBtn.addEventListener('click', searchShoes);
function createElement() {
    // get a reference to the template script tag
    var templateSource = document.querySelector(".userTemplate").innerHTML;

    // compile the template
    var userTemplate = Handlebars.compile(templateSource);

    // get a reference to tableBody where users is to be displayed
    var userDataElem = document.querySelector(".userData");
    var userData = {
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
        size: sizeElem2.value,
        price: priceElem2.value,
        in_stock: 1,
    }
    var shoes = shoesCatalogue.allshoes();
    var isfound = false;
    shoes.forEach(shoe => {
        for (const key in shoe) {
            if (key != "in_stock") {
                if (shoe[key] == newshoe[key])
                    shoe[key]++;
            }
        }
        alert(shoe.in_stock)
    })
    if (!isfound)
        shoesCatalogue.addNewShoe(newshoe);
}
AddBtn.addEventListener('click', addShoe)

function shallowEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (object1[key] !== object2[key]) {
            return false;
        }
    }
    return true;
}