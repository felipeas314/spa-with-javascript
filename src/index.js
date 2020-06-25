import _ from 'lodash';
import './css/style.css';
import Icon from './img/logochat.png';

import loginView from './views/login/login-view';

const element = document.getElementById('root');

element.append(loginView(element));
element.classList.add('hello');

document.body.appendChild(element);