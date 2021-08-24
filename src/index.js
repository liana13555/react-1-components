// import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// // const elem1 = React.createElement('span', { children: 'Hello' });
// const elem1 = <span>Hello</span>;

// // const elem2 = React.createElement('span', { children: 'world' });
// const elem2 = <span>world</span>;

// // const element = React.createElement('div', {
// //   a: 5, b: 10, children: 'Hello world',
// // });

// const jsxElement = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );

// console.log(jsxElement);
// ReactDOM.render(element, document.querySelector('#root'));

/* Компоненты - основные строительные блоки React-приложений, при помощи которых интерфейс делится 
на независимые части.
В простейшей форме компонент это JavaScript-функция с очень простым контрактом: функция получает 
объект свойств который называется props и возвращает дерево React-элементов.
У компонента всегда только один параметр (props)!
*/



// const painting = paintings[1];
// <Painting
//     url={painting.url}
//     title={painting.title}
//     author={painting.author.tag}
//     profileUrl={painting.author.url}
//     price = {painting.price}
// />
  
ReactDOM.render(<App />, document.querySelector('#root'));



//===================================================
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>  // Оборачивает наше приложение в строгий режим
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
