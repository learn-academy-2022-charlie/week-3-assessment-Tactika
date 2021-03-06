# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is `this` in JavaScript?
    - Your answer:
      > In JavaScript `this` is the way to reference the internal class properties and methods. Since classes are constructors and can be used to create many additional objects the `this` keyword references the instance of what current object you are calling on items from. The `this` keyword is used via dot or object notation (i.e. this.objectProperty or this.objectMethod()... etc.). I've primarily used this in my day to day use of ReactJS, where I code primarily in Object Components vs function components. I use it to access the components state, props, and other built-in methods/properties.
    - Researched answer:
      > This in JavaScript can do different things, depending on where and how the keyword is used. While used inside an objective it references the internal properties and functions of the item it was called within. When used outside of any function, it will be referencing the global scope. If you call the this keyword in the global scope within a website, it will reference the window object. JavaScripts `this` can change in many ways depending on the use of strict mode as well. The most straight forward information on using `this` was to be sure what it will reference before you get too far in your code.

2. What is React? Why would you use it?
    - Your answer:
      > ReactJS is a frontend JavaScript framework that is used to create user interfaces. It's used by many developers to create highly scalable applications that are built using a component type of approach. The reason I would recommend using it and why I use it is because of its market coverage and scalability. The popularity of React means the amount of community support and job coverage is above average compared to many other lesser known frameworks. The scalability means it can be used for any web application from a single page informational page about cats or a fortune 500 company's billion dollar application.
    - Researched answer:
      > React was created by a Facebook developer named Jordan Walke and first used on Facebook news feeds in 2011. It was created to make user interfaces primarily in single page applications. Since its inception it has grown to be used on small single page applications and large corporate applications, leveraging its reuseable components to scale apps fairly simply. ReactJS is known as the open-source version of Facebook's react platform, while React Native is used for Android, iOS, and other native applications.

3. Which lifecycle method is required in a React class component?
    - Your answer:
      > render()
    - Researched answer:
      > render is the only required method.

4. What is JSX? What is one syntax difference between HTML and JSX?
    - Your answer:
      > JSX is a way to write XHTML compatible JavaScript. This is used commonly in ReactJS to be able to work with JavaScript and extensible HTML. In React you can combine the functionality of JavaScript and building blocks of HTML to dynamically create full-fledged web apps with components. A syntax difference between HTML and JSX is that class names are camel cased in JSX while in HTML, you stick to standard cabob base.
    - Researched answer:
      > JSX stands for JavaScript XML which means extensible markup language, similar to html. The language extension allows developers to code html like structural components using tags, elements, and references most web developers are already comfortable with. JSX can have embedded JavaScript ran within the code if ran in-between curly brackets, which can also house references to data called from an API or other internal/external resource, so long it was passed into the react application correctly, allowing for a dynamic page to be loaded depending on various variables.

5. What is yarn? What file(s) are modified in a React application when you run yarn?
    - Your answer:
      > Yarn is a resource package manager similar to NPM or NPX. It's used to track, maintain and remove numerous software packages hosted in on online database. Its commonly used at Learn Academy to install packages like create-react-app and jest, as well as running a basic server to test react applications.
      Typically when you run the yarn command it creates a yarn.lock, package.json, and node modules sub-folder. The package.json file has a few details about the application like app name, version and a minimal list of dependency software packages needed for your application. The yarn.lock file is more verbose having every package name and version required for every dependency and sub-dependency of every package you require for your application. The node modules folder that is created is all the software dependencies pulled down from the web and installed locally to that project.
    - Researched answer:
      > Yarn stands for Yet Another Resource Negotiator which was created by Facebook in cooperation with Exponent, Google, and Tilde to find a better 'NPM'. Yarn was created to be more secure, more efficient, and be more consistent. The initialization of Yarn install creates a package.json, yarn.lock, and node_modules folder with projects root folder. The install process consists of three steps: resolution, fetching, and linking. The resolution step finds all the dependencies and sub-dependencies using the registry. The fetching step checks all the offline folders to see if the dependencies need to be downloaded, if needed the installs will be downloaded. The linking step copies any global installs that are necessary to the projects node_modules directory.

6. STRETCH: What is an anonymous function in JavaScript?
    - Your answer:
      > An anonymous function in JavaScript is a function without a name. Anonymous functions are used when it may not want to be able to be directly called but can be built-in in a process where a function call uses an anonymous function to return some modified code.
    - Researched answer:
      > Since anonymous functions aren't named they can't usually be accessed after its initial creation, hence anonymous. Anonymous functions are used in callbacks, arguments to functions, or even closures.

## Looking Ahead: Terms for Next Week

1. Conditional rendering:
   - Researched answer:
      > Conditional rendering is a term to describe the ability to render different user interface markup if a conditional is true or false.

2. Object-oriented programming:
   - Researched answer:
      > OOP or Object Oriented Programming is the programming paradigm that relies on the concept of classes and objects vs functions and logic. It focuses on what objects you can manipulate rather than the logic required to manipulate them.

3. Ruby:
   - Researched answer:
      > Ruby is a dynamic open source programming language with a focus on simplicity and productivity. Created by Yukihiro Matsumoto in 1995. Ruby is an interpreted, high level, and general purpose programming language.

4. Ruby blocks:
   - Researched answer:
      > Ruby blocks are another name for a method or closures in other programming languages, but it doesn't belong to an object. A block accepts and argument and returns a value, blocks don't have their own name, and consist of chunks of code.

5. Ruby hashes:
   - Researched answer:
      > Ruby hashes are dictionary-like collections of unique keys and their values. They are also called associative arrays, but where arrays use integers as its index, hashes use any object type.
