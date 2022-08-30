import * as React from 'react';
import * as ReactDOM from 'react-dom';

function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p className='home-page__p'>{str}</p>);
}

export default NewlineText;