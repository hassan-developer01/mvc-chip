import View from "./app/mvc/view/View";

window.view = new View("app");

const cssProps = {
  background: '#eee',
  textAlign: 'center',
  color: '#0c32c7',
  width: '50%',
  height: '240px',
  margin: '1rem auto',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'sans-serif',
  fontSize: '24px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  flexWrap: 'wrap'
};

view.css.some(cssProps);

view.make('div', (parent, element) => {
  element.dom.text('hello world');

  parent.dom.append(element);
});

view.make('div', (parent, element) => {
  element.dom.text('How Are You Doing?');
  element.css.single('color', 'green');
  element.css.single('fontSize', '16px');
  element.css.single('fontStyle', 'italic');

  parent.dom.append(element);
});