import React from 'react'

function Form(props) {
    const { list, update, submit } = props

    const onChange = event => {
        const {name, value} = event.target
        update(name,value)
    }
    const onSubmit = event => {
        event.preventDefault()
        submit()
    }


return (
    <form className='container' onSubmit={onSubmit}>
        <div className='form-inputs'>
            <label>
                <input
                    name='name'
                    type='text'
                    value={list.name}
                    placeholder='Name'
                    onChange={onChange}
                />
            </label>
            <br/>
            <label>
                <input
                    name='email'
                    type='text'
                    value={list.email}
                    placeholder='Email'
                    onChange={onChange}
                />
            </label>
            <br/>
            <label>
                <select
                    name='role'
                    value={list.role}
                    onChange={onChange}>
                        <option value=''>--- Select a Role ---</option>
                        <option value='Front-end'>Front-end</option>
                        <option value='Back-end'>Back-end</option>
                        <option value='Full Stack'>Full Stack</option>
                        <option value='Designer'>Designer</option>
                </select>
            </label>
            <div className='submit'>
                <button>Submit</button>
            </div>
        </div>
    </form>
)
}
export default Form