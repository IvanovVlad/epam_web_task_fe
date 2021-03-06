const signIn = require('./js/auth/signin').signIn;
const signUp = require('./js/auth/signup').signUp;
const getAllUsers = require('./js/auth/getAllUsers').getAllUsers;

const inputLogin = document.querySelector('#login-text');
const inputPassword = document.querySelector('#password-text');
const signinButton = document.querySelector('#signin-btn');
const signupButton = document.querySelector('#signup-btn');

signinButton.addEventListener('click', () => signIn(inputLogin.value, inputPassword.value));
signupButton.addEventListener('click', () => signUp(inputLogin.value, inputPassword.value));

const getAllArticles = require('./js/articles/getAllArticles').getAllArticles;
const searchArticles = require('./js/articles/searchArticles').searchArticles;

const inputSearchSite = document.querySelector('#search-text-site');
const searchButtonSite = document.querySelector('#get-articles-site');
const showAllArticles = document.querySelector('#show-all-site');

searchButtonSite.addEventListener('click', () => searchArticles(inputSearchSite.value));
showAllArticles.addEventListener('click', () => getAllArticles());

const searchInWeb = require('./js/search/searchInWeb').searchInWeb;
const getSearchFromDb = require('./js/search/getSearchFromDb').getSearchFromDb;

const inputSearchWeb = document.querySelector('#search-text-web');
const searchButtonWeb = document.querySelector('#get-articles-web');
const showAllWeb = document.querySelector('#show-all-web');

searchButtonWeb.addEventListener('click', () => searchInWeb(inputSearchWeb.value));
showAllWeb.addEventListener('click', () => getSearchFromDb());
