import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';

import {
  NEW,
  IN_PROGRESS,
  DONE,
  statuses,
  statusTranslations
} from './Statuses';

export class TodoStats extends React.Component {

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id : PropTypes.number.isRequired,
      title : PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status : PropTypes.string.isRequired
    }))
  }

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object)
  }

  componentDidMount() {
    this.buildChart(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.buildChart(nextProps);
  }

  buildChart(props) {
    if (props.todos) {
      const counters = { [NEW]: 0, [IN_PROGRESS]: 0, [DONE]: 0 }
      props.todos.forEach(t => counters[t.status] += 1)

      const data = {
          labels: statuses.map(status => statusTranslations[status]),
          datasets: [
              {
                  data: [counters[NEW], counters[IN_PROGRESS], counters[DONE]],
                  backgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ]
              }]
      };

      var options = {
        responsive: true
      }

      if (this.statusesChart) {
          this.statusesChart.destroy()
          this.statusesChart = null
      }
      this.statusesChart = new Chart(this.chartCanvas,{
          type: 'pie',
          data: data,
          options: options
      });
    }
  }

  componentWillUnmount() {
    this.statusesChart.destroy()
    this.statusesChart = null
  }


  render () {
    return (
      <div>
        <h3>Stats</h3>
        <p>{this.props.todos.length} TODOs</p>
        <canvas ref={(canvas) => { this.chartCanvas = canvas }}></canvas>
      </div>
    )
  }
}
