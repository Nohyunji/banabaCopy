function joinCheck(data) {
  let checkEmail = $("input[name=email]").val();

  if ($("input[name=name]").val() === "") {
    alert("이름을 입력해주세요.");

    return false;
  }

  if (checkEmail === "") {
    alert("이메일을 입력해주세요.");

    return false;
  } else {
    var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    if (exptext.test(checkEmail) === false) {
      alert("이메일형식이 올바르지 않습니다.");

      return false;
    }
  }

  for (var i = 0; i < data.length; i++) {
    if (checkEmail === data[i].email) {
      alert("이미 사용중인 이메일입니다.");

      return false;
    }
  }

  if ($("input[name=password]").val() === "") {
    alert("비밀번호를 입력해주세요.");

    return false;
  }

  setTimeout(function () {
    alert("회원가입이 완료 되었습니다 : )");

    $("#joinForm").submit();
  }, 500);
}
