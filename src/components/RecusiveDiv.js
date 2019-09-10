import React from 'react';

const ImRecursive = ({ child = false }) => (
    <div className={child ? "parent" : "child"}>
        <p>I am the {child ? "parent" : "child"} div</p>
        {child && <ImRecursive />}
    </div>
)

const div = () => (
    <div>
        <ImRecursive child={true} />
    </div>
)

export default div;