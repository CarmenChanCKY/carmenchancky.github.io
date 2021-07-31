/*! For license information please see component---src-pages-index-js-a970e34e54b8581912f0.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{5900:function(e,t){var a;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var n=r.apply(null,a);n&&e.push(n)}}else if("object"===i)if(a.toString===Object.prototype.toString)for(var s in a)o.call(a,s)&&a[s]&&e.push(s);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},6719:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var o=a(7294),r=a(5414);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function n(e,t){if(null==e)return{};var a,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}var s=a(5900),l=a.n(s),c=o.createContext({});c.Consumer,c.Provider;function p(e,t){var a=(0,o.useContext)(c);return e||a[t]||t}var h=o.forwardRef((function(e,t){var a=e.bsPrefix,r=e.fluid,s=e.as,c=void 0===s?"div":s,h=e.className,g=n(e,["bsPrefix","fluid","as","className"]),m=p(a,"container"),u="string"==typeof r?"-"+r:"-fluid";return o.createElement(c,i({ref:t},g,{className:l()(h,r?""+m+u:m)}))}));h.displayName="Container",h.defaultProps={fluid:!1};var g=h,m=["xl","lg","md","sm","xs"],u=o.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,s=e.noGutters,c=e.as,h=void 0===c?"div":c,g=n(e,["bsPrefix","className","noGutters","as"]),u=p(a,"row"),d=u+"-cols",P=[];return m.forEach((function(e){var t,a=g[e];delete g[e];var o="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&P.push(""+d+o+"-"+t)})),o.createElement(h,i({ref:t},g,{className:l().apply(void 0,[r,u,s&&"no-gutters"].concat(P))}))}));u.displayName="Row",u.defaultProps={noGutters:!1};var d=u,P=["xl","lg","md","sm","xs"],f=o.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,s=e.as,c=void 0===s?"div":s,h=n(e,["bsPrefix","className","as"]),g=p(a,"col"),m=[],u=[];return P.forEach((function(e){var t,a,o,r=h[e];if(delete h[e],"object"==typeof r&&null!=r){var i=r.span;t=void 0===i||i,a=r.offset,o=r.order}else t=r;var n="xs"!==e?"-"+e:"";t&&m.push(!0===t?""+g+n:""+g+n+"-"+t),null!=o&&u.push("order"+n+"-"+o),null!=a&&u.push("offset"+n+"-"+a)})),m.length||m.push(g),o.createElement(c,i({},h,{ref:t,className:l().apply(void 0,[r].concat(m,u))}))}));f.displayName="Col";var b=f,v=a(1365),j=a(9519),S=a(7190),y=a(8014);var _=function(){return o.createElement("div",{className:"personal-info-container"},o.createElement("div",{className:"personal-info-pic-container"},o.createElement("img",{src:"images/profile_pic.JPG",alt:"Profile Picture",className:"personal-info-pic"})),o.createElement("div",null,o.createElement("p",{className:"personal-info-name"},"Carmen Chan"),o.createElement("div",{className:"personal-info-link"},o.createElement("div",null,o.createElement("a",{href:"mailto:kychan100798@gmail.com"},o.createElement(j.G,{icon:y.FU$,className:"personal-info-icon"}))),o.createElement("div",{className:"left-padding"},o.createElement("a",{href:"https://github.com/CarmenChanCKY",target:"_blank"},o.createElement(j.G,{icon:S.zhw,className:"personal-info-icon"}))))),o.createElement("div",{className:"personal-info-skill"},o.createElement("p",null,"HTML | CSS | SCSS | JavaScript | ReactJS | jQuery"),o.createElement("p",null,"PHP | Laravel | SQL"),o.createElement("p",null,"Android Apps Development (Java)")),o.createElement("div",{className:"personal-info-copyright"},o.createElement(v.Z,null)))},E=a(5444);var J=function(e){return o.createElement(E.rU,{to:"/"+e.slug+"/",className:"project-thumbnail-link"},o.createElement("div",{className:"project-thumbnail-container"},o.createElement("img",{src:e.img,className:"project-thumbnail",alt:"Thumbnail"}),o.createElement("p",{className:"project-thumbnail-title"},e.title)))},G=JSON.parse('[{"title":"Ka Ying Programming Blog","thumbnail":"images/project1/blog_homePage.JPG","photo":[{"photoPath":"images/project1/blog_homePage.JPG","description":"Home Page"},{"photoPath":"images/project1/blog_blogPost.JPG","description":"Blog Post"},{"photoPath":"images/project1/blog_tagPage.JPG","description":"Tag Page"},{"photoPath":"images/project1/blog_categoryPage.JPG","description":"Category Page"},{"photoPath":"images/project1/blog_archivePage.JPG","description":"Archive Page"},{"photoPath":"images/project1/blog_searchPage.JPG","description":"Search Page"}],"languages":["Laravel","PHP","HTML","CSS","JavaScript","jQuery","SQL"],"content":"It is a programming blog to record the bugs I have faced before and some tutorials about programming skills.","demo":"https://kayingprogrammingblog.epizy.com/?i=1","slug":"ka-ying-programming-blog"},{"title":"Shopping Cart Website","thumbnail":"images/project2/shopping_cart_homePage.JPG","photo":[{"photoPath":"images/project2/shopping_cart_homePage.JPG","description":"Home Page"},{"photoPath":"images/project2/shopping_cart_productPage.JPG","description":"Product Page"},{"photoPath":"images/project2/shopping_cart_productDetailPage.JPG","description":"Product Detail Page"},{"photoPath":"images/project2/shopping_cart_cartPage.JPG","description":"Cart Page"}],"languages":["HTML","SCSS","ReactJS","JavaScript"],"content":"It is a Online Shopping Cart Simulation Website. User can simulate the process of select products and add to cart like a real online shopping cart website","description":"Idea from The Odin Project","github":"https://github.com/CarmenChanCKY/Odin-Shopping-Cart","demo":"https://carmenchancky.github.io/Odin-Shopping-Cart/#/","slug":"shopping-cart-website"},{"title":"Battleship Game Play","thumbnail":"images/project3/battleship_homePage.JPG","photo":[{"photoPath":"images/project3/battleship_homePage.JPG","description":"Home Page"},{"photoPath":"images/project3/battleship_rule1.JPG","description":"Rule"},{"photoPath":"images/project3/battleship_rule2.JPG","description":"Rule"},{"photoPath":"images/project3/battleship_setting1.JPG","description":"Setting"},{"photoPath":"images/project3/battleship_setting2.JPG","description":"Setting"},{"photoPath":"images/project3/battleship_setShipStage.JPG","description":"Set Ship Stage"},{"photoPath":"images/project3/battleship_playingStage.JPG","description":"Playing Stage"}],"languages":["HTML","CSS","JavaScript","jQuery"],"content":"It is a website battleship game. User can set the size of the sea and the amount for each type of ships. If they don\'t know the rule of battleship, they can read the guideline in rule page. Before start playing, the user needs to set the ships inside their sea and then compete with computer UI. The game will continue until either all the ships inside player\'s sea or all the ships inside UI\'s sea destroyed.","github":"https://github.com/CarmenChanCKY/SimpleBattleShipGame","demo":"https://carmenchancky.github.io/SimpleBattleShipGame/","slug":"battleship-game-play"},{"title":"Sorting Algorithm Learning Platform","thumbnail":"images/project4/sorting_index.JPG","photo":[{"photoPath":"images/project4/sorting_index.JPG","description":"Login Page"},{"photoPath":"images/project4/sorting_register.JPG","description":"Register Page"},{"photoPath":"images/project4/sorting_homePage.JPG","description":"Home Page"},{"photoPath":"images/project4/sorting_intro1.JPG","description":"Algorithm Introduction"},{"photoPath":"images/project4/sorting_intro2.JPG","description":"Algorithm Introduction"},{"photoPath":"images/project4/sorting_ex1.JPG","description":"Exercise"},{"photoPath":"images/project4/sorting_ex2.JPG","description":"Exercise"},{"photoPath":"images/project4/sorting_profile.JPG","description":"Profile"},{"photoPath":"images/project4/sorting_report.JPG","description":"Report (Administrator)"}],"languages":["PHP","HTML","CSS","JavaScript","jQuery","SQL"],"content":"It is a learning platform for students to learn the concept of sorting algorithm. User needs to register an account to use this platform. In this platform, the user is expected to understand the concept of insertion sort, selection sort, and bubble sort. Video, algorithm, time complexity and example of each type of sorting algorithm are provided. There is one exercise for each type of sorting method. Each exercise contains three levels of the question. After answer the questions, the result will be recorded and show on the profile page.","description":"Assignment of COMP3421 Web Application Design and Development - PolyU","github":"https://github.com/CarmenChanCKY/SortingAlgorithmLearningPlatform","slug":"sorting-algorithm-learning-platform"}]');var C=function(){return o.createElement("div",{className:"project-panel-container"},G.map((function(e){return o.createElement("div",null,o.createElement(J,{img:e.thumbnail,title:e.title,slug:e.slug}))})))};var x=function(){return o.createElement(g,{className:"index-container",fluid:!0},o.createElement(r.q,null,o.createElement("title",null,"Ka Ying Portfolio")),o.createElement(d,null,o.createElement(b,{xl:3,lg:4,className:"personal-info-background"},o.createElement(_,null)),o.createElement(b,{xl:9,lg:8,className:"project-background"},o.createElement(C,null))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-a970e34e54b8581912f0.js.map