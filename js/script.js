function handleSubmit() {
  // lấy giá trị của input và chuyển sang in thường
  var emailValue = document.getElementById("email").value;

  // lấy element của thẻ p hiển thị lỗi
  const errorEmail = document.getElementById("error-email");
  // điều kiện để là một email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // Dùng match để kiểm tra với email vừa nhập
  const checkEmail = emailValue.match(regex);

  // lấy phần chứa thông tin user
  const sectionContent = document.querySelector(
    ".personal-info .section-content"
  );
  console.log("check section", sectionContent);

  // lấy element để kiểm soát submit
  const submitControl = document.querySelector(".submit-email");
  if (checkEmail) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng email";
  }
}

function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "inline-block";
}

function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "none";
}

function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const viewMore = parentElement.querySelector(".view-more");
  if (viewMore.innerHTML == "View more") {
    const sectionContent = parentElement.querySelectorAll(".section-content");
    sectionContent.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.innerHTML = "Less more";
  } else {
    const sectionContent = parentElement.querySelectorAll(".section-content");
    sectionContent.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.innerHTML = "View more";
  }
}
