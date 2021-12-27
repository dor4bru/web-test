import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Monitor from './Monitor'

export default function MonitorType({id, name, variant, legendId, description, monitors, onClick}) {

    return (
        <DropdownButton
            style={{ marginLeft: '.2rem', marginRight: '.2rem', "customColor": 'black'}}
            as={ButtonGroup}
            id={id.toString()}
            title={name}
            key={name}
            variant={variant.toLowerCase()}
        >
            {monitors.map((m, index) => {
                return (
                    <Monitor id={m.Id}
                             key={index}
                             name={m.Name}
                             desc={m.Desc}
                             typeId={m.MonitorTypeId}
                             onClick={onClick}>{m.Name}</Monitor>)
            })}
        </DropdownButton>
    );
}
