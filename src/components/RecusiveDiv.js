import React from 'react';

const ImRecursive = ({ hasChild = false }) => (
    <div className={hasChild ? "parent" : "child"}>
        <p>I am the {hasChild ? "parent" : "child"} div</p>
        {hasChild && <ImRecursive />}  {/* (if this part is true) && (this part will execute) */}
    </div>
)

const div = () => (
    <div>
        <ImRecursive hasChild={true} />
    </div>
)

export default div;