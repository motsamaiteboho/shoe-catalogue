function ShoeCatalogue() {
    var shoes = [
        {
            color: 'blue',
            brand: "mike",
            size: 4,
            price: 350,
            in_stock: 5
        },
        {
            color: 'orange',
            brand: "hadidas",
            size: 5,
            price: 275,
            in_stock: 3
        },
        {
            color: 'green',
            brand: "pama",
            size: 4,
            price: 780,
            in_stock: 7
        },
        {
            color: 'orange',
            brand: "livas",
            size: 3,
            price: 655,
            in_stock: 4
        },
        {
            color: 'pink',
            brand: "pama",
            size: 6,
            price: 322,
            in_stock: 11
        },
        {
            color: 'orange',
            brand: "livas",
            size: 7,
            price: 789,
            in_stock: 8
        },
        {
            color: 'pink',
            brand: "pama",
            size: 4,
            price: 355,
            in_stock: 11
        },
        {
            color: 'orange',
            brand: "livas",
            size: 3,
            price: 654,
            in_stock: 8
        },
        {
            color: 'lime',
            brand: "mike",
            size: 4,
            price: 250,
            in_stock: 4
        },
        {
            color: 'black',
            brand: "hadidas",
            size: 3,
            price: 123,
            in_stock: 6
        },
        {
            color: 'lime',
            brand: "mike",
            size: 5,
            price: 721,
            in_stock: 5
        },
        {
            color: 'black',
            brand: "hadidas",
            size: 6,
            price: 356,
            in_stock: 4
        },
        {
            color: 'white',
            brand: "mike",
            size: 5,
            price: 121,
            in_stock: 5
        },
        {
            color: 'cola',
            brand: "hadidas",
            size: 4,
            price: 365,
            in_stock: 8
        },
        {
            color: 'green',
            brand: "livas",
            size: 6,
            price: 354,
            in_stock: 5
        },
        {
            color: 'blue',
            brand: "livas",
            size: 7,
            price: 224,
            in_stock: 8
        },
        {
            color: 'red',
            brand: "mike",
            size: 5,
            price: 145,
            in_stock: 5
        },
        {
            color: 'maroon',
            brand: "hadidas",
            size: 7,
            price: 354,
            in_stock: 4
        },
        {
            color: 'lime',
            brand: "mike",
            size: 4,
            price: 221,
            in_stock: 5
        },
        {
            color: 'black',
            brand: "hadidas",
            size: 6,
            price: 452,
            in_stock: 4
        }

    ];

    var shoesbasket = [];
    var shoesfiltered = [];
    var total = 0;

    function allshoes() {
        return shoes;
    }
    function SearchByColor(color) {
        return shoes.filter(s => s.color == color);
    }
    function SearchBySize(size) {
        return shoes.filter(s => s.size == size)
    }
    function SearchByBrand(brand) {
        return shoes.filter(s => s.brand == brand)
    }
    function SearchByPrice(price) {
        return shoes.filter(s => s.price == price)
    }
    function SearchByColorAndSize(color, size) {
        return shoes.filter(s => s.color == color && s.size == size);
    }
    function SearchByColorAndBrand(color, brand) {
        return shoes.filter(s => s.color == color && s.brand == brand);
    }
    function SearchBySizeAndBrand(size, brand) {
        return shoes.filter(s => s.size == size && s.brand == brand)
    }
    function SearchByColorAndSizeAndBrand(color, size, brand) {
        return shoes.filter(s => s.color == color && s.size == size && s.brand == brand);
    }
    function addNewShoe(newshoe) {
        var exits = false;
        shoes.forEach(shoe => {
            let instock = shoe.in_stock;
            delete shoe.in_stock
            if (JSON.stringify(newshoe) === JSON.stringify(shoe)) {
                exits = true;
                shoe["in_stock"] = instock;
                for (const key in shoe) {
                    if (key == "in_stock") {
                        if (shoe[key] > 0)
                            shoe[key]++;
                    }
                }
            }
            if(!exits)
                shoe["in_stock"] = instock;
        })

        if(!exits){
            newshoe["in_stock"] = 1;
            shoes.push(newshoe);
        }
    }
    function BuyShoe(newshoe) {
        var exits = false;
        shoes.forEach(shoe => {
            let instock = shoe.in_stock;
            delete shoe.in_stock
            if (JSON.stringify(newshoe) === JSON.stringify(shoe)) {
                exits = true;
                shoe["in_stock"] = instock;
                for (const key in shoe) {
                    if (key == "in_stock") {
                        if (shoe[key] > 1)
                            shoe[key]--;
                        else
                            shoes.splice(shoes.indexOf(shoe));
                    }
                }
                total += shoe.price;
                shoesbasket.push(shoe);
            }
            if(!exits)
                shoe["in_stock"] = instock;
        })
    }

    function shoeOnBasket() {
        return shoesbasket;
    }

    function buyTotal() {
        return total;
    }

    function removeitems()
    {
        total =0;
        shoesbasket = [];
    }
    

    return {
        SearchByColor,
        SearchBySize,
        SearchByPrice,
        SearchByBrand,
        SearchByColorAndSize,
        SearchByColorAndBrand,
        SearchBySizeAndBrand,
        SearchByColorAndSizeAndBrand,
        addNewShoe,
        allshoes,
        BuyShoe,
        buyTotal,
        shoeOnBasket,
        removeitems
    }




}
