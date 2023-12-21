"use strict"

/**
 * Generates an HTML structure of a grocery product.
 *
 * @param {String} image - The URL of the product image.
 * @param {String} nameEn - The product name in English.
 * @param {String} namePt - The product name in Portuguese.
 * @param {String} descriptionEn - The product description in English.
 * @param {String} descriptionPt - The product description in Portuguese.
 * @param {String} price - The price of the product.
 * @param {Number} units - The number of units in the product.
 * @returns {String} - HTML representation of the product.
 */
function product(image, nameEn, namePt, descriptionEn, descriptionPt, price, units) {
    return `<img src="${image}">
    <p>
        <span class="grocery-product-name">
            ${lang == "en" ? nameEn : lang == "pt" ? namePt : null}
            <button class="grocery-product-info">i</button>
        </span>
        <span class="hidden-grocery-product-description">
        <img src="${image}">
            <span>
                ${lang == "en" ? descriptionEn : lang == "pt" ? descriptionPt : null}
                <br>
                <br>
            </span>
        </span>
    </p>
    <p>€<span class="price">${price}</span> ${units > 1 ? `/ ${units} units` : "unit"}</p>`;
}

const bakeryProducts = [
    product("./media/images/stores/bakery/chocolate-chip-cookies.png",
        "Chocolate Chip Cookies",
        "Cookies de Chocolate",
        "Indulge in the deliciousness of our Chocolate Chip Cookies made with premium, organic, and vegan ingredients.\
    <br>\
    <br>\
    Ingredients: Almond Flour, Light Brown Sugar, \
    Vegan Chocolate Chips, Vegan Butter, \
    Vanilla Extract, Almond Milk, Salt, Baking Soda\
    <br><br>\
    Expiration date: 01/01/2024\
    <br><br>\
    Price: €0.80 per unit (Sale!)",
        "Delicie-se com a deliciosidade dos nossos Cookies de Chocolate feitos com ingredientes premium, orgânicos e veganos.\
    <br>\
    <br>\
    Ingredientes: Farinha de Amêndoa, Açúcar Mascavo Claro, \
    Lascas de Chocolate Vegano, Manteiga Vegana, \
    Extrato de Baunilha, Leite de Amêndoa, Sal, Bicarbonato de sódio\
    <br><br>\
    Prazo de validade: 01/01/2024\
    <br><br>\
    Preço: €0.80 por unidade (Promoção!)", "0.80", 1),

    product("./media/images/stores/bakery/sorted-bagels.png",
        "Sorted Bagels",
        "Bagels Sortidos",
        "Sorted Bagels are a delightful assortment of bagels made with high-quality ingredients.\
    <br>\
    <br>\
    Ingredients: Almond Flour, Water, Yeast, Salt, Assorted Toppings\
    <br><br>\
    Expiration date: 01/01/2024\
    <br><br>\
    Price: €4.40 per unit",
        "Bagels Sortidos são uma variedade encantadora de bagels feitos com ingredientes de alta qualidade.\
    <br>\
    <br>\
    Ingredientes: Farinha de amêndoa, Água, Fermento, Sal, Coberturas sortidas\
    <br><br>\
    Prazo de validade: 01/01/2024\
    <br><br>\
    Preço: €4.40 por unidade", "4.40", 4),

    product("./media/images/stores/bakery/red-velvet-cake.png",
        "Red Velvet Cake",
        "Bolo Red Velvet",
        "Indulge in the rich and velvety goodness of our Red Velvet Cake. Perfect for celebrations and special occasions.\
    <br>\
    <br>\
    Ingredients: Gluten-Free Wheat Flour, Straberry Coloring, Organic Sugar, Vegan Cream Cheese Frosting, Cocoa Powder, Vegan Butter, Salt\
    <br><br>\
    Expiration date: 01/01/2024\
    <br><br>\
    Price: €45 per unit",
        "Delicie-se com a riqueza e suavidade do nosso Bolo Red Velvet. Perfeito para celebrações e ocasiões especiais.\
    <br>\
    <br>\
    Ingredientes: Farinha de trigo sem glúten, Corante de morango, Açúcar orgânico, Cobertura de cream cheese, Cacau em pó, Manteiga begana, Sal\
    <br><br>\
    Prazo de validade: 01/01/2024\
    <br><br>\
    Preço: €45 por unidade", "45", 1),

    product("./media/images/stores/bakery/cherry-pie.png",
        "Cherry Pie",
        "Tarte de Cereja",
        "Enjoy the sweet and tart flavors of our Cherry Pie. Made with freshly picked cherries and a flaky crust.\
    <br>\
    <br>\
    Ingredients: Fresh Cherries, Organic Sugar, Gluten-Free Wheat Flour, Vegan Butter, Salt\
    <br><br>\
    Expiration date: 01/01/2024\
    <br><br>\
    Price: €47 per unit",
        "Delicie-se com os sabores doces e azedos da nossa Tarte de Cereja. Feita com cerejas frescas e uma crosta crocante.\
    <br>\
    <br>\
    Ingredientes: Cerejas Frescas, Açúcar orgânico, Farinha de trigo sem glúten, Manteiga Vegana, Sal\
    <br><br>\
    Prazo de validade: 01/01/2024\
    <br><br>\
    Preço: €47 por unidade", "47", 1),

    product("./media/images/stores/bakery/croissants.png",
        "Croissants",
        "Croissants",
        "Savor the flaky layers of our freshly baked Croissants. Perfect for breakfast or as a delightful snack.\
    <br>\
    <br>\
    Ingredients: Gluten-Free Wheat Flour, Vegan Butter, Soy Milk, Organic Sugar, Salt, Yeast\
    <br><br>\
    Expiration date: 01/01/2024\
    <br><br>\
    Price: €2 per unit",
        "Aprecie as camadas crocantes dos nossos Croissants recém-assados. Perfeito para o café da manhã ou como um lanche delicioso.\
    <br>\
    <br>\
    Ingredientes: Farinha de trigo sem glúten, Manteiga Vegana, Leite de Soja, Açúcar orgânico, Sal, Fermento\
    <br><br>\
    Prazo de validade: 01/01/2024\
    <br><br>\
    Preço: €2 por unidade", "2", 1),

    product("./media/images/stores/bakery/apple-pie.png",
        "Apple Pie",
        "Tarte de Maçã",
        "Indulge in the wholesome goodness of our Apple Pie made with organic and vegan ingredients.\
    <br>\
    <br>\
    Ingredients: Organic Apples, Organic Flour, Vegan Butter, Cane Sugar, Cinnamon, Salt\
    <br><br>\
    Expiration date: 01/01/2024\
    <br><br>\
    Price: €47 per unit",
        "Delicie-se com a bondade saudável da nossa Tarte de Maçã feita com ingredientes orgânicos e veganos.\
    <br>\
    <br>\
    Ingredientes: Maçãs Orgânicas, Farinha Orgânica, Manteiga Vegana, Açúcar de Cana, Canela, Sal\
    <br><br>\
    Prazo de validade: 01/01/2024\
    <br><br>\
    Preço: €47 por unidade", "47", 1),

    product("./media/images/stores/bakery/vanilla-cake.png",
        "Vanilla Cake",
        "Bolo de Baunilha",
        "Savor the sweetness of our Vanilla Cake, crafted with care using organic and vegan ingredients.\
    <br>\
    <br>\
    Ingredients: Organic Flour, Vegan Butter, Almond Milk, Cane Sugar, Vanilla Extract, Baking Powder\
    <br><br>\
    Expiration date: 01/01/2024\
    <br><br>\
    Price: €29.99 per unit",
        "Aprecie a doçura do nosso Bolo de Baunilha, feito com cuidado usando ingredientes orgânicos e veganos.\
    <br>\
    <br>\
    Ingredientes: Farinha Orgânica, Manteiga Vegana, Leite de Amêndoa, Açúcar de Cana, Extrato de Baunilha, Fermento em Pó\
    <br><br>\
    Prazo de validade: 01/01/2024\
    <br><br>\
    Preço: €29.99 por unidade", "29.99", 1),

    product("./media/images/stores/bakery/garlic-bread.png",
        "Garlic Bread",
        "Pão de Alho",
        "Savor the aromatic delight of our Garlic Bread, made with organic and vegan ingredients.\
    <br>\
    <br>\
    Ingredients: Organic Wheat Bread, Vegan Garlic Butter, Fresh Garlic, Parsley, Olive Oil, Sea Salt\
    <br><br>\
    Expiration date: 01/01/2024\
    <br><br>\
    Price: €2 per unit",
        "Aprecie a delícia aromática do nosso Pão de Alho, feito com ingredientes orgânicos e veganos.\
    <br>\
    <br>\
    Ingredientes: Pão de Trigo Orgânico, Manteiga de Alho Vegana, Alho Fresco, Salsinha, Azeite de Oliva, Sal Marinho\
    <br><br>\
    Prazo de validade: 01/01/2024\
    <br><br>\
    Preço: €2 por unidade", "2", 1),

    product("./media/images/stores/bakery/the-cake-is-a-lie.png",
        "Chocolate Cake",
        "Bolo de Chocolate",
        "Indulge in the rich and decadent flavor of our Chocolate Cake, made with premium organic cocoa and vegan ingredients.\
    <br>\
    <br>\
    Ingredients: Organic Flour, Organic Sugar, Vegan Chocolate, Almond Milk, Organic Cocoa Powder, Baking Powder\
    <br><br>\
    Expiration date: 01/01/2024\
    <br><br>\
    Price: €33.99 per unit",
        "Delicie-se com o sabor rico e decadente do nosso Bolo de Chocolate, feito com cacau orgânico premium e ingredientes veganos.\
    <br>\
    <br>\
    Ingredientes: Farinha Orgânica, Açúcar Orgânico, Chocolate Vegano, Leite de Amêndoa, Cacau em Pó Orgânico, Fermento em Pó\
    <br><br>\
    Prazo de validade: 01/01/2024\
    <br><br>\
    Preço: €33.99 por unidade", "33.99", 1),

    product("./media/images/stores/bakery/rustic-baguette.png",
        "Rustic Baguette",
        "Baguete Rústica",
        "Savor the crusty exterior and soft interior of our Rustic Baguette, made with organic and vegan ingredients.\
    <br>\
    <br>\
    Ingredients: Organic Flour, Water, Yeast, Salt\
    <br><br>\
    Expiration date: 01/01/2024\
    <br><br>\
    Price: €1.50 per unit",
        "Aprecie a crosta crocante e o interior macio da nossa Baguete Rústica, feita com ingredientes orgânicos e veganos.\
    <br>\
    <br>\
    Ingredientes: Farinha Orgânica, Água, Fermento, Sal\
    <br><br>\
    Prazo de validade: 01/01/2024\
    <br><br>\
    Preço: €1.50 por unidade", "1.50", 1),

    product("./media/images/stores/bakery/oat-cookies.png",
        "Oat Cookies",
        "Cookies de Aveia",
        "Enjoy the wholesome goodness of our Oat Cookies, made with organic oats and vegan-friendly ingredients.\
    <br>\
    <br>\
    Ingredients: Organic Rolled Oats, Organic Flour, Vegan Butter, Cane Sugar, Vanilla Extract, Baking Soda, Salt\
    <br><br>\
    Expiration date: 01/01/2024\
    <br><br>\
    Price: €1.00 per unit",
        "Delicie-se com a bondade saudável dos nossos Cookies de Aveia, feitos com aveia orgânica e ingredientes veganos.\
    <br>\
    <br>\
    Ingredientes: Aveia Orgânica em Flocos, Farinha Orgânica, Manteiga Vegana, Açúcar de Cana, Extrato de Baunilha, Bicarbonato de Sódio, Sal\
    <br><br>\
    Prazo de validade: 01/01/2024\
    <br><br>\
    Preço: €1.00 por unidade", "1.00", 1),

    product("./media/images/stores/bakery/carrot-cake.png",
        "Carrot Cake",
        "Bolo de Cenoura",
        "Indulge in the delightful flavor of our Carrot Cake, made with organic carrots and vegan ingredients.\
    <br>\
    <br>\
    Ingredients: Organic Carrots, Organic Flour, Vegan Butter, Cane Sugar, Walnuts, Cinnamon, Baking Powder\
    <br><br>\
    Expiration date: 01/01/2024\
    <br><br>\
    Price: €35 per unit",
        "Delicie-se com o sabor delicioso do nosso Bolo de Cenoura, feito com cenouras orgânicas e ingredientes veganos.\
    <br>\
    <br>\
    Ingredientes: Cenouras Orgânicas, Farinha Orgânica, Manteiga Vegana, Açúcar de Cana, Nozes, Canela, Fermento em Pó\
    <br><br>\
    Prazo de validade: 01/01/2024\
    <br><br>\
    Preço: €35 por unidade", "35", 1),

    product("./media/images/stores/bakery/pao-de-queijo.png",
        "Brazilian Cheese Bread",
        "Pão de Queijo",
        "Experience the authentic taste of our Brazilian Cheese Bread, made with organic tapioca flour and vegan cheese.\
    <br>\
    <br>\
    Ingredients: Organic Tapioca Flour, Vegan Cheese, Olive Oil, Water\
    <br><br>\
    Expiration date: 01/01/2024\
    <br><br>\
    Price: €7.80 per unit",
        "Experimente o sabor autêntico do nosso Pão de Queijo, feito com farinha de tapioca orgânica e queijo vegano.\
    <br>\
    <br>\
    Ingredientes: Farinha de Tapioca Orgânica, Queijo Vegano, Azeite de Oliva, Água\
    <br><br>\
    Prazo de validade: 01/01/2024\
    <br><br>\
    Preço: €7.80 por unidade", "7.80", 5),

    product("./media/images/stores/bakery/fruit-cake.png",
        "Fruit Cake",
        "Bolo de Frutas",
        "Delight in the medley of flavors with our Fruit Cake, crafted with a variety of organic fruits and vegan ingredients.\
    <br>\
    <br>\
    Ingredients: Organic Mixed Fruits, Organic Flour, Vegan Butter, Cane Sugar, Almonds, Baking Powder\
    <br><br>\
    Expiration date: 01/01/2024\
    <br><br>\
    Price: €50 per unit",
        "Delicie-se com a mistura de sabores do nosso Bolo de Frutas, feito com uma variedade de frutas orgânicas e ingredientes veganos.\
    <br>\
    <br>\
    Ingredientes: Frutas Orgânicas Variadas, Farinha Orgânica, Manteiga Vegana, Açúcar de Cana, Amêndoas, Fermento em Pó\
    <br><br>\
    Prazo de validade: 01/01/2024\
    <br><br>\
    Preço: €50 por unidade", "50", 1),

    product("./media/images/stores/bakery/sourdough-bread.png",
        "Sourdough Bread",
        "Pão de Massa Fermentada",
        "Savor the traditional taste of our Sourdough Bread, made with organic sourdough starter and high-quality flour.\
    <br>\
    <br>\
    Ingredients: Organic Sourdough Starter, Organic Flour, Water, Salt\
    <br><br>\
    Expiration date: 01/01/2024\
    <br><br>\
    Price: €7 per unit",
        "Aprecie o sabor tradicional do nosso Pão de Massa Fermentada, feito com fermento natural orgânico e farinha de alta qualidade.\
    <br>\
    <br>\
    Ingredientes: Fermento Natural Orgânico, Farinha Orgânica, Água, Sal\
    <br><br>\
    Prazo de validade: 01/01/2024\
    <br><br>\
    Preço: €7 por unidade", "7", 1),

    product("./media/images/stores/bakery/toasted-bread.png",
        "Toasts",
        "Tostas",
        "Enjoy the crispiness of our Toasts, made with organic bread and vegan-friendly toppings. Perfect for any occasion.\
    <br>\
    <br>\
    Ingredients: Organic Bread, Olive Oil, Sea Salt\
    <br><br>\
    Expiration date: 01/01/2024\
    <br><br>\
    Price: €1.30 per unit",
        "Aprecie a crocância das nossas Tostas, feitas com pão orgânico e coberturas amigáveis ao veganismo. Perfeitas para qualquer ocasião.\
    <br>\
    <br>\
    Ingredientes: Pão Orgânico, Azeite de Oliva, Sal Marinho\
    <br><br>\
    Prazo de validade: 01/01/2024\
    <br><br>\
    Preço: €1.30 por unidade", "1.30", 5),

    product("./media/images/stores/bakery/vanilla-donuts.png",
        "Vanilla Donuts",
        "Donuts de Baunilha",
        "Indulge in the classic flavor of our Vanilla Donuts, made with organic ingredients and a touch of sweetness.\
    <br>\
    <br>\
    Ingredients: Organic Flour, Almond Milk, Vegan Sugar, Vanilla Extract, Baking Powder, Salt\
    <br><br>\
    Expiration date: 01/01/2024\
    <br><br>\
    Price: €4 per unit",
        "Delicie-se com o sabor clássico dos nossos Donuts de Baunilha, feitos com ingredientes orgânicos e um toque de doçura.\
    <br>\
    <br>\
    Ingredientes: Farinha Orgânica, Leite de Amêndoa, Açúcar Vegano, Extrato de Baunilha, Fermento em Pó, Sal\
    <br><br>\
    Prazo de validade: 01/01/2024\
    <br><br>\
    Preço: €4 por unidade", "4", 1),

    product("./media/images/stores/bakery/chocolate-donuts.png",
        "Chocolate Donuts",
        "Donuts de Chocolate",
        "Indulge in the irresistible flavor of our Chocolate Donuts, made with premium organic cocoa and vegan ingredients.\
    <br>\
    <br>\
    Ingredients: Organic Flour, Almond Milk, Vegan Chocolate, Vegan Sugar, Vanilla Extract, Baking Powder, Salt\
    <br><br>\
    Expiration date: 01/01/2024\
    <br><br>\
    Price: €4.30 per unit",
        "Delicie-se com o sabor irresistível dos nossos Donuts de Chocolate, feitos com cacau orgânico premium e ingredientes veganos.\
    <br>\
    <br>\
    Ingredientes: Farinha Orgânica, Leite de Amêndoa, Chocolate Vegano, Açúcar Vegano, Extrato de Baunilha, Fermento em Pó, Sal\
    <br><br>\
    Prazo de validade: 01/01/2024\
    <br><br>\
    Preço: €4.30 por unidade", "4.30", 1),

    product("./media/images/stores/bakery/tomato-crackers.png",
        "Tomato Crackers",
        "Marinheiras de Tomate",
        "Experience the savory goodness of our Tomato Crackers, made with organic tomatoes and gluten-free ingredients.\
    <br>\
    <br>\
    Ingredients: Organic Tomatoes, Gluten-Free Flour, Olive Oil, Sea Salt\
    <br><br>\
    Expiration date: 01/01/2024\
    <br><br>\
    Price: €2.20 per unit",
        "Experimente a bondade salgada das nossas Marinheiras de Tomate, feitas com tomates orgânicos e ingredientes sem glúten.\
    <br>\
    <br>\
    Ingredientes: Tomates Orgânicos, Farinha Sem Glúten, Azeite de Oliva, Sal Marinho\
    <br><br>\
    Prazo de validade: 01/01/2024\
    <br><br>\
    Preço: €2.20 por unidade", "2.20", 10),

    product("./media/images/stores/bakery/organic-flour.png",
        "Organic Gluten-Free Almond Flour",
        "Farinha de Amêndoa Orgânica Sem Glúten",
        "Choose our Organic Gluten-Free Almond Flour for your baking needs, made with high-quality organic almonds.\
    <br>\
    <br>\
    Ingredients: Organic Almonds\
    <br><br>\
    Expiration date: 01/01/2024\
    <br><br>\
    Price: €7 per unit",
        "Escolha a nossa Farinha de Amêndoa Orgânica Sem Glúten para suas necessidades de panificação, feita com amêndoas orgânicas de alta qualidade.\
    <br>\
    <br>\
    Ingredientes: Amêndoas Orgânicas\
    <br><br>\
    Prazo de validade: 01/01/2024\
    <br><br>\
    Preço: €7 por unidade", "7", 1),

];

const lidilProducts = [
    product("./media/images/stores/lidil/uwu-marshmallows.png",
        "Uwu Marshmallows",
        "Marshmallows Uwu",
        "Uwu Marshmallows",
        "Marshmallows Uwu",
        "0.99",
        1),

    product("./media/images/stores/lidil/lettuce.png",
        "Lettuce",
        "Alface",
        "Lettuce",
        "Alface",
        "0.69",
        1),

    product("./media/images/stores/lidil/beetroot.png",
        "Beetroot",
        "Beterraba",
        "Beetroot",
        "Beterraba",
        "0.99",
        3),

    product("./media/images/stores/lidil/baby-tomatoes.png",
        "Japanese Cherry Tomatoes",
        "Tomates Cherry Japoneses",
        "Japanese Cherry Tomatoes",
        "Tomates Cherry Japoneses",
        "1.99",
        1),

    product("./media/images/stores/lidil/sugar.png",
        "Sweet White Sugar",
        "Açúcar Branco Sweet",
        "Sweet White Sugar",
        "Açúcar Branco Sweet",
        "5.99",
        1),

        product("./media/images/stores/osilo/vinho.png",
        "Pacheco Wine",
        "Vinho Pacheco",
        "Pacheco Wine\
            <br>\
            <br>\
            Ingredients: Grapes\
            <br><br>\
            Expiration date: 20/12/2023\
            <br><br>\
            Price: €15.99 per unit",
        "Vinho Pacheco\
            <br>\
            <br>\
            Ingredientes: Uvas\
            <br><br>\
            Prazo de validade: 20/12/2023\
            <br><br>\
            Preço: €15.99 por unidade",
        "15.99", 1),

        product("./media/images/stores/osilo/roloCozinha.jpg",
        "Kitchen Paper",
        "Papel de Cozinha",
        "Kitchen Paper\
            <br>\
            <br>\
            Ingredients: Paper\
            <br><br>\
            Expiration date:\
            <br><br>\
            Price: €2.99 per unit",
        "Papel de Cozinha\
            <br>\
            <br>\
            Ingredientes: Papel\
            <br><br>\
            Prazo de validade:\
            <br><br>\
            Preço: €2.99 por unidade",
        "2.99", 1),

        product("./media/images/stores/maxipreco/guardanapos.jpg",
        "Napkins",
        "Guardanapos",
        "Napkins\
            <br>\
            <br>\
            Ingredients: Paper\
            <br><br>\
            Expiration date:\
            <br><br>\
            Price: €3.99 per unit",
        "Guardanapos\
            <br>\
            <br>\
            Ingredientes: Papel\
            <br><br>\
            Prazo de validade:\
            <br><br>\
            Preço: €3.99 por unidade",
        "3.99", 1),

        product("./media/images/stores/maxipreco/bacalhau.webp",
        "Frozen Codfish",
        "Bacalhau Congelado",
        "Frozen Codfish\
            <br>\
            <br>\
            Ingredients: 100% Codfish\
            <br><br>\
            Expiration date: 10/1/2024\
            <br><br>\
            Price: €15.99 per unit",
        "Bacalhau Congelado\
            <br>\
            <br>\
            Ingredientes: 100% Bacalhau\
            <br><br>\
            Prazo de validade: 10/1/2024\
            <br><br>\
            Preço: €15.99 por unidade",
        "15.99", 1),

        product("./media/images/stores/maxipreco/cebola.jpg",
        "6 Onions",
        "6 Cebolas",
        "6 Onions\
            <br>\
            <br>\
            Ingredients: Onion\
            <br><br>\
            Expiration date: 6/8/2024\
            <br><br>\
            Price: €2.99 per unit",
        "6 Cebolas\
            <br>\
            <br>\
            Ingredientes: Onion\
            <br><br>\
            Prazo de validade: 6/8/2024\
            <br><br>\
            Preço: €2.99 por unidade",
        "2.99", 1),

        product("./media/images/stores/maxipreco/pao.jpeg",
        "Bread",
        "Carcaça de pão",
        "Bread\
            <br>\
            <br>\
            Ingredients: flour, water, yeast,<br> salt\
            <br><br>\
            Expiration date: 9/12/2023\
            <br><br>\
            Price: €0.99 per unit",
        "Carcaça de pão\
            <br>\
            <br>\
            Ingredientes: farinha, água, fermento,<br> sal\
            <br><br>\
            Prazo de validade: 9/12/2023\
            <br><br>\
            Preço: €0.99 por unidade",
        "0.99", 1),

        product("./media/images/stores/maxipreco/angus.webp",
        "Cow Steak",
        "Bife de Vazia",
        "Cow Steak\
            <br>\
            <br>\
            Ingredients: Cow Meat\
            <br><br>\
            Expiration date: 12/12/2023\
            <br><br>\
            Price: €24.99 per unit",
        "Bife da Vazia\
            <br>\
            <br>\
            Ingredientes: Carne de Vazia\
            <br><br>\
            Prazo de validade: 12/12/2023\
            <br><br>\
            Preço: €24.99 por unidade",
        "24.99", 1),

        product("./media/images/stores/maxipreco/sumolaranja.png",
        "Orange Juice",
        "Sumo de Laranja",
        "Orange Juice\
            <br>\
            <br>\
            Ingredients: 100% Oranges\
            <br><br>\
            Expiration date: 19/12/2024\
            <br><br>\
            Price: €4.99 per unit",
        "Sumo de Laranja\
            <br>\
            <br>\
            Ingredientes: 100% \
            <br><br>\
            Prazo de validade: 19/12/2024\
            <br><br>\
            Preço: €4.99 por unidade",
        "4.99", 1),

        product("./media/images/stores/maxipreco/feijao.jpg",
        "Black Beans",
        "Feijão Preto",
        "Black Beans\
            <br>\
            <br>\
            Ingredients: 100% Black Beans\
            <br><br>\
            Expiration date: 16/11/2025\
            <br><br>\
            Price: €0.99 per unit",
        "Feijão Preto\
            <br>\
            <br>\
            Ingredientes: 100% Feijão Preto\
            <br><br>\
            Prazo de validade: 16/11/2025\
            <br><br>\
            Preço: €0.99 por unidade",
        "0.99", 1),

        product("./media/images/stores/maxipreco/leite.png",
        "Whole Milk",
        "Leite Gordo",
        "Whole Milk\
            <br>\
            <br>\
            Ingredients: Milk\
            <br><br>\
            Expiration date: 10/12/2024\
            <br><br>\
            Price: €1.99 per unit",
        "Leite Gordo\
            <br>\
            <br>\
            Ingredientes: Leite\
            <br><br>\
            Prazo de validade: 10/12/2024\
            <br><br>\
            Preço: €1.99 por unidade",
        "1.99", 1),

        product("./media/images/stores/maxipreco/batatafrita.jpg",
        "Potato Chips",
        "Batatas Fritas",
        "Potato Chips\
            <br>\
            <br>\
            Ingredients: Potato, Salt\
            <br><br>\
            Expiration date: 1/2/2024\
            <br><br>\
            Price: €2.99 per unit",
        "Batatas Fritas\
            <br>\
            <br>\
            Ingredientes: Batata, Sal\
            <br><br>\
            Prazo de validade: 1/2/2024\
            <br><br>\
            Preço: €2.99 por unidade",
        "2.99", 1),

        product("./media/images/stores/maxipreco/cereal.png",
        "Oat Cereal",
        "Cereais de Aveia",
        "Oat Cereal\
            <br>\
            <br>\
            Ingredients: Oat, Wheat\
            <br><br>\
            Expiration date: 10/6/2025\
            <br><br>\
            Price: €6.99 per unit",
        "Cereais de Aveia\
            <br>\
            <br>\
            Ingredientes: Aveia, Trigo\
            <br><br>\
            Prazo de validade: 10/6/2025\
            <br><br>\
            Preço: €6.99 por unidade",
        "6.99", 1),

        product("./media/images/stores/maxipreco/aveia.jpg",
        "Oatmeal",
        "Aveia",
        "Oatmeal\
            <br>\
            <br>\
            Ingredients: Oatmeal\
            <br><br>\
            Expiration date: 3/3/2024\
            <br><br>\
            Price: €3.99 per unit",
        "Aveia\
            <br>\
            <br>\
            Ingredientes: Aveia\
            <br><br>\
            Prazo de validade: 3/3/2024\
            <br><br>\
            Preço: €3.99 por unidade",
        "3.99", 1),

        product("./media/images/stores/maxipreco/queijo.jpg",
        "Flemish Cheese",
        "Queijo Flamengo",
        "Flemish Cheese\
            <br>\
            <br>\
            Ingredients: Milk, Fat\
            <br><br>\
            Expiration date: 10/1/2024\
            <br><br>\
            Price: €2.99 per unit",
        "Queijo Flamengo\
            <br>\
            <br>\
            Ingredientes: Leite, Gorduras\
            <br><br>\
            Prazo de validade: 10/1/2024\
            <br><br>\
            Preço: €2.99 por unidade",
        "2.99", 1),

        product("./media/images/stores/maxipreco/cerveja.jpg",
        "Donini Beer",
        "Cerveja Donini",
        "Donini Beer\
            <br>\
            <br>\
            Ingredients: Wheat, Water\
            <br><br>\
            Expiration date: 8/2/2024\
            <br><br>\
            Price: €4.99 per unit",
        "Cerveja Donini\
            <br>\
            <br>\
            Ingredientes: Trigo, Água\
            <br><br>\
            Prazo de validade: 8/2/2024\
            <br><br>\
            Preço: €4.99 por unidade",
        "4.99", 1),


        product("./media/images/stores/maxipreco/agua.jpg",
        "Bottled Water",
        "Água Engarrafada",
        "Bottle Water\
            <br>\
            <br>\
            Ingredients: Pure Water\
            <br><br>\
            Expiration date: 6/12/2024\
            <br><br>\
            Price: €2.99 per unit",
        "Pão biológico Royal\
            <br>\
            <br>\
            Ingredientes: Água Pura\
            <br><br>\
            Prazo de validade: 6/12/2024\
            <br><br>\
            Preço: €2.99 por unidade",
        "2.99", 1),

        product("./media/images/stores/maxipreco/Pepperoni.webp",
        "Pepperoni",
        "Pepperoni",
        "Pepperoni\
            <br>\
            <br>\
            Ingredients: Pork Pepperoni\
            <br><br>\
            Expiration date: 2/2/2024\
            <br><br>\
            Price: €5.99 per unit",
        "Pepperoni\
            <br>\
            <br>\
            Ingredientes: Pepperoni de Porco\
            <br><br>\
            Prazo de validade: 2/2/2024\
            <br><br>\
            Preço: €5.99 por unidade",
        "5.99", 1),

        product("./media/images/stores/maxipreco/bacon.jpg",
        "Bacon",
        "Bacon",
        "Bacon\
            <br>\
            <br>\
            Ingredients: Pork Bacon\
            <br><br>\
            Expiration date: 3/2/2024\
            <br><br>\
            Price: €5.99 per unit",
        "Bacon\
            <br>\
            <br>\
            Ingredientes: Bacon\
            <br><br>\
            Prazo de validade: 3/2/2024\
            <br><br>\
            Preço: €5.99 por unidade",
        "5.99", 1),

        product("./media/images/stores/maxipreco/bacon.jpg",
        "Pork Ham",
        "Fiambre de Porco",
        "Pork Ham\
            <br>\
            <br>\
            Ingredients: Pork Ham\
            <br><br>\
            Expiration date: 4/2/2024\
            <br><br>\
            Price: €5.99 per unit",
        "Bacon\
            <br>\
            <br>\
            Ingredientes: Fiambre do Porco\
            <br><br>\
            Prazo de validade: 4/2/2024\
            <br><br>\
            Preço: €5.99 por unidade",
        "5.99", 1),

        product("./media/images/stores/maxipreco/straw.webp",
        "Strawberry Cupcakes",
        "Cupcakes de Morango",
        "Strawberry Cupcakes\
            <br>\
            <br>\
            Ingredients: flour, water, yeast,<br>sugar, salt, strawberry\
            <br><br>\
            Expiration date: 10/1/2024\
            <br><br>\
            Price: €1.99 per unit",
        "Cupcakes de Morango\
            <br>\
            <br>\
            Ingredientes: farinha, água, fermento,<br>açúcar, sal, morango\
            <br><br>\
            Prazo de validade: 10/1/2024\
            <br><br>\
            Preço: €1.99 por unidade",
        "1.99", 1),

        product("./media/images/stores/maxipreco/cho.jpg",
        "Chocolate Cupcakes",
        "Chocolate de Morango",
        "Chocolate Cupcakes\
            <br>\
            <br>\
            Ingredients: flour, water, yeast,<br>sugar, salt, chocolate\
            <br><br>\
            Expiration date: 10/1/2024\
            <br><br>\
            Price: €1.99 per unit",
        "Cupcakes de Chocolate\
            <br>\
            <br>\
            Ingredientes: farinha, água, fermento,<br>açúcar, sal, chocolate\
            <br><br>\
            Prazo de validade: 10/1/2024\
            <br><br>\
            Preço: €1.99 por unidade",
        "1.99", 1),

        product("./media/images/stores/maxipreco/cho.jpg",
        "Strawberry Jam",
        "Compota de Morango",
        "Strawberry Jam\
            <br>\
            <br>\
            Ingredients: sugar, strawberry\
            <br><br>\
            Expiration date: 4/3/2024\
            <br><br>\
            Price: €4.99 per unit",
        "Compota de Morango\
            <br>\
            <br>\
            Ingredientes: açucar, morango\
            <br><br>\
            Prazo de validade: 4/3/2024\
            <br><br>\
            Preço: €4.99 por unidade",
        "4.99", 1),
];

const oSiloProducts = [
    product("./media/images/stores/osilo/box-water.png",
        "They Put Water In A Box Mineral Water 1L",
        "Água Mineral They Put Water In A Box 1L",
        "They Put Water In A Box Mineral Water 1L",
        "Água Mineral They Put Water In A Box 1L",
        "4.99",
        1),

    product("./media/images/stores/osilo/buttery-butter.png",
        "Buttery Butter",
        "Manteiga Buttery",
        "Buttery Butter",
        "Manteiga Buttery",
        "5.99",
        1),

    product("./media/images/stores/osilo/flouwre-organic-flour.png",
        "Flouwre Gluten-Free Wheat Flour",
        "Farinha de Trigo Sem Glúten Flouwre",
        "Flouwre Gluten-Free Wheat Flour",
        "Farinha de Trigo Sem Glúten Flouwre",
        "6.99",
        1),

    product("./media/images/stores/osilo/ovos.jpg",
        "Organic Eggs",
        "Ovos Orgânicos",
        "Organic Eggs",
        "Ovos Orgânicos",
        "3.99",
        1),

    products("./media/images/stores/osilo/leite.png",
        "Organic Milk",
        "Leite Orgânico",
        "Organic Milk",
        "Leite Orgânico",
        "2.99",
        1),

    product("./media/images/stores/osilo/acucar.png",
        "Organic Sugar",
        "Açúcar Orgânico",
        "Organic Sugar",
        "Açúcar Orgânico",
        "4.99",
        1),

    product("./media/images/stores/osilo/tomate.png", 
        "Organic Tomatoes",
        "Tomates Orgânicos",
        "Organic Tomatoes",
        "Tomates Orgânicos",
        "1.99",
        1),

    product("./media/images/stores/osilo/pao.png",
        "Organic Wheat Bread",
        "Pão de Trigo Orgânico",
        "Organic Wheat Bread",
        "Pão de Trigo Orgânico",
        "3.99",
        1),

    product("./media/images/stores/osilo/spar.png",
        "Organic Wheat Pasta",
        "Massa de Trigo Orgânica",
        "Organic Wheat Pasta",
        "Massa de Trigo Orgânica",
        "2.99",
        1),

    product("./media/images/stores/osilo/organic-wheat.png",
        "Organic Wheat",
        "Trigo Orgânico",
        "Organic Wheat",
        "Trigo Orgânico",
        "3.99",
        1),
    
    product("./media/images/stores/osilo/banana.png",
        "Organic Bananas",
        "Bananas Orgânicas",
        "Organic Bananas",
        "Bananas Orgânicas",
        "1.99",
        1),

    product("./media/images/stores/osilo/batata.png",
        "Organic Potatoes",
        "Batatas Orgânicas",
        "Organic Potatoes",
        "Batatas Orgânicas",
        "3.99",
        1),

    product("./media/images/stores/osilo/pepino.png",
        "Organic Cucumber",
        "Pepino Orgânico",
        "Organic Cucumber",
        "Pepino Orgânico",
        "1.99",
1),
    product("./media/images/stores/osilo/alface.png",
        "Organic Lettuce",
        "Alface Orgânica",
        "Organic Lettuce",
        "Alface Orgânica",
        "2.99",
1),
    product("./media/images/stores/osilo/uvas.png",
        "Organic Grapes",
        "Uvas Orgânicas",
        "Organic Grapes",
        "Uvas Orgânicas",
        "6.99",
1),
    product("./media/images/stores/osilo/maca.png",
        "Organic Apples",
        "Maçãs Orgânicas",
        "Organic Apples",
        "Maçãs Orgânicas",
        "4.99",
        1),
    product("./media/images/stores/osilo/abacate.png",
        "Organic Avocado",
        "Abacate Orgânico",
        "Organic Avocado",
        "Abacate Orgânico",
        "1.99",
        1),
    product("./media/images/stores/osilo/blueberry.jpg",
        "Organic Blueberries",
        "Mirtilos Orgânicos",
        "Organic Blueberries",
        "Mirtilos Orgânicos",
        "7.99",
        1),
    product("./media/images/stores/osilo/brocolos.jpg",
        "Organic Broccoli",
        "Brócolis Orgânicos",
        "Organic Broccoli",
        "Brócolis Orgânicos",
        "2.99",
        1),
    product("./media/images/stores/osilo/couveflor.webp",
        "Organic Cauliflower",
        "Couve-flor Orgânica",
        "Organic Cauliflower",
        "Couve-flor Orgânica",
        "3.99",
        1),
    product("./media/images/stores/osilo/alho.png",
        "Organic Garlic",
        "Alho Orgânico",
        "Organic Garlic",
        "Alho Orgânico",
        "1.99",
        1),
    product("./media/images/stores/osilo/gengibre.jpg",
        "Organic Ginger",
        "Gengibre Orgânico",
        "Organic Ginger",
        "Gengibre Orgânico",
        "2.99",
        1),
    product("./media/images/stores/osilo/limao.jpg",
        "Organic Lemons",
        "Limões Orgânicos",
        "Organic Lemons",
        "Limões Orgânicos",
        "3.99",
        1),

        product("./media/images/stores/osilo/cebola.jpg",
        "Organic Onions",
        "Cebolas Orgânicas",
        "Organic Onions",
        "Cebolas Orgânicas",
        "2.99",
        1),

        product("./media/images/stores/osilo/cafe.png",
        "Organic Ground Coffee",
        "Café em Pó Orgânico",
        "Organic Ground Coffee\
            <br>\
            <br>\
            Ingredients: 100% organic ground coffee\
            <br><br>\
            Expiration date: 22/05/2026\
            <br><br>\
            Price: €8.99 per unit",
        "Café em Pó Orgânico\
            <br>\
            <br>\
            Ingredientes: 100% café em pó orgânico\
            <br><br>\
            Prazo de validade: 22/05/2026\
            <br><br>\
            Preço: €8.99 por unidade",
        "8.99", 1),

        product("./media/images/stores/osilo/menta.webp",
        "Biological Mint Cookies",
        "Bolachas de Menta Biológicas",
        "Biological Mint Cookies\
            <br>\
            <br>\
            Ingredients: 50% biological wheat, 50% biological mint\
            <br><br>\
            Expiration date: 23/07/2025\
            <br><br>\
            Price: €4.99 per unit",
        "Café majestoso\
            <br>\
            <br>\
            Ingredientes: 50% trigo biológico, 50% menta biológica\
            <br><br>\
            Prazo de validade: 23/07/2025\
            <br><br>\
            Preço: €8.99 por unidade",
        "8.99", 1),
];

const pingoSalgadoProducts = [
    
    product("./media/images/stores/pingosalgado/oreus-cookies.png",
        "Oreus Cookies",
        "Bolachas Oreus",
        "Oreus Cookies",
        "Bolachas Oreus",
        "1.99",
        1),

    product("./media/images/stores/pingosalgado/almond-milk.png",
        "That's Nuts Almond Milk 500ML",
        "Leite de Amêndoas That's Nuts 500ML",
        "That's Nuts Almond Milk 500ML",
        "Leite de Amêndoas That's Nuts 500ML",
        "1.99",
        1),

    product("./media/images/stores/pingosalgado/chips.jpg",
        "Tasty Chips",
        "Batatas Fritas Saborosas",
        "Tasty Chips",
        "Batatas Fritas Saborosas",
        "2.49",
        1),

    product("./media/images/stores/pingosalgado/citric-acid.jpeg",
        "Citric Acid",
        "Ácido Cítrico",
        "Citric Acid",
        "Ácido Cítrico",
        "3.99",
        1),

    product("./media/images/stores/pingosalgado/convert.webp",
        "Converter 3000",
        "Conversor 3000",
        "Converter 3000",
        "Conversor 3000",
        "5.99",
        1),

    product("./media/images/stores/pingosalgado/hershey-kisses.jpeg",
        "Hershey's Kisses",
        "Beijinhos da Hershey's",
        "Hershey's Kisses",
        "Beijinhos da Hershey's",
        "4.49",
        1),

    product("./media/images/stores/pingosalgado/red_jelly.jpg",
        "Red Jelly",
        "Geléia Vermelha",
        "Red Jelly",
        "Geléia Vermelha",
        "2.99",
        1),

    product("./media/images/stores/pingosalgado/velveeta-cheese.webp",
        "Velveeta Cheese",
        "Queijo Velveeta",
        "Velveeta Cheese",
        "Queijo Velveeta",
        "6.99",
        1),

    product("./media/images/stores/pingosalgado/red-label.jpeg",
        "Red Label Tea",
        "Chá Red Label",
        "Red Label Tea",
        "Chá Red Label",
        "3.49",
        1),

    product("./media/images/stores/pingosalgado/salty-eggs.jpeg",
        "Salty Eggs",
        "Ovos Salgados",
        "Salty Eggs",
        "Ovos Salgados",
        "2.99",
        1),

    product("./media/images/stores/pingosalgado/salty-milk.jpeg",
        "Salty Milk",
        "Leite Salgado",
        "Salty Milk",
        "Leite Salgado",
        "1.79",
        1),

    product("./media/images/stores/pingosalgado/salty-bread.jpeg",
        "Salty Bread",
        "Pão Salgado",
        "Salty Bread",
        "Pão Salgado",
        "3.29",
        1),

    product("./media/images/stores/pingosalgado/butter_icecream.png",
        "Butter Ice Cream",
        "Sorvete de Manteiga",
        "Butter Ice Cream",
        "Sorvete de Manteiga",
        "4.99",
        1),

    product("./media/images/stores/pingosalgado/classic-chips.jpeg",
        "Classic Chips",
        "Batatas Fritas Clássicas",
        "Classic Chips",
        "Batatas Fritas Clássicas",
        "2.29",
        1),

    product("./media/images/stores/pingosalgado/peanut_slab.jpeg",
        "Peanut Slab",
        "Tablete de Amendoim",
        "Peanut Slab",
        "Tablete de Amendoim",
        "3.69",
        1),

    product("./media/images/stores/pingosalgado/pineapple-juice.jpeg",
        "Pineapple Juice",
        "Suco de Abacaxi",
        "Pineapple Juice",
        "Suco de Abacaxi",
        "1.99",
        1),

    product("./media/images/stores/pingosalgado/proud-source-spring-water.jpg",
        "Proud Source Spring Water",
        "Água da Fonte Orgulhosa",
        "Proud Source Spring Water",
        "Água da Fonte Orgulhosa",
        "0.99",
        1),

    product("./media/images/stores/pingosalgado/shampoo.jpeg",
        "Gentle Shampoo",
        "Shampoo Suave",
        "Gentle Shampoo",
        "Shampoo Suave",
        "6.99",
        1),

    product("./media/images/stores/pingosalgado/tahini.jpeg",
        "Tahini",
        "Tahini",
        "Tahini",
        "Tahini",
        "4.29",
        1),

    product("./media/images/stores/pingosalgado/tourtierre.jpeg",
        "Tourtière",
        "Tourtière",
        "Tourtière",
        "Tourtière",
        "7.99",
        1),
];


const pangaeaProducts = [
    product("./media/images/stores/pangaea/yummy-bread.png",
        "Yummy Whole Wheat Bread",
        "Pão Integral Yummy",
        "Yummy Whole Wheat Bread",
        "Pão Integral Yummy",
        "1.99",
        1),

    product("./media/images/stores/pangaea/cocoa-crazy-powder.png",
        "Cocoa Crazy Powder",
        "Cacau em Pó Cocoa Crazy",
        "Cocoa Crazy Powder",
        "Cacau em Pó Cocoa Crazy",
        "0.99",
        1),

    product("./media/images/stores/pangaea/frot-lopps.png",
        "Frot Lopps Cereal",
        "Cereal Frot Lopps",
        "Frot Lopps Cereal",
        "Cereal Frot Lopps",
        "1.99",
        1),

    product("./media/images/stores/pangaea/jen&jerns.png",
        "Jen&Jern's Vanilla Chocolate and Strawberry Mix Ice Cream",
        "Gelado Jen&Jern's Mix Baunilha, Chocolate e Morango",
        "Jen&Jern's Vanilla Chocolate and Strawberry Mix Ice Cream",
        "Gelado Jen&Jern's Mix Baunilha, Chocolate e Morango",
        "5.99",
        1),

    product("./media/images/stores/pangaea/vasso-water.png",
        "VASSO Water 1L",
        "Água VASSO 1L",
        "VASSO Water 1L",
        "Água VASSO 1L",
        "5.99",
        1),

    product("./media/images/stores/pangaea/avocado.png",
        "Avocado",
        "Abacate",
        "Avocado",
        "Abacate",
        "1.99",
        1),
];

const maxiprecoProducts = [
    //apple
    product("./media/images/stores/maxipreco/apple.jpeg",
        "Really prestigious apple",
        "Maçã de prestígio",
        "Really prestigious apple\
            <br>\
            <br>\
            Ingredients: 100% organic apple<br>from the royal garden\
            <br><br>\
            Expiration date: 01/01/2024\
            <br><br>\
            Price: €19.99 per 500g",
        "Maçã de prestígio\
            <br>\
            <br>\
            Ingredientes: 100% maçã orgánico<br>do jardim royal\
            <br><br>\
            Prazo de validade: 01/01/2024\
            <br><br>\
            Preço: €19.99 por 500g",
        "19.99", 1),

    //banana
    product("./media/images/stores/maxipreco/bananas.jpeg",
        "A bunch of precious bananas",
        "Um cacho de bananas preciosas",
        "A bunch of precious bananas\
            <br>\
            <br>\
            Ingredients: 100% gold foiled bananas\
            <br><br>\
            Expiration date: 11/01/2024\
            <br><br>\
            Price: €24.49 per 500g",
        "Um cacho de bananas preciosas\
            <br>\
            <br>\
            Ingredientes: 100% bananas folheadas a ouro\
            <br><br>\
            Prazo de validade: 11/01/2024\
            <br><br>\
            Preço: €24.49 por 500g",
        "24.49", 1),

    product("./media/images/stores/maxipreco/bread.jpeg",
        "Royal organic bread",
        "Pão biológico Royal",
        "Royal organic bread\
            <br>\
            <br>\
            Ingredients: flour, water, yeast,<br>sugar, salt\
            <br><br>\
            Expiration date: 10/12/2023\
            <br><br>\
            Price: €24.99 per unit",
        "Pão biológico Royal\
            <br>\
            <br>\
            Ingredientes: farinha, água, fermento,<br>açúcar, sal\
            <br><br>\
            Prazo de validade: 10/12/2023\
            <br><br>\
            Preço: €24.99 por unidade",
        "24.99", 1),

    product("./media/images/stores/maxipreco/butter.jpeg",
        "Immoderate fresh butter",
        "Manteiga fresca immoderada",
        "Immoderate fresh butter\
            <br>\
            <br>\
            Ingredients: milk fat, water, salt\
            <br><br>\
            Expiration date: 11/03/2024\
            <br><br>\
            Price: €32.75 per unit",
        "Manteiga fresca immoderada\
            <br>\
            <br>\
            Ingredientes: gordura do leite, água, sal\
            <br><br>\
            Prazo de validade: 11/03/2024\
            <br><br>\
            Preço: €32.75 por unidade",
        "32.75", 1),

    product("./media/images/stores/maxipreco/candies.jpeg",
        "Pricey delicious candies",
        "Doces caros e deliciosos",
        "Pricey delicious candies\
            <br>\
            <br>\
            Ingredients: milk, chocolate, sugar,<br>cocoa, milk fat, soy\
            <br><br>\
            Expiration date: 12/05/2024\
            <br><br>\
            Price: €39.79 per unit",
        "Doces caros e deliciosos\
            <br>\
            <br>\
            Ingredientes: leite, chocolate, açúcar,<br>cacau, gordura de leite, soja\
            <br><br>\
            Prazo de validade: 12/05/2024\
            <br><br>\
            Preço: €39.79 por unidade",
        "39.79", 1),

    product("./media/images/stores/maxipreco/chocolate.jpeg",
        "Magnificent €1000 chocolate",
        "Chocolate magnífico de 1000€",
        "Magnificent €1000 chocolate\
            <br>\
            <br>\
            Ingredients: milk, chocolate\
            <br><br>\
            Expiration date: 22/05/2025\
            <br><br>\
            Price: €1000 per unit",
        "Chocolate magnífico de 1000€\
            <br>\
            <br><br>\
            Ingredientes: leite, chocolate\
            <br><br>\
            Prazo de validade: 22/05/2025\
            <br>\
            Preço: €1000 por unidade",
        "1000", 1),

    product("./media/images/stores/maxipreco/coffee.jpeg",
        "Majestic coffee",
        "Café majestoso",
        "Majestic coffee\
            <br>\
            <br>\
            Ingredients: 100% coffee\
            <br><br>\
            Expiration date: 22/05/2026\
            <br><br>\
            Price: €84.99 per unit",
        "Café majestoso\
            <br>\
            <br>\
            Ingredientes: 100% café\
            <br><br>\
            Prazo de validade: 22/05/2026\
            <br><br>\
            Preço: €84.99 por unidade",
        "84.99", 1),

    product("./media/images/stores/maxipreco/cookies.jpeg",
        "Ecessive cookies",
        "Biscoitos ecessiosos",
        "Ecessive cookies\
            <br>\
            <br>\
            Ingredients: chocolate chips,<br>eggs, flour, sugar, butter\
            <br><br>\
            Expiration date: 22/05/2024\
            <br><br>\
            Price: €24.99 per unit",
        "Biscoitos ecessiosos\
            <br>\
            <br>\
            Ingredientes: pepitas de chocolate,<br>ovos, farinha, açúcar, manteiga\
            <br><br>\
            Prazo de validade: 22/05/2024\
            <br><br>\
            Preço: €24.99 por unidade",
        "24.99", 1),

    product("./media/images/stores/maxipreco/crisps.jpeg",
        "Luxury crisps",
        "Batatas fritas de luxo",
        "Luxury crisps\
            <br>\
            <br>\
            Ingredients: potato, vegetable oil,<br>salt, gold\
            <br><br>\
            Expiration date: 01/05/2024\
            <br><br>\
            Price: €32.75 per unit",
        "Batatas fritas de luxo\
            <br>\
            <br>\
            Ingredientes: batata, óleo vegetal,<br>sal, ouro\
            <br><br>\
            Prazo de validade: 01/05/2024\
            <br><br>\
            Preço: €32.75 por unidade",
        "32.75", 1),

    product("./media/images/stores/maxipreco/eggs.jpeg",
        "Kingly eggs",
        "Ovos de Rei",
        "Kingly eggs\
            <br>\
            <br>\
            Ingredients: eggs\
            <br><br>\
            Expiration date: 01/03/2024\
            <br><br>\
            Price: €44.75 per 6 units",
        "Ovos de Rei\
            <br>\
            <br>\
            Ingredientes: ovos\
            <br><br>\
            Prazo de validade: 01/03/2024\
            <br><br>\
            Preço: €44.75 por 6 unidades",
        "44.75", 1),

    product("./media/images/stores/maxipreco/french.jpeg",
        "Eminent french fries",
        "Batatas fritas eminentes",
        "Eminent french fries\
            <br>\
            <br>\
            Ingredients: potato, salt, vegetable oil\
            <br><br>\
            Expiration date: 14/03/2024\
            <br><br>\
            Price: €34.75 per 1kg",
        "Batatas fritas eminentes\
            <br>\
            <br>\
            Ingredientes: batata, sal, óleo vegetal\
            <br><br>\
            Prazo de validade: 14/03/2024\
            <br><br>\
            Preço: €34.75 por 1kg",
        "34.75", 1),

    product("./media/images/stores/maxipreco/ice_cream.jpeg",
        "Dignified ice cream",
        "Gelado digno",
        "Dignified ice cream\
            <br>\
            <br>\
            Ingredients: milk, sugar,<br>vanilla, heavy cream\
            <br><br>\
            Expiration date: 20/12/2024\
            <br><br>\
            Price: €52.45 per 500g",
        "Gelado digno\
            <br>\
            <br>\
            Ingredientes: leite, açúcar,<br>baunilha, natas\
            <br><br>\
            Prazo de validade: 20/12/2024\
            <br><br>\
            Preço: €52.45 por 500g",
        "52.45", 1),

    product("./media/images/stores/maxipreco/milk.jpeg",
        "Baronial milk",
        "Leite baronial",
        "Baronial milk\
            <br>\
            <br>\
            Ingredients: milk\
            <br><br>\
            Expiration date: 20/12/2023\
            <br><br>\
            Price: €19.99 per 1L",
        "Leite baronial\
            <br>\
            <br>\
            Ingredientes: leite\
            <br><br>\
            Prazo de validade: 20/12/2023\
            <br><br>\
            Preço: €19.99 por 1L",
        "19.99", 1),

    product("./media/images/stores/maxipreco/nuts.jpeg",
        "Exorbidant mixed nuts",
        "Mistura de frutos secos exorbidantes",
        "Exorbidant mixed nuts\
            <br>\
            <br>\
            Ingredients: nuts\
            <br><br>\
            Expiration date: 20/05/2026\
            <br><br>\
            Price: €22.75 per unit",
        "Mistura de frutos secos exorbidantes\
            <br>\
            <br>\
            Ingredientes: frutos secos\
            <br><br>\
            Prazo de validade: 20/05/2026\
            <br><br>\
            Preço: €22.75 por unidade",
        "22.75", 1),

    product("./media/images/stores/maxipreco/salt.jpeg",
        "Costly salt",
        "Sal caro",
        "Costly salt\
            <br>\
            <br>\
            Ingredients: sea salt\
            <br><br>\
            Expiration date: 12/05/2036\
            <br><br>\
            Price: €14.99 per 1kg",
        "Sal caro\
            <br>\
            <br>\
            Ingredientes: sal do mar\
            <br><br>\
            Prazo de validade: 12/05/2036\
            <br><br>\
            Preço: €14.99 por 1kg",
        "14.99", 1),

    product("./media/images/stores/maxipreco/strawberries.jpeg",
        "A bunch of fancy strawberries",
        "Um ramo de morangos de luxo",
        "A bunch of fancy strawberries\
            <br>\
            <br>\
            Ingredients: strawberries, diamonds\
            <br><br>\
            Expiration date: 12/12/2023\
            <br><br>\
            Price: €34.99 per 500g",
        "Um ramo de morangos de luxo\
            <br>\
            <br>\
            Ingredientes: morangos, diamantes\
            <br><br>\
            Prazo de validade: 12/12/2023\
            <br><br>\
            Preço: €34.99 por 500g",
        "34.99", 1),

    product("./media/images/stores/maxipreco/sugar.jpeg",
        "Superior sugar",
        "Açúcar superior",
        "Superior sugar\
            <br>\
            <br>\
            Ingredients: sugar\
            <br><br>\
            Expiration date: 03/12/2027\
            <br><br>\
            Price: €9.99 per 1kg",
        "Açúcar superior\
            <br>\
            <br>\
            Ingredientes: açúcar\
            <br><br>\
            Prazo de validade: 03/12/2027\
            <br><br>\
            Preço: €9.99 por 1kg",
        "9.99", 1),

    product("./media/images/stores/maxipreco/tea.jpeg",
        "Really royal tea",
        "Chá realmente Royal",
        "Really royal tea\
            <br>\
            <br>\
            Ingredients: royal tea\
            <br><br>\
            Expiration date: 06/11/2025\
            <br><br>\
            Price: €29.99 per unit",
        "Chá realmente Royal\
            <br>\
            <br>\
            Ingredientes: chá royal\
            <br><br>\
            Prazo de validade: 06/11/2025\
            <br><br>\
            Preço: €29.99 por unidade",
        "29.99", 1),

    product("./media/images/stores/maxipreco/vegetables.jpeg",
        "Fancy bag of exorbitant vegetables",
        "Saco de legumes exorbitantes",
        "Fancy bag of exorbitant vegetables\
            <br>\
            <br>\
            Ingredients: carrot, tomatoes, gabbage\
            <br><br>\
            Expiration date: 03/12/2023\
            <br><br>\
            Price: €39.99 per unit",
        "Saco de legumes exorbitantes\
            <br>\
            <br>\
            Ingredientes: cenoura, tomate, couve\
            <br><br>\
            Prazo de validade: 03/12/2023\
            <br><br>\
            Preço: €39.99 por unidade",
        "39.99", 1),

    product("./media/images/stores/maxipreco/water.jpeg",
        "Invaluable crystal bottle of mineral water",
        "Inestimável garrafa de cristal de água mineral",
        "Invaluable crystal bottle of mineral water\
            <br>\
            <br>\
            Ingredients: mineral water\
            <br><br>\
            Expiration date: 02/03/2024\
            <br><br>\
            Price: €29.99 per 500ml",
        "Inestimável garrafa de cristal de água mineral\
            <br>\
            <br>\
            Ingredientes: água mineral\
            <br><br>\
            Prazo de validade: 02/03/2024\
            <br><br>\
            Preço: €29.99 por 500ml",
        "29.99", 1),
];