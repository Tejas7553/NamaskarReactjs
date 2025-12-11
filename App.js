import React from "react";
import { createRoot } from "react-dom/client";

//JSX => Raect.createElement => Object => HTML(DOM)

//Below is the React element
const Title = () => (
  <h1 id="titel" key="h1">
    Namskar React by Babel
  </h1>
);

// Assignment 4- Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
const nestedHeaders = React.createElement(
  "div",
  {className : "title"},
  [
    React.createElement(Title, {key: "title-cop"}),
    React.createElement("h1", {key:"h4"}, "This is h1"),
    React.createElement("h2", {key:"h2"}, "This is h2"),
    React.createElement("h3", {key:"h3"}, "This is h3")
  ]
)

//Create the same element using JSX
const nestedHeadersJSX = (
  <div className="title">
    <Title />
    <h1 id="h1">H1 by JSX</h1>
     <h2 id='h2'>H2 by JSX</h2>
      <h3 id='h3'>H3 by JSX</h3>
  </div>
)


// Create a functional component of the same with JSX
const NestedHeaders = () => {
  return(
    <div>
    {<Title/>} 
    <h1>This is h1</h1>
    <h2>This is h1</h2>
    <h3>This is h1</h3>
    </div>
  )
}

//React Component
// Functional Component
const HeaderComponent = () => {
  return (
    <div>
      {/* Component Composition */}
      {<Title />}  
      <h2>Namste React Functional Component</h2>
      <h2>This is an H2 tag</h2>
    </div>
  );
};

// Assignment 4-
const Header = () => {
  return(
    <div className="header">
      <div className="logo">
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
         alt="logo"
         />
       
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search..."/>
        <button>Find</button>
      </div>

      <div className="user-icon">
        <img
        src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
        alt="user"/>

      </div>
    </div>
  )
}

const root = createRoot(document.getElementById("root"));
// root.render(<HeaderComponent />);
// root.render(nestedHeaders);
// root.render(<NestedHeaders/>);
// root.render(nestedHeadersJSX);
root.render(<Header/>);

// JavaScript Code :  Manipulating the HTML DOM using Javscript
/*
const heading = document.createElement("h1");
heading.innerHTML = "Hello World from JavaScript!"
const root = document.getElementById("root");
root.appendChild(heading);
*/

// React Code : Manipulating the HTML DOM using React
/*
const heading = React.createElement("h1", {}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/

// creating Nested React Elements Object: Here h1 is an React Object not HTML Element
/*
const heading = React.createElement(
    "h1", 
    { id: "heading", xyz: "abc" }, 
    "Hello World from React!"
);

// Creating root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing React Element(object h1) inside root
root.render(heading);
*/

// creating Nested React Elements Object
/**
 * <div id="parent">
 *   <div id="child">
 *     <h1>I am an h1 tag</h1>
 *   </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */
/*
const parent = React.createElement(
    "div", 
    { id: "parent" }, 
    React.createElement(
        "div",
        { id: "child" },
        React.createElement(
            "h1",
            {},
            "I am an h1 tag"
        )
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

/*
const App = () => {
  return React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      React.createElement("h1", {}, "I am an h1 tag")
    )
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());
*/

// creating Sibling React Elements Object
/**
 * <div id="parent">
 *   <div id="child">
 *     <h1>I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */
/*
const parent = React.createElement(
    "div", 
    { id: "parent" }, 
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement(
                "h1",
                {},
                "I am an h1 tag"
            ),
            React.createElement(
                "h2",
                {},
                "I am an h2 tag"
            ),
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

// creating Sibling React Elements Object
/**
 * <div id="parent">
 *   <div id="child1">
 *     <h1>I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
 *   <div id="child2">
 *     <h1>I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */
/*
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

// creating Sibling React Elements Object
/**
 * <div id="parent" style="background: skyblue;">
 *   <div id="child1">
 *     <h1>I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
 *   <div id="child2">
 *     <h1>I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */
