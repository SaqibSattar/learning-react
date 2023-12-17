const parent = React.createElement('div', {}, [
  React.createElement('h1', {}, 'This is h1'),
  React.createElement('h2', {}, 'This is h2'),
  React.createElement('div', {}, [
    React.createElement('h1', {}, 'This is h1 inside'),
    React.createElement('h2', {}, 'This is h2 inside'),
  ]),
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)
