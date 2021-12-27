import Dropdown from 'react-bootstrap/Dropdown'

export default function Monitor({id, name, desc, typeId, onClick}) {
    return (
        <Dropdown.Item
            eventKey={id}
            key={id}
            onClick={() => {onClick(id, typeId)}}
        >{name}</Dropdown.Item>
    );
}