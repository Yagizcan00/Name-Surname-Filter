import { useState } from 'react'

function NameSurname() {
    const [form, setForm] = useState({ name: "", surname: "" })

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <h1>Your Name </h1>
            <input name='name' value={form.name} onChange={onChangeInput} />

            <h1>Your Surname</h1>
            <input name='surname' value={form.surname} onChange={onChangeInput} /><br /><br /><hr />

            <h2>Welcome {form.name}  {form.surname}</h2>
        </div>
    )
}

export default NameSurname

