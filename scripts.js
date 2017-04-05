var Clockwerk = React.createClass({
  getInitialState() {
    return {
      startedAt: null,
      timeSpent: null,
    };
  },

  componentDidMount() {
    setInterval(this.tick, 100)
  },

  tick() {
    if (this.state.startedAt) {
      const startedAt = moment(this.state.startedAt)
      this.setState({ timeSpent: moment().diff(startedAt) })
    }
  },

  clock() {
    const clockAt = moment()
    this.setState({ startedAt: clockAt.format() })
  },

  render() {
    const startedAt = this.state.startedAt ? moment(this.state.startedAt).format('DD/MMM/YY HH:mm A') : null
    const duration = moment.duration(this.state.timeSpent)
    const timeSpent = Math.floor(duration.asHours()) + moment.utc(duration.asMilliseconds()).format("[h] m[m]")
    return <div>
      <button onClick={ this.clock }>Clock Now</button>
      <div>{ startedAt }</div>
      <div>{ timeSpent }</div>
    </div>;
  }
});

ReactDOM.render(<Clockwerk />, document.getElementById('root'));