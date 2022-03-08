let data = [
  "hàng mới về",
  "trang phục",
  "giày túi xách",
  "phụ kiện",
  "thể thao",
  "đồng hồ",
  "làm đẹp",
  "tin tức",
  "các thương hiệu",
  "giảm giá đến 50%",
];

let list = document.getElementById("header-list-selection");

data.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item.toLocaleUpperCase();
  list.appendChild(li);
});

