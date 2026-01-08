import "./styleButton.css"


type StyleButtonProps = {
    number: number }

function StyleButton(props: StyleButtonProps) {
    return(

        <>
        <div className="buttonWrapper">
            <p>{props.number}</p>            
                

        </div>
        </>
    )

}

export default StyleButton