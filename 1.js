(function() {
    'use strict';

    // 弹出输入框，让用户输入购买地点
    let userLocation = prompt("请输入购买地点：");

    // 设置初始日期为2020年2月1日之后的某一天
    let currentDate = new Date(2020, 1, Math.floor(Math.random() * 27) + 2);

    // 循环填写表单的每一行
    for (let i = 1; i <= 10; i++) {
        // 随机选择要填写的值
        let retailOptions = ["amazon.com", "walmart.com", "vitacost.com", "walmart"];
        let retail = retailOptions[Math.floor(Math.random() * retailOptions.length)];
        let desc_item_list = ["Blooming Jasmine", "Almond Gourmande", "Climbing Wild Rose", "Côte d'Azur", "Green Tea", "Lavender Fields", "Lemon Verbena", "Lush Gardenia", "Mediterranean Fig", "Orange Blossom Honey", "Shea Butter", "Cherry Blossom", "Glazed Apricots", "Violet Bouquet"];
        let amt_paid_list = [7.88, 13, 13, 25.6, 11.8, 8, 10, 10, 8, 8, 9, 11.5, 8.5];
        let desc_item = desc_item_list[Math.floor(Math.random() * desc_item_list.length)];
        let amt_paid = amt_paid_list[Math.floor(Math.random() * amt_paid_list.length)];

        // 在原始值的基础上在正负2的范围内偏移amt_paid
        let offset = (Math.random() * 4) - 2;
        amt_paid = Math.round(amt_paid + offset);

        // 递增2到4个月，号数随机
        let monthIncrement = Math.floor(Math.random() * 3) + 2;
        let dayIncrement = Math.floor(Math.random() * 28) + 1;
        currentDate.setMonth(currentDate.getMonth() + monthIncrement);
        currentDate.setDate(dayIncrement);

        // 保证日期不超过02/10/2023
        if (currentDate > new Date(2023, 1, 10)) {
            currentDate = new Date(2023, 1, 10);
        }

        // 格式化日期为mm/dd/yyyy
        let formattedDate = (currentDate.getMonth() + 1).toString().padStart(2, '0') + '/' + currentDate.getDate().toString().padStart(2, '0') + '/' + currentDate.getFullYear();

        // 使用随机值填写表单
        document.getElementById(`date_item_${i}`).value = formattedDate;
        document.getElementById(`retail_${i}`).value = retail;
        document.getElementById(`loc_item_${i}`).value = userLocation;
        document.getElementById(`desc_item_${i}`).value = desc_item;
        document.getElementById(`amt_paid_${i}`).value = amt_paid;
    }
})();
