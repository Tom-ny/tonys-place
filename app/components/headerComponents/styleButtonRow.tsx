import StyleButton from "../styleButton";
import "./styleButtonRow.css"

type buttonRowProps = {
    } & React.HTMLAttributes<HTMLDivElement>;

function StyleButtonRow(props: buttonRowProps) {

    return(
    <>
        {/* <div className="styleButtonRowWrapper"> */}
        <StyleButton number={1}/> 
        <StyleButton number={2}/>
        <StyleButton number={3}/>
        {/* </div> */}
    </>);
}

export default StyleButtonRow

