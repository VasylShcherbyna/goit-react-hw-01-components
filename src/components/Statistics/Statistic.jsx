import React from 'react';
import PropTypes from 'prop-types';

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

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistic;