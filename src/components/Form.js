import React from 'react';

const Form = props => {
    return (
        <div className="team-list">
            {props.forms.map(form => (
                <div className="form">
                    <h2>Name: {form.name}</h2>
                    <h2>Email: {form.email}</h2>
                    <h2>Job: {form.role}</h2>
                    <h2>Age: {form.age}</h2>
                </div>
            ))}
        </div>
    );
};

export default Form;