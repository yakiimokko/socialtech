$(function(){
    
    //もっと見るボタンのアニメーション
    $('.button-more').on('mouseover',function(){
        $(this).animate({
            opacity: 0.5,
            marginLeft: 20,
        },100);
    });
    
    $('.button-more').on('mouseout',function(){
        $(this).animate({
            opacity: 1,
            marginLeft: 0,
        },100);
    });
    
    //slick
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 5000,
        arrows: false,
    });
    
    //AjaxでSTATIC FORMSにデータを送信
    $('#submit').on('click',function(event) {
        // formタグによる送信を拒否
        event.preventDefault();
        
        //入力チェックした結果、エラーがあるかないか確認
        let result = inputCheck();
    });
    
    //フォーカスが外れたとき（blur）にフォームの入力チェックをする
   $('#name').blur(function () {
     inputCheck();
   });
   $('#furigana').blur(function () {
     inputCheck();
   });
   $('#email').blur(function () {
     inputCheck();
   });
   $('#tel').blur(function () {
     inputCheck();
   });
   $('#message').blur(function () {
     inputCheck();
   });
   $('#agree').click(function () {
     inputCheck();
   });
    
    
    
    //お問い合わせフォームの入力チェック
    function inputCheck() {
        let result;
        
        let message = '';
        
        let error = false;
        
        //お名前チェック
        if($('#name').val()== ''){
            $('#name').css('background-color', '#f79999');
            error = true;
            message += 'お名前を入力してください。\n';
        }
        else{
            //エラーなし
            $('#name').css('background-color', '#fafafa');
        }
        
      // フリガナのチェック
         if ($('#furigana').val() == '') {
           // エラーあり
           $('#furigana').css('background-color', '#f79999');
           error = true;
           message += 'フリガナを入力してください。\n';
         } else {
           // エラーなし
           $('#furigana').css('background-color', '#fafafa');
         }
     
         // お問い合わせのチェック
         if ($('#message').val() == '') {
           // エラーあり
           $('#message').css('background-color', '#f79999');
           error = true;
           message += 'お問い合わせ内容を入力してください。\n';
         } else {
           // エラーなし
           $('#message').css('background-color', '#fafafa');
         }
         
         // メールアドレスのチェック
         if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1)
         {
           // エラーあり
           $('#email').css('background-color', '#f79999');
           error = true;
           message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
         } else {
           // エラーなし
           $('#email').css('background-color', '#fafafa');
         }
         
         // 電話番号のチェック（未入力はOK、未入力でない場合は-が必要）
         if ($('#tel').val() != '' && $('#tel').val().indexOf('-') == -1) {
           // エラーあり
           $('#tel').css('background-color', '#f79999');
           error = true;
           message += '電話番号に「-」が含まれていません。\n';
         } else {
           // エラーなし
           $('#tel').css('background-color', '#fafafa');
         }
      }
});
