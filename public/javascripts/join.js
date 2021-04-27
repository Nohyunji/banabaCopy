function joinCheck(e) {
  let checkEmail = $("input[name=email]").val();
  let joinForm = $('#joinForm').serialize();
  
  if ($("input[name=name]").val() === "") {
    alert("이름을 입력해주세요.");
    $("input[name=name]").focus();

    return false;
  }

  if (checkEmail === "") {
    alert("이메일을 입력해주세요.");
      $("input[name=email]").focus();

    return false;
  } else {
    var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    if (exptext.test(checkEmail) === false) {
      alert("이메일형식이 올바르지 않습니다.");
      $("input[name=email]").focus();

      return false;
    }
  }

  if ($("input[name=password]").val() === "") {
    alert("비밀번호를 입력해주세요.");
    $("input[name=password]").focus();

    return false;
  }

  $.ajax({
    type: "POST",
    url: "/kr/join",
    data: joinForm,
    success: function (res) {
      if(res[0].email){
        alert("이미 사용중인 이메일입니다.");
        $("input[name=email]").focus();

        return false;
      }

      alert("회원가입이 완료 되었습니다 :)");
      
      location.href = `http://localhost:3000/kr`;
    },
    error: function (res) {
      alert("error");
    },
  });
}


$( document ).ready(function() {
  $("input[name=passwordCheck]").on("change keyup", function() {
    let currentVal = $(this).val();

    let originVal = $("input[name=password]").val();
    
    if(currentVal === originVal) {
      $('#passwordCheck').html("<div style='color: green; font-size: 12px; padding: 10px;'>비밀번호가 동일합니다.</div>");
    } else {
      $('#passwordCheck').html("<div style='color: red; font-size: 12px; padding: 10px;'>비밀번호가 동일하지 않습니다.</div>");
    }
  });
});