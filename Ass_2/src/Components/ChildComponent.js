import React from 'react';

function ChildComponent (props){
    return(<div>
<button onClick={()=>props.handler('child')}>inheritence</button>
        </div>)
}
            
        export default ChildComponent;