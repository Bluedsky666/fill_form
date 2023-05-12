// autoFillForm.js
function autoFillForm() {
    const inputText = prompt("请输入您的个人信息，使用 | 作为分隔符。\n格式：姓|名|地址|城市|州|邮编");

    const parts = inputText.split('|');

    let first_name = parts[0];
    let last_name = parts[1];
    let address = parts[2];
    let city = parts[3];
    let state = parts[4];
    let zip_code = parts[5];

    const signature = `${first_name} ${last_name}`;

    document.getElementById("first_name").value = first_name;
    document.getElementById("last_name").value = last_name;
    document.getElementById("street_address_1").value = address;
    document.getElementById("city").value = city;

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

    const yesOption = document.getElementById("yes");
    const noOption = document.getElementById("no");

    if (Math.random() < 0.5) {
        yesOption.checked = true;
    } else {
        noOption.checked = true;
    }

    let currentDate = new Date(2020, 0, 1);

    // 修改后的日期填写部分
    for (let i = 1; i <= 3; i++) {
        const monthIncrement = Math.floor(Math.random() * 4) + 2;
        currentDate.setMonth(currentDate.getMonth() + monthIncrement);

        if (currentDate > new Date(2022, 11, 31)) {
            currentDate.setFullYear(2022, 11, 31);
        }

        const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

        document.getElementById(`purchase_month_5_${i}`).value = formattedDate;
    }

    // 修改后的购买数量填写部分
    for (let i = 1; i <= 3; i++) {
        const units = Math.floor(Math.random() * 10) + 1;
        document.getElementById(`units_5_${i}`).value = units;
    }

    document.getElementById("signature").value = signature;
    document.getElementById("date_signed").value = new Date().toLocaleDateString();
}

// 在页面加载完成后自动执行 autoFillForm 函数
window.onload = autoFillForm;
