export const data = [
  {
    id: 1,
    question: 'What is context in React ?',
    content:
      'Context provides a way to pass data through the component tree without having to pass props down manually at every level.'
  },
  {
    id: 2,
    question: 'What is forwarding refs ?',
    content:
      'Ref forwarding is a technique for automatically passing a ref through a component to one of its children. This is typically not necessary for most components in the application. However, it can be useful for some kinds of components, especially in reusable component libraries. The most common scenarios are described below.'
  },
  {
    id: 3,
    question: 'What are refs ?',
    content:
      'Refs provide a way to access DOM nodes or React elements created in the render method.'
  },
  {
    id: 4,
    question: 'Why state doesn’t update right after you change it ?',
    content:
      'State variables might look like regular JavaScript variables that you can read and write to. However, state behaves more like a snapshot. Setting it does not change the state variable you already have, but instead triggers a re-render.'
  }
];
