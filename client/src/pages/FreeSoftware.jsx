
function Card({ title, content, image, index }) {
    return (
        <div style={{height: "100%", border:"solid" }}>
        <h2 style={{textAlign: 'center'}}><strong>{title}{image}</strong></h2>
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
image=""

/>
<Card
title= "Node.JS"
content= "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser."
/>
<Card
title= "React"
content= "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies."
image=""
/>
<Card
title= "Express.JS"
content= "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs."
/>
<Card
title= "Bootstrap"
content= "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components."
image=""
/>
<Card
title= "NPM"
content= "npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry."
image=""
/>
<Card
title= "MongoDB"
content= "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License."
image=""
/>
<Card
title= "Mongoose"
content= "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB."
image=""
/>
<Card
title= "MySQL"
content= "MySQL is an open-source relational database management system. Its name is a combination of My, the name of co-founder Michael Widenius's daughter, and SQL, the abbreviation for Structured Query Language."
image=""
/>
<Card
title= "Sequelize"
content= "Sequelize is a promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more."
image=""
/>
<Card
title= "Handlebars"
content= "Handlebars is a simple templating language. It uses a template and an input object to generate HTML or other text formats. Handlebars templates look like regular text with embedded Handlebars expressions."
image=""
/>
<Card
title= "Webpack"
content= "Webpack is an open-source JavaScript module bundler. It is a module bundler primarily for JavaScript, but it can transform front-end assets like HTML, CSS, and images if the corresponding plugins are included."
image=""
/>
<Card
title= "Babel"
content= "Babel is a free and open-source JavaScript compiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines."
image=""
/>
<Card
title= "indexDB"
content= "IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of this data. While Web Storage is useful for storing smaller amounts of data, it is less useful for storing larger amounts of structured data. IndexedDB provides a solution."
image=""
/>
<Card
title= "GraphQL"
content= "GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015."
image=""
/>
<Card
title= "Apollo"
content= "Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application data, all while automatically updating your UI."
image=""
/>
<Card
title= "JWT"
content= "JSON Web Token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed."
image=""
/>
<Card
title= "Insomnia"
content= "Insomnia is a cross-platform GraphQL and REST client, available for Mac, Windows, and Linux."
image=""
/>
<Card
title= "Workbox"
content= "Workbox is a set of libraries and Node modules that make it easy to cache assets and take full advantage of features used to build Progressive Web Apps."
image=""
/>
<Card
title= "Heroku"
content= "Heroku is a cloud platform as a service supporting several programming languages. One of the first cloud platforms, Heroku has been in development since June 2007, when it supported only the Ruby programming language, but now supports Java, Node.js, Scala, Clojure, Python, PHP, and Go."
image=""
/>
<Card
title= "Netlify"
content= "Netlify is a San Francisco-based cloud computing company that offers hosting and serverless backend services for web applications and static websites."
image=""
/>
<Card
title= "Git"
content= "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency."
image=""
/>
<Card
title= "GitHub"
content= "GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features."
image=""
/>
<Card
title= "VS Code"
content= "Visual Studio Code is a free source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git."
image=""
/>

    </div>
)

}

export default FreeSoftware