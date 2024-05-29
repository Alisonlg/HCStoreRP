var RowsData = [];
var Rows = [];
var saved = "";
var hashcategoryproduct = {};
var hashproductlogic = {};
var hashproductimg = {};
var selectedCategory;

const OpenMenu = (data) => {
    $(`.main-wrapper`).fadeIn(0)
    $(`:root`).fadeIn(0)
    AddRow(data.rows)
}

const OpenBalloon = (data) => {
    $(`:root`).fadeIn(0)
    $(`.balloon`).fadeIn(0)
    $(`.balloondiv`).fadeIn(0)
    AddRowBalloon(data.rows)
}

const OpenWebsite = (data) => {
    $(`:root`).fadeIn(0)
    $(`.iframe-container`).fadeIn(0)
    AddRowWebsite(data.rows)
}

const CloseMenu = () => {
    $(`.main-wrapper`).fadeOut(0);
    $(`:root`).fadeOut(0)
    $(saved).remove();
    RowsData = [];
    Rows = [];
    saved = "";
};

const CloseBalloon = () => {
    $(`.main-wrapper`).fadeOut(1000);
    $(`:root`).fadeOut(1000)
    $(`.balloon`).fadeOut(1000)
    $(`.balloondiv`).fadeOut(1000)
    $(saved).remove();
    RowsData = [];
    Rows = [];
    saved = "";
};

const CloseWebsite = () => {
    $(`:root`).fadeOut(0)
    $(`.iframe-container`).fadeOut(0);
    $(saved).remove();
    RowsData = [];
    Rows = [];
    saved = "";
};

function AddRow(data) {
    RowsData = data
    for (var i = 0; i < RowsData.length; i++) {
        var message = RowsData[i].txt
        var id = RowsData[i].id
        var type = RowsData[i].type
        var element

        if (type === 'select') {
            // Se o tipo for uma caixa de seleção
            if (id === 0) {
                element = $('<div class="categories">');
                categories = Object.keys(hashcategoryproduct);

                categories.forEach(function(category) {
                    element.append($('<h3 id="' + id  + '">').text(category));
                });

                $('.categories').append(element);
            } else if (id === 1) {
                selectedCategory = Object.keys(hashcategoryproduct)[0];
                products = hashcategoryproduct[Object.keys(hashcategoryproduct)[0]];
                $('.body .car').remove();

                products.forEach(function(product) {
                    productImg = hashproductimg[product];
                    element = $('<div class="car">');
                    element.append($('<h3>').text(product));
                    element.append($('<img src="' + productImg +'" alt="car" width="200">').text(product));
                    element.append($('<button type="button" class="btn btn-success" id="' + product +'">').text("Selecionar"));
                    $('.body').append(element);
                });
            }
        }
        Rows[id] = element
    }
}

function AddRowBalloon(data) {
    RowsData = data
    for (var i = 0; i < RowsData.length; i++) {
        var message = RowsData[i].txt
        var id = RowsData[i].id

        if (id === 0) {
            $('#title').html(message);

        } else if (id === 1) {
            $('#subtitle').html(message);
        }
    }
}

function AddRowWebsite(data) {
    RowsData = data;
    for (var i = 0; i < RowsData.length; i++) {
        var message = RowsData[i].txt;
        var id = RowsData[i].id;

        if (id === 0) {
            iframe = $('<iframe>').attr('src', message);
            $('.iframe-safari iframe').remove();
            $('.iframe-safari').append(iframe);
            $('.address-bar').text(message);
        }
    }
}

$(document).on('click', '.car button', function(event) {
    var product = $(this).attr('id');
    SubmitData(product);
});

$(document).on('click', '.iframe-header .buttons .close', function(event) {
    CancelWebsite();
});

function SubmitData(product) {
    const returnData = [];
    for (var i = 0; i < RowsData.length; i++) {
        var id = RowsData[i].id
        if (product) {
            if (hashproductlogic.hasOwnProperty(product)) {
                productLogic = hashproductlogic[product];
                returnData.push({
                    _id: id,
                    input: productLogic,
                });
            } else {
                returnData.push({
                    _id: id,
                    input: product
                });
            }
        } else {
            returnData.push({
                _id: id,
                input: null,
            });
        }
        $(Rows[id]).remove();
    }
    PostData({
        data: returnData
    })
    CloseMenu();
}

$(document).on('click', '.categories h3', function(event) {
    if (selectedCategory != $(this).text()){
        $('.categories h3').removeClass('active');
        $(this).addClass('active');
        selectedCategory = $(this).text();
        UpdateProducts(selectedCategory, 1);
    }
});

function UpdateProducts(selectedCategory, elementID) {
    products = hashcategoryproduct[selectedCategory];
    $('.body .car').remove();

    products.forEach(function(product) {
        element = $('<div class="car">');
        productImg = hashproductimg[product];
        element.append($('<h3>').text(product));
        element.append($('<img src="' + productImg +'" alt="car" width="200">'));
        element.append($('<button type="button" class="btn btn-success" id="' + product +'">').text("Selecionar"));
        $('.body').append(element);
    });

    Rows[elementID] = element;
}

const PostData = (data) => {
    return $.post(`https://vrp_hcstore/buttonSubmit`, JSON.stringify(data))
}

const CancelMenu = () => {
    for (var i = 0; i < RowsData.length; i++) {
        var id = RowsData[i].id
        $(Rows[id]).remove();
    }
    $.post(`https://vrp_hcstore/closeMenu`)
    return CloseMenu();
}

const CancelBalloon = () => {
    $.post(`https://vrp_hcstore/closeMenu`)
    return CloseBalloon();
}

const CancelWebsite = () => {
    $.post(`https://vrp_hcstore/closeMenu`)
    return CloseWebsite();
}

window.addEventListener("message", (event) => {
    const data = event.data
    const info = data.data
    const action = data.action
    switch (action) {
        case "OPEN_MENU":
            return OpenMenu(info);
        case "CLOSE_MENU":
            return CloseMenu();
        case "OPEN_BALLOON":
            return OpenBalloon(info);
        case "CLOSE_BALLOON":
            return CancelBalloon();
        case "OPEN_WEBSITE":
            return OpenWebsite(info);
        case "CLOSE_WEBSITE":
            return CancelWebsite();
        case "PUT_CATEGORY":
            categorys = JSON.stringify(data.data)
            categorysString = JSON.parse(categorys);

            hashcategoryproduct = {};
            hashproductlogic = {};
            hashproductimg = {};

            // Preenchendo as hashes com as informações do JSON
            categorysString.categorys.forEach(function(category) {
                hashcategoryproduct[category.name] = [];
                category.products.forEach(function(product) {
                    hashcategoryproduct[category.name].push(product.name);
                    hashproductlogic[product.name] = product.name_logic;
                    hashproductimg[product.name] = product.img;
                });
            });

            // Exibindo as hashes preenchidas
            return true;
        default:
            return;
    }
})

document.onkeyup = function (event) {
    event = event || window.event;
    var charCode = event.keyCode || event.which;
    if (charCode == 27) {
        if ($('.main-wrapper').is(":visible")) {
            CancelMenu();
        } else if ($('.balloon').is(":visible")) {
            CancelBalloon();
        } else if ($('.iframe-container').is(":visible")) {
            CancelWebsite();
        }
    } else if (charCode == 13) {
        SubmitData()
    }
};

$(document).click(function (event) {
    var $target = $(event.target);
    if (!$target.closest('.main-wrapper').length &&
        $('.main-wrapper').is(":visible")) {
        CancelMenu();
    }
});