// export const sample = `
// <p>dg20</p>
// <ol>
// <li>fdgfdgfdg</li>
// <li>dfg</li>
// <li>fd</li>
// <li>g</li>
// <li>fdg</li>
// </ol>
// <p></p>
// <p style="text-align:right;">dgdfhbfgbv</p>
// <p></p>
// <div style="text-align:none;"><img src="http://simpleicon.com/wp-content/uploads/ok-256x256.png" alt="undefined" style="height: 20px;width: 20px"/></div>
// <p>feg<strong>dffdg</strong></p>
// <p><strong><ins>Fwefw</ins></strong><sup><strong><ins>e</ins></strong></sup></p>
// <p></p>
// <img src="http://simpleicon.com/wp-content/uploads/ok-256x256.png" alt="undefined" style="height: auto;width: auto"/>
// <p></p>
//
// `;

export const sample = `
<p>Let me intoduce you the new way of creating web apps: <span style="font-size: 18px;"><em>React</em></span></p>
<p></p>
<p></p>
<div style="text-align:center;"><img src="http://igorosa.com/wp-content/uploads/2021/03/react-js-logo-with-title-1200x865.png" alt="undefined" style="height: 80px;width: 120px"/></div>
<p></p>
<p>Why is it cool? Well...</p>
<ul>
  <li>dgf</li>
  <li>dfg</li>
  <li>fd</li>
  <li>gfdg  (<strong><ins>not </ins></strong>dfsf)</li>
  <li>fd</li>
  <li>gdf</li>
  <li>g</li>
  <li>df</li>
</ul>
`;

const firstArticle = {
  id: 1,
  title: "First Title",
  description: "First description",
  content: sample,
  labels: [
    {
      id: 1,
      name: "first",
    },
    {
      id: 3,
      name: "third",
    },
    {
      id: 4,
      name: "fourth",
    },
    {
      id: 5,
      name: "fifth",
    },
    {
      id: 6,
      name: "sixth",
    },
    {
      id: 7,
      name: "seventh",
    },
    {
      id: 9,
      name: "ninth",
    },
    {
      id: 11,
      name: "eleventh",
    },
  ],
};

const secondArticle = {
  id: 2,
  title: "Linear regression and how to become an evil without getting tired",
  description: "Second description",
  content: "Second content",
  labels: [
    {
      id: 1,
      name: "first",
    },
    {
      id: 2,
      name: "second",
    },
  ],
};

const thirdArticle = {
  id: 3,
  title: "Third Title",
  description: "Third description",
  content: "Third content",
};

const articles = [firstArticle, secondArticle, thirdArticle];

export default { sample, articles };
