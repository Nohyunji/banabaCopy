function idCheck(data) {
  let inputEmail = $("input[name=email]").val();
  let inputPassword = $("input[name=password]").val();
  let loginForm = $('#login').serialize();

  if (inputEmail === "") {
    alert("이메일을 입력해주세요");
    $("input[name=email]").focus();

    return false;
  } else {
    var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    if (exptext.test(inputEmail) === false) {
      alert("이메일형식이 올바르지 않습니다.");
      $("input[name=email]").focus();

      return false;
    }
  }

  if (inputPassword === "") {
    alert("비밀번호를 입력해주세요");
    $("input[name=password]").focus();

    return false;
  }

  $.ajax({
    type: "POST",
    url: "/kr",
    data: loginForm,
    success: function (res) {   
      if(res.length === 0) {
        alert("가입되지 않은 이메일입니다.");
        $("input[name=email]").focus();

        return false;
      }

      if(res[0].password === inputPassword) {
        sessionStorage.setItem("userEmail", res[0].email);

        location.href = `http://localhost:3000/kr/dashboard?id=${res[0].id}`;
      } else {
        alert("비밀번호를 확인해주세요.");
        $("input[name=password]").focus();

        return false;
      }

    },
    error: function (result) {
      alert("error");
    },
  });
}
