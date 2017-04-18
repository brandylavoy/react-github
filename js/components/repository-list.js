import React from 'react';
import {connect} from 'react-redux';

import Repository from './repository.js';
import * as actions from '../actions/index.js';

export class RepositoryList extends React.component {
    constructor(props){
        super(props);
        this.addRepository = this.addRepository.bind(this);
    }

    addRepository(){
        const repositoryName = this.repositoryNameInput.value;
    }

    render(){
        const repositories = this.props.repositories.map(repository =>{
            return <Repository repository={repository} key={repository.name}/>;
        });

        return(
        <div className='repository-list'>
        {repositories}
        <input type="text" ref={ref => this.repositoryNameInput = ref}/>
        <button type="button" onClick={this.addRepository}>Add Repository</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    repositories: state
});

export default connect(mapStateToProps)(RepositoryList);
