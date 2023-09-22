import Select from 'react-select'

const options = [
    { value: 'admin', label: 'Administrador' },
    { value: 'nivel1', label: 'Nivel 1' },
    { value: 'nivel2', label: 'Nivel 2' },
]

export function UserSelectRole() {
    return (
        <Select
            options={options}
            isClearable
            placeholder="Selecione um cargo..."
        />
    )
}