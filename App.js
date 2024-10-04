// Below is for only one element
// const heading = React.createElement('h1', { id: 'heading' }, 'Hello World from React!');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// below is for more elements/ Nested element structure
const parent = React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'I am H1 Tag'), React.createElement('h2', {}, 'I am H2 Tag')]));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);