import './AnnualPlan.css'

function AnnualPlan(){
    return(
        <div className='annualPlanWrapper'>
            <aside className="left">
                <img src="./images/music.svg" alt="musicIcon" />
                <div className='prise'>
                    <h4>Annual Plan</h4>
                    <h5>$59.99/year</h5>
                </div>
            </aside>
            <aside className="right">
                <h6>change</h6>
            </aside>
        </div>
    )
}

export default AnnualPlan