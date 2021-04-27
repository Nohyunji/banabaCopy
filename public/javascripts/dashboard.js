$(document).ready(function () {
    $('#home').children('.line').show();
    $('#home').css("background","#FDFDF1");
    $('.dashboard-right').children('div').css("display","none")
    $('#Home').show();

    $('.menu-name').click((e)=>{
        $('.menu-contents').children('.menu-name').css("background","#fff");
        $('.menu-name').children('.line').css("display","none");
        $('.dashboard-right').children('div').css("display","none")

        if(e.currentTarget.id !== "withdraw"){
            $('#withdrawCoin').slideUp();
        }
        
        if(e.currentTarget.id === "home") {
            $('#home').children('.line').show();
            $('#home').css("background","#FDFDF1");

            $('#Home').show();
            return;
        }

        if(e.currentTarget.id === "withdraw") {
            $('#withdraw').children('.line').show();
            $('#withdraw').css("background","#FDFDF1");

            $('#withdrawCoin > div').css("background","none");
            $('#withdrawCoin > div').css("color","#c39168");
            
            $('#WithdrawBit').show();
            $('.bit').css("background","#c39168");
            $('.bit').css("color","#fff");

            $('#withdrawCoin').slideToggle();

            return;
        }

        if(e.currentTarget.id === "staking") {
            $('#staking').children('.line').show();
            $('#staking').css("background","#FDFDF1");

            $('#Staking').show();

            return;
        }

        if(e.currentTarget.id === "transactionList") {
            $('#transactionList').children('.line').show();
            $('#transactionList').css("background","#FDFDF1");

            $('#Transaction').show();

            return;
        }

        if(e.currentTarget.id === "stakingList") {
            $('#stakingList').children('.line').show();
            $('#stakingList').css("background","#FDFDF1");
            
            $('#StakingList').show();

            return;
        }

        if(e.currentTarget.id === "assetInfo") {
            $('#assetInfo').children('.line').show();
            $('#assetInfo').css("background","#FDFDF1");

            $('#Asset').show();

            return;
        }

        if(e.currentTarget.id === "myInfo") {
            $('#myInfo').children('.line').show();
            $('#myInfo').css("background","#FDFDF1");

            $('#MyInfo').show();

            return;
        }

        if(e.currentTarget.id === "customerCenter") {
            $('#customerCenter').children('.line').show();
            $('#customerCenter').css("background","#FDFDF1");

            $('#Customer').show();

            return;
        }

        // 회원탈퇴
        if(e.currentTarget.id === "deleteUser"){
            var result = confirm("회원탈퇴를 원하시나요 ?");
            
            if(result){    
                $.ajax({
                  type: "POST",
                  url: "/kr/dashboard",
                  success: function (result) {
                      console.log(result);

                    alert("Banaba Wallet을 이용해 주셔서 감사합니다 :)");
            
                    location.href = `http://localhost:3000/kr`;
                  },
                  error: function (result) {
                    alert("error");
                  },
                });
            }else{
                $('#home').children('.line').show();
                $('#home').css("background","#FDFDF1");
    
                $('#Home').show();

               return;
            }
        }
    });

    $('#withdrawCoin > div').click((e)=>{
        $('#withdrawCoin > div').css("background","none");
        $('#withdrawCoin > div').css("color","#c39168");
        $('.dashboard-right').children('div').css("display","none");

        if(e.currentTarget.className === "bit"){
            $('.bit').css("background","#c39168");
            $('.bit').css("color","#fff");

            $('#WithdrawBit').show();
        }

        if(e.currentTarget.className === "ether"){
            $('.ether').css("background","#c39168");
            $('.ether').css("color","#fff");

            $('#WithdrawEther').show();
        }

        if(e.currentTarget.className === "banaba"){
            $('.banaba').css("background","#c39168");
            $('.banaba').css("color","#fff");

            $('#WithdrawBanaba').show();
        }
    });

    $('#Logout').click((e)=>{
        var result =confirm("로그아웃 하시겠습니까?");

        if(result){
            $.ajax({
                type: "POST",
                url: "/kr/logout",
                success: function (res) {
                    location.href = `http://localhost:3000/kr`;
                },
                error: function (res) {
                  alert("error");
                },
            });
        }

        return;
    })
});
  