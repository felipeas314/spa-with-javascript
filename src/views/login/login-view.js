import loginController from '../../controllers/login-controller';
import  adiciona  from '../../store/login-store';

const loginView = () => {

  const form = document.createElement('form');

  let view = template();
  action(form);

  form.innerHTML = view;

  return form;
}

function action(form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    loginController(form);
    adiciona();
  })
}

function template() {
  return `
    <h1>Login 2</h1>
    <input type="text" class="form-input-login" id="login-view-email"/>
    <input type="password" class="form-input-login" id="login-view-password"/>
    <button id='button-login' class="teste1" onclick="adiciona()" >Click aqui</button> 
  `;
}

export default loginView;
