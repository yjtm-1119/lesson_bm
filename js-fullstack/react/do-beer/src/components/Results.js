import React from "react";
// StatefullComponent  StatelessComponent
import Beer from "./Beer";


class Results extends React.Component {
  render() {
    if (this.props.loading) {
      return <div>Loading...</div>
    }
    return (
      <div className="results">
        <div className="beers">
          {
            this.props.beers.map((details, i) => <Beer details={details} key={details.id} />)
          }
        </div>
      </div>
    )
  }
}


export default Results;