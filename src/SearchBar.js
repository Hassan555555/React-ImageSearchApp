import React from 'react'

class SearchBar extends React.Component {
    state = { input: '' }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.input)
    }

    render() {
        return (
            <div className="searcch-bar ui segment">
               <form className="ui form" onSubmit={this.onFormSubmit}>
                   <div className="field">
                       <label>Video Search</label>
                       <input type="text" value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })} /> 
                   </div>
               </form>
            </div>
        )
    }
}

export default SearchBar
