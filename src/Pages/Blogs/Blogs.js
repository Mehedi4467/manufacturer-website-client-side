import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-lg">Quastion : How will you improve the performance of a React Application?</h2>
                    <p>React applications can be optimized in many ways. Before that you need to know how React works and how React updates UI.There are also some ways.Such as
                        <br></br>
                        1.Keeping component state local where necessary <br />
                        2. Memoizing React components to prevent unnecessary re-renders <br />
                        3. Using React.memo() <br />
                        4. Using the useCallback Hook <br />
                        5. Code-splitting in React using dynamic import()
                    </p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-lg">Quastion : What are the different ways to manage a state in a React application?</h2>
                    <p>he built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of:
                        <br />
                        1.Hooks
                        <br />
                        2. React Context API
                        <br />
                        3. Apollo Link State
                    </p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-lg">Quastion : How does prototypical inheritance work?</h2>
                    <p>Prototypeal inheritance is a feature of JavaScript that is used to add methods and features to objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, to get and set an [[prototype]] of an object, we use the object. getPrototypeOf and object</p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-lg">Quastion : You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p>There are many ways to search the name field. E.g.
                        <br />
                        1. Array.prototype.find()
                        <br />
                        2 . Array.prototype.filter()
                        <br />
                        3.If you need to find if a value exists in an array, use Array.prototype.includes().
                    </p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-lg">Quastion : What is a unit test? Why should write unit tests?</h2>
                    <p>Unit testing is a software development process where the smallest testable part of an application, called a unit, is verified individually and independently for proper operation. This testing method is used by software developers and sometimes QA staff during the development process.<br />
                        Unit testing ensures that all codes meet quality standards before deployment. This ensures a reliable engineering environment where quality is paramount. During the product development life cycle, unit testing saves time and money and helps developers write better code more efficiently.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;