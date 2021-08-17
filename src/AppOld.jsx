// App.jsx
// import React from "react";
// import { Booklist } from "./components/Booklist";
// import { BrowserRouter, Route, Link } from 'react-router-dom';
// import axios from 'axios';	// 追加

// const App = () => {
//   const languages = ["React", "Vue", "Angular"];

//   // 関数を追加
//   // const getDataFromAPI = (keyword) => {
//   //   return `${keyword} books`;
//   // };
//   // 関数の内容を編集
//   const getDataFromAPI = async (keyword) => {
//     const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
//     const result = await axios.get(`${requestUrl}${keyword}`);
//     return result;
//   }

//   return (
//     <BrowserRouter>
//       <h1>react app</h1>
//       <ul>
//         <li>
//           <Link to="/">React</Link>
//         </li>
//         <li>
//           <Link to="/vue">Vue</Link>
//         </li>
//         <li>
//           <Link to="/angular">Angular</Link>
//         </li>
//       </ul>
//       <hr />
//       <Route
//         exact
//         path="/"
//         render={(props) => <Booklist language={languages[0]} getData={getDataFromAPI} />}
//       />
//       <Route
//         path="/vue"
//         render={(props) => <Booklist language={languages[1]} getData={getDataFromAPI} />}
//       />
//       <Route
//         path="/angular"
//         render={(props) => <Booklist language={languages[2]} getData={getDataFromAPI} />}
//       />
//     </BrowserRouter>
//   );
// };
// export default App;


