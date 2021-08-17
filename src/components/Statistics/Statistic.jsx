const Statistic = ({ props, title }) => {
    return (
        <section class="statistics">
            <h2 class="title">{title}</h2>

            <ul class="stat-list">
                {props.map(prop => 
                <li class="item" key={prop.id}>
                    <span class="label">{prop.label}</span>
                    <span class="percentage">{prop.percentage}</span>
                </li>
               
                )}
            
            </ul>
        </section>
    )
};

export default Statistic;