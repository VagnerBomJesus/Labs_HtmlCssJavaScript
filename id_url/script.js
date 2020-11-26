var arr = [];
    const img = document.querySelectorAll(".cards div");
    img.forEach(function (item, index) {
        item.addEventListener("click", function () {
            if (arr.length == 1 && arr[0].id == index) {
                arr = [];
                alert("Limpo!!");
                return !1;
            }

            if (arr.length < 1) {
                arr.push({ val: item.getAttribute("id"), id: index });
            } else {
                arr.push({ val: item.getAttribute("id"), id: index });
                location.href = "https://google.com?user1=" + arr[0].val + "&user2=" + arr[1].val;
            }
        });
    });