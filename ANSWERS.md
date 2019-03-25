## Self-Study/Essay Questions

* [x] Q. What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
```
A. PropTypes are used to create a system of checking a passed
property to see if it matches the type we are checking for.
This is an important thing to do in a good well defined system 
as we can add modifiers such as `isRequired` to set it as a 
required piece of data. It lets other developers know that we 
expect X type data from Y prop in Z component from our State or 
other methods of passing props.
```

* [x] Q. Describe a life-cycle event in React?
```
A. A life cycle event pertains to the current state of the 
application and whether or not the state has changed. When such 
things occur we can use a Life Cycle Method. One such method is 
componentDidMount. This life cycle event sets up the initial 
state of the application and defines what to do upon loading 
this state. Pre maintenance tasks can be here. Another LCM is 
componentDidUpdate. These are tasks to complete during each 
re-render, this could be anything to flushing specific data, to 
throwing up sparkles across the page on each data change. One is 
really only limited by imagination when coding.
```

* [x] Q. Explain the details of a Higher Order Component?
```
A. The short of it is, A higher ordered component is one that 
takes a component as an argument. This could be useful for 
privatizing certain data (not securing, but creating an 
accessibility reach limit), or even for customizing different 
react components across different pieces of the app.
```

* [x] Q. What are three different ways to style components in React? Explain some of the benefits of each.
```
A.
1. CSS. This one is an easy entry way into getting designing 
with React and doesn't rely on you learning something extraneous 
to get started. One could include Pre-Processors here, but I 
feel they belong as one of the options.

2. Pre Processors. Such as LESS, SASS, or Stylus are popular 
choices for providing more granularity and control over bundling 
styles that are meant to be used together. Can add a learning 
curve to styling any sort of web app, but are very effective 
once mastered. With nesting, and variables, it can quickly 
become a boon rather than a bane to your toolkit.

3. Bundled React components. From framework design projects such 
as Bootstrap, Pure, or Bulma; created by the community. The 
benefits of these, are they're bound up to a specific style, but 
this is also a con as well, as it leads to a very homogenized 
and repetitive look in some cases. 

4. Another alternative is using Styled components. This allows 
you to define components with your own styles applied with CSS 
directly in your components themselves. No mushy JSX syntax, 
just plain vanilla JS, this makes it easier to style a project 
quickly, and creates modules for ease and reuse.
```
