const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = form.username.value;
  const password = form.password.value;
  errorMessage.textContent = 'Đang kiểm tra.';
  errorMessage.style = 'color:rgba(0,0,0,0.8);display:block;padding:13px;background-color:#D3D3D3;border-radius:5px;border:1px solid grey; '
  setTimeout(function() {
  if (username === 'DucBikCode' && password === 'DucTapCode') {
    errorMessage.textContent = 'Xin chào bạn đã quay trở lại.';
    errorMessage.style = 'color:green;display:block;padding:13px;background-color:rgba(0,255,0,0.2);border-radius:5px;border:1px solid green;'
    setTimeout(function() {
      document.title = 'Trang Chủ'
    form.style = 'display:none;';
    errorMessage.style = 'display:none;'
    main.style = 'display: flex;'
    },2000  )
  } else{
    errorMessage.textContent = 'Sai mật khẩu hoặc tài khoản.';
    errorMessage.style = 'color:red;display:block;padding:13px;background-color:rgba(255,0,0,0.2);border-radius:5px;border: 1px solid red;'
   setTimeout(function() {
    location.reload()
  } ,2000 );
  }},3000 );
  
});
