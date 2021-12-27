
export default function Legend({tags}) {

    return (
        <div>
            {tags.map((t, index) => {
                const colort = t.Color
                return (
                    <>
                     <div key={index}  style={{color:colort}}> {t.Label}</div>
                    </>
                )
            })}
        </div>
    );
}

