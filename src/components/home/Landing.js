import React, {Component} from 'react';
import SearchForm from './SearchForm';
import {connect} from 'react-redux';
import Spinner from '../layout/spinner';
import MovieContainer from './MovieContainer';

class Landing extends Component {
    render (){
        const {loading} = this.props
        return (
            <div className='container'>
                <SearchForm />
                {loading ? <Spinner /> : <MovieContainer />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading 
})

export default connect(mapStateToProps) (Landing);