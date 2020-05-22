import React, {useState} from "react";

const TeamForm = props => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        role: "",
        age: ""
    });

    const handleChanges = event => {
        setForm({...form, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewForm(form);
        setForm({
            name: "",
            email: "",
            role:"",
            age: ""
        });
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                name="name"
                onChange={handleChanges}
                value={form.name}
                placeholder="Enter Name Here"
            />
            <label htmlFor="role">Role:</label>
            <input
                type="text"
                id="role"
                name="role"
                value={form.role}
                onChange={handleChanges}
                placeholder="Job Title"
            />
            <label htmlFor="email">Email:</label>
            <input
                type="text"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChanges}
                placeholder="Enter Email Here"
            />
            <label  htmlFor="age">Age:</label>
            <input
                type="text"
                id="age"
                name="age"
                value={form.age}
                onChange={handleChanges}
                placeholder="Enter Age Here"
            />
            <button type="submit">Add Team Member</button>
        </form>
    );
};

export default TeamForm;