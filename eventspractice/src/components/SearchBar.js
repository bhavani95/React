import React from 'react';



class SearchBar extends React.Component {

   /* constructor(props) {

        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }*/

    state = { term: '' };


    /*onInputChange(event) {

        console.log(event.target.value);

    }*/

   /* onInputClick() {

        console.log("Input got clicked");
    }*/

    onFormSubmit = (e) => {
        
        e.preventDefault();
        

        this.props.onSubmit(this.state.term);
        


    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        Image Search
                        <input type="text" className="SearchbarDec"
                            value={this.state.term}
                            onChange={(e) => { this.setState({ term: e.target.value })}
                            } />

                        </div>
                </form>
                </div>
        );
    }
}

export default SearchBar;