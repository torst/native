import Todos from './pages/todos.react';
import Home from './pages/home.react';
import {msg} from './intl/store';

export const routes = {
  todos: {
    component: Todos,
    hideNavbar: true
  },
  home: {
    component: Home,
    title: msg('home.title')
  }
};

export const defaultRoute = 'home';
