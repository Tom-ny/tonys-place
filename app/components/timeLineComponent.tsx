import "./timeLineComponent.css"


    type TimeLineComponentProps = {
        align: 'left' | 'right';
        titleText?: string;
        breadText?: string;
    }

export default function TimeLineComponent(props: TimeLineComponentProps){


    return(
        <div className={`tlCompWrapper ${props.align}`}>
            <div>
                <h1>{props.titleText}</h1>
                <p>{props.breadText}</p>
            </div>
        </div>
    )
}