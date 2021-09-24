export const sample = `
<p>dg20</p>
<ol>
<li>fdgfdgfdg</li>
<li>dfg</li>
<li>fd</li>
<li>g</li>
<li>fdg</li>
</ol>
<p></p>
<p style="text-align:right;">dgdfhbfgbv</p>
<p></p>
<div style="text-align:none;"><img src="http://simpleicon.com/wp-content/uploads/ok-256x256.png" alt="undefined" style="height: 20px;width: 20px"/></div>
<p>feg<strong>dffdg</strong></p>
<p><strong><ins>Fwefw</ins></strong><sup><strong><ins>e</ins></strong></sup></p>
<p></p>
<img src="http://simpleicon.com/wp-content/uploads/ok-256x256.png" alt="undefined" style="height: auto;width: auto"/>
<p></p>

`;

const firstArticle = {
  id: 1,
  title: "First Title",
  description: "First description",
  content:
    '<p>dg20</p>\n<ol>\n<li>fdgfdgfdg</li>\n<li>dfg</li>\n<li>fd</li>\n<li>g</li>\n<li>fdg</li>\n</ol>\n<p></p>\n<p style="text-align:right;">dgdfhbfgbv</p>\n<p></p>\n<div style="text-align:none;"><img src="http://simpleicon.com/wp-content/uploads/ok-256x256.png" alt="undefined" style="height: 20px;width: 20px"/></div>\n<p>feg<strong>dffdg</strong></p>\n<p><strong><ins>Fwefw</ins></strong><sup><strong><ins>e</ins></strong></sup></p>\n<p></p>\n<img src="http://simpleicon.com/wp-content/uploads/ok-256x256.png" alt="undefined" style="height: auto;width: auto"/>\n<p></p>',
};

const secondArticle = {
  id: 2,
  title: "Linear regression and how to become an evil without getting tired",
  description: "Second description",
  content: "Second content",
};

const thirdArticle = {
  id: 3,
  title: "Third Title",
  description: "Third description",
  content: "Third content",
};

const articles = [firstArticle, secondArticle, thirdArticle];

export default { sample, articles };
