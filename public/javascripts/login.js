function idCheck(data) {
  let inputEmail = $("input[name=email]").val();
  let inputPassword = $("input[name=password]").val();

  if (inputEmail === "") {
    alert("이메일을 입력해주세요");

    return false;
  } else {
    var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    if (exptext.test(inputEmail) === false) {
      alert("이메일형식이 올바르지 않습니다.");

      return false;
    }
  }

  if (inputPassword === "") {
    alert("비밀번호를 입력해주세요");

    return false;
  }

  let yes = [];

  for (var i = 0; i < data.length; i++) {
    if (inputEmail === data[i].email) {
      yes.push(inputEmail);

      if (data[i].password !== inputPassword) {
        alert("비밀번호를 확인해주세요.");

        return false;
      } else {
        sessionStorage.setItem("userEmail", inputEmail);

        location.href = `http://localhost:3000/kr/dashboard?id=${data[i].id}`;

        return true;
      }
    }
  }

  setTimeout(function () {
    if (yes.length === 0) {
      alert("가입되지않은 이메일입니다.");

      return false;
    }
  }, 500);

  return;
}
