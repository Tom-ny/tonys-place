'use client'

import TimeLineComponent from "../components/timeLineComponent"
import "../page.css"

export default function Home(){
    return(
        <>
            <div className='contentWrapper'>
                <div className='timeLineWrapper'>
                <TimeLineComponent 
                titleText="1" align="left"
                breadText="A left aligned timeline entry"/>
                <TimeLineComponent titleText="2" align="right"
                breadText="A right aligned timeline entry"/>
                </div>   
            </div>
        </>
    )
}
