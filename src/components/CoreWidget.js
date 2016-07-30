/** Do not rename this file **/
import React from 'react';

export default class googleWidget extends React.Component {
  static propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    settings: React.PropTypes.object.isRequired,
  };

  static id = 'google';
  static widgetName = 'Google Search';
  static sizes = [[1, 2], [1, 3]];

  keypressHandler(event) {
    if (event.key === 'Enter') {
      location.href = `http://www.google.com/search?q=${escape(event.target.value)}`;
    }
  }

  render() {
    return (
      <div className="container uk-flex">
        <form className="uk-form uk-flex-column uk-flex uk-flex-item-1" onSubmit={(event) => event.preventDefault()}>
          <div className="uk-flex-item-1"></div>
          <div className="uk-flex uk-flex-item-1 uk-flex-middle uk-margin-left uk-margin-right uk-form-icon">
            <i className="uk-icon-search"></i>
            <input
              type="text" name="q" placeholder="Press Enter to search Google"
              className="uk-flex-item-1 input"
              onKeyPress={this.keypressHandler.bind(this)}
            />
          </div>
          <div className="uk-flex-item-1"></div>
        </form>
      </div>
    );
  }
}
