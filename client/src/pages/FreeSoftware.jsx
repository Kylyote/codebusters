
const getRandomHslColor = () => {
    const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
    const { hue, saturation, lightness } = {
      hue: getRandomNumber(0, 360),
      saturation: getRandomNumber(50, 100),
      lightness: getRandomNumber(50, 100),
    };
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
   };

   function Card({ title, content, image, docs }) {
    const backgroundColor = getRandomHslColor();
    return (
        <div style={{height: "100%", border:"solid", backgroundColor: backgroundColor }}>
            <h2 style={{textAlign: 'center'}}>
                <a href={docs}>
                     <strong>{title}   </strong>
                   <img src={image} alt={title} style={{height: '50px', width: '50px'}} />
                </a>
            </h2>
            <p style={{ marginLeft: '30px',fontStyle: "italic" }}>{content}</p>
        </div>
    );
 }
 
 

/* below are free software package/services that are staples for the world of web development. */

const FreeSoftware = () => {
return (
    <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '20px'}}>
<Card
title= "JQuery"
content= "JQuery is a JavaScript library that simplifies HTML document traversal and manipulation, event handling, animation, and Ajax. It is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript."
image="/images/Software/jquery.png"
docs="https://api.jquery.com/"

/>
<Card
title= "Node.JS"
content= "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser."
image="/images/Software/node.png"
docs="https://nodejs.org/en/docs"
/>
<Card
title= "React"
content= "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies."
image="/images/Software/REACT.png"
docs="https://legacy.reactjs.org/docs/getting-started.html"
/>
<Card
title= "Express.JS"
content= "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs."
image="/images/Software/Express.png"
docs="https://expressjs.com/en/starter/installing.html"
/>
<Card
title= "Bootstrap"
content= "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components."
image="/images/Software/bootstrap.jpeg"
docs="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
/>
<Card
title= "NPM"
content= "npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry."
image="/images/Software/npm.png"
docs="https://docs.npmjs.com/"
/>
<Card
title= "MongoDB"
content= "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License."
image="/images/Software/mongodb.png"
docs="https://www.mongodb.com/docs/"
/>
<Card
title= "Mongoose"
content= "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB."
image="/images/Software/mongoose.png"
docs="https://mongoosejs.com/docs/"
/>
<Card
title= "MySQL"
content= "MySQL is an open-source relational database management system. Its name is a combination of My, the name of co-founder Michael Widenius's daughter, and SQL, the abbreviation for Structured Query Language."
image="/images/Software/mysql.png"
docs="https://dev.mysql.com/doc/"
/>
<Card
title= "Sequelize"
content= "Sequelize is a promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more."
image="/images/Software/sequelize.png"
docs="https://sequelize.org/docs/v6/getting-started/"
/>
<Card
title= "Handlebars"
content= "Handlebars is a simple templating language. It uses a template and an input object to generate HTML or other text formats. Handlebars templates look like regular text with embedded Handlebars expressions."
image="/images/Software/hanldebars.png"
docs="https://handlebarsjs.com/installation/"
/>
<Card
title= "Webpack"
content= "Webpack is an open-source JavaScript module bundler. It is a module bundler primarily for JavaScript, but it can transform front-end assets like HTML, CSS, and images if the corresponding plugins are included."
image="/images/Software/webpack.png"
docs="https://webpack.js.org/concepts/"
/>
<Card
title= "Babel"
content= "Babel is a free and open-source JavaScript compiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines."
image="/images/Software/babel.png"
docs="https://babeljs.io/docs/"
/>
<Card
title= "indexDB"
content= "IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of this data. While Web Storage is useful for storing smaller amounts of data, it is less useful for storing larger amounts of structured data. IndexedDB provides a solution."
image="/images/Software/indexdb.jpeg"
docs="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"
/>
<Card
title= "GraphQL"
content= "GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015."
image="/images/Software/graphql.png"
docs="https://graphql.org/"
/>
<Card
title= "Apollo"
content= "Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application data, all while automatically updating your UI."
image="/images/Software/apollo.png"
docs="https://www.apollographql.com/docs/"
/>
<Card
title= "JWT"
content= "JSON Web Token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed."
image="/images/Software/jwt.png"
dos="https://auth0.com/docs/secure/tokens/json-web-tokens"
/>
<Card
title= "Insomnia"
content= "Insomnia is a cross-platform GraphQL and REST client, available for Mac, Windows, and Linux."
image="/images/Software/insomnia.png"
docs="https://docs.insomnia.rest/"
/>
<Card
title= "Workbox"
content= "Workbox is a set of libraries and Node modules that make it easy to cache assets and take full advantage of features used to build Progressive Web Apps."
image="/images/Software/workbox.png"
docs="https://developer.chrome.com/docs/workbox/"
/>
<Card
title= "Heroku"
content= "Heroku is a cloud platform as a service supporting several programming languages. One of the first cloud platforms, Heroku has been in development since June 2007, when it supported only the Ruby programming language, but now supports Java, Node.js, Scala, Clojure, Python, PHP, and Go."
image="/images/Software/heroku.png"
docs="https://devcenter.heroku.com/categories/reference"
/>
<Card
title= "Netlify"
content= "Netlify is a San Francisco-based cloud computing company that offers hosting and serverless backend services for web applications and static websites."
image="/images/Software/netlify.png"
docs="https://docs.netlify.com/"
/>
<Card
title= "Git"
content= "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency."
image="/images/Software/git.png"
docs="https://git-scm.com/doc"
/>
<Card
title= "GitHub"
content= "GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features."
image="/images/Software/github.png"
docs="https://docs.github.com/en"
/>
<Card
title= "VS Code"
content= "Visual Studio Code is a free source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git."
image="/images/Software/vscode.jpeg"
docs="https://code.visualstudio.com/docs"
/>

    </div>
)

}

export default FreeSoftware