function customRender(reactElement, mainContainer) {
  /* 
  const tag = document.createElement(reactElement.tag);
  tag.className = reactElement.className;
  tag.textContent = reactElement.children;
  tag.setAttribute('href', reactElement.props.href);
  tag.setAttribute('target', reactElement.props.target);
  mainContainer.appendChild(tag);
 */

  const domElement = document.createElement(reactElement.tag);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  mainContainer.appendChild(domElement);
}

const reactElement = {
  tag: 'a',
  props: {
    href: 'https://google.com/',
    target: '_blank',
  },
  children: 'click me to visit google',
  className: 'anchorTag',
};

const mainContainer = document.getElementById('root');
customRender(reactElement, mainContainer);
