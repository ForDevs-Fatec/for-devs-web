import Select from 'react-select'

interface UserSelectRoleProps {
    roleOptions: [
        { value: string, label: string },
        { value: string, label: string },
        { value: string, label: string },
    ];
    placeholder?: string;
}

export function UserSelectRole({roleOptions, placeholder}: UserSelectRoleProps) {
    return (
        <Select
            options={roleOptions}
            isClearable
            placeholder={placeholder}
            styles={{
                control: (provided) => ({
                    ...provided,
                    width: '12.5rem',
                })
            }}
        />
    )
}