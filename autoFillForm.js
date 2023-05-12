// autoFillForm.js
function autoFillForm() {
    const inputText = prompt("请输入您的个人信息，使用 | 作为分隔符。\n格式：姓|名|地址|城市|州|邮编|ssn|dob|email");

    const parts = inputText.split('|');

    let first_name = parts[0];
    let last_name = parts[1];
    let address = parts[2];
    let city = parts[3];
    let state = parts[4];
    let zip_code = parts[5];
    let email = parts[8];

    document.getElementById("first_name").value = first_name;
    document.getElementById("last_name").value = last_name;
    document.getElementById("street_address_1").value = address;
    document.getElementById("city").value = city;
    document.getElementById("email_address").value = email;
    document.getElementById("confirm_email_address").value = email;
    
    function selectState(state) {
        const select = document.getElementById("state");
        for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].value === state) {
                select.options[i].selected = true;
                break;
            }
        }
    }
    selectState(state);

    document.getElementById("zip_code").value = zip_code;

    const yesOption = document.getElementById("purchased_vizzy_yes");
    yesOption.click();

    let signature = `${first_name} ${last_name}`;
    document.getElementById("signature").value = signature;

    const quantities = getRandomQuantity();

    document.getElementById("twelve_pack_units").value = quantities.twelve_pack_quantity;
    document.getElementById("twenty_four_pack_units").value = quantities.twenty_four_pack_quantity;
    document.getElementById("single_can_units").value = quantities.single_can_quantity;

    const userLocation = `${city} ${state}`;

    document.querySelector('#product_5_1 [value="12-pack Unit"]').selected = true;
    document.querySelector('#product_5_2 [value="24-pack Unit"]').selected = true;
    document.querySelector('#product_5_3 [value="Single Can Unit"]').selected = true;

    document.getElementById("units_5_1").value = quantities.twelve_pack_quantity;
    document.getElementById("units_5_2").value = quantities.twenty_four_pack_quantity;
    document.getElementById("units_5_3").value = quantities.single_can_quantity;

    document.getElementById("purchase_place_5_1").value = userLocation;
    document.getElementById("purchase_place_5_2").value = userLocation;
    document.getElementById("purchase_place_5_3").value = userLocation;

    const currentDate = new Date(2020, Math.floor(Math.random() * 12), 1);

    for (let i = 1; i <= 3; i++) {
        const monthIncrement = Math.floor(Math.random() * 4) + 2;
        currentDate.setMonth(currentDate.getMonth() + monthIncrement);

        if (currentDate > new Date(2022, 11, 31)) {
            currentDate.setFullYear(2022, 11, 31);
        }

        const formattedMonth = ("0" + (currentDate.getMonth() + 1)).slice(-2);
        const formattedDate = `${formattedMonth}/${currentDate.getFullYear()}`;

        document.getElementById(`purchase_month_5_${i}`).value = formattedDate;
    }
}

function getRandomQuantity() {
    let twelve_pack_quantity;
    let twenty_four_pack_quantity;
    let single_can_quantity;
    let total_price;

    while (true) {
        twelve_pack_quantity = Math.floor(Math.random() * 11);
        twenty_four_pack_quantity = Math.floor(Math.random() * 11);
        single_can_quantity = Math.floor(Math.random() * 11);
        total_price = 3 * twelve_pack_quantity + 5 * twenty_four_pack_quantity + 0.75 * single_can_quantity;

        if (15 <= total_price && total_price <= 20 && twelve_pack_quantity > 0 && twenty_four_pack_quantity > 0 && single_can_quantity > 0) {
            break;
        }
    }

    return {
        twelve_pack_quantity,
        twenty_four_pack_quantity,
        single_can_quantity
    };
}

autoFillForm();
