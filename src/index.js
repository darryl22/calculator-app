import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"

import Calc from './Calc';

function Page() {
  return(
    <div>
      <Calc/>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page/>);
