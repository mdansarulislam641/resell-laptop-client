import React from 'react';

const Blog = () => {
    return (
      <section className='bg-[#f1f1f1]'>
        <h2 className='text-3xl md:text-5xl text-center pt-10'>Blogs</h2>
          <div className='py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto gap-5'>
            
            <div className='bg-gray-200 shadow-lg shadow-black rounded p-5 text-xl '>
                <h2 className='text-3xl text-center py-5'>What are the different ways to manage a state in a React application?</h2>
                <p className='text-xl'>
                The Four Kinds of React State to Manage
When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

There are four main types of state you need to properly manage in your React apps:
            <ul className='font-bold text-center'>
                <li>Local state
</li>
<li>URL state</li>
<li>Server state</li>
<li>Global state</li>
</ul>
                </p>
            </div>

            <div className='bg-gray-200 shadow-lg shadow-black rounded p-5 text-xl '>
                <div className='container'>
            <h2 className='text-center text-3xl '>How does prototypical inheritance work?</h2>
            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
            </div>

            <div className='bg-gray-200 shadow-lg shadow-black rounded p-5 text-xl '>
                <div className='container text-xl'>
                    <h3 className="text-3xl text-center">
                    How does prototypical inheritance work?
                    </h3>
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>

            <div className="bg-gray-200 shadow-lg shadow-black rounded p-5 text-xl ">
                <div className="container text-xl">
                    <h2 className='text-3xl text-center'>What is a unit test? Why should we write unit tests?</h2>
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>
        <div className="bg-gray-200 shadow-lg shadow-black rounded p-5 text-xl ">
            <div className="container">
                <h2 className='text-3xl text-center'> React vs. Angular vs. Vue?</h2>
                <p>React is a UI library, Angular is a fully-fledged front-end framework, while Vue. js is a progressive framework. They can be used almost interchangeably to build front-end applications, but they're not 100 percent the same, so it makes sense to compare them and understand their differences.</p>
            </div>
        </div>
            </div>
      </section>
    );
};

export default Blog;