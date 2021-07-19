import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <br />
        <form>
          <input type='text'/>
          <button>Submit score</button>
        </form>
      </div>
    )
  }
}