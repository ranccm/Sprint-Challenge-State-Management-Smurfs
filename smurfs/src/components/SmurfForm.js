import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../store/actions'

const SmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: '',
        id: Date.now()
    });

    const addSmurf = e => {
        e.preventDefault();
        props.postSmurfs(newSmurf)
    }

    const handleChanges = e => {
        e.preventDefault()
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="form">
            <form onSubmit={addSmurf}>
                <input
                    type='text'
                    name='name'
                    value={props.name}
                    onChange={handleChanges} />
                <input
                    type='text'
                    name='age'
                    onChange={handleChanges}
                    value={props.age} />
                <input
                    type='text'
                    name='height'
                    onChange={handleChanges}
                    value={props.height} />
                <button>give me the smurf!</button>
            </form>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        errors: state.errors
    }
}

export default connect(
    mapStateToProps,
    { postSmurfs }
)(SmurfForm); 