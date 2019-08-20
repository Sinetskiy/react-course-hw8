// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

import React, {PureComponent} from 'react';
import styles from './Search.module.css';
import ShowPreview from "../ShowPreview";
import {searchRequest} from "../../middlewares/actions";
import {connect} from "react-redux";

class Search extends PureComponent {

    state = {search: ''};

    handleChange = event => {
        this.setState({search: event.target.value});
    };

    handleSearch = () => {
        const {searchRequest} = this.props;
        const {search} = this.state;
        searchRequest(search);
        this.setState({search: ''});
    };

    render() {

        const {search} = this.state;
        const {elements} = this.props;
        return (<div>
            <div className={styles.previewList}>
                <input className={styles.input + ' t-input'} placeholder="Название сериала" value={search}
                       onChange={this.handleChange}/>
                <div className={styles.buttonWrapper}>
                    <button className={styles.button + ' t-search-button'} onClick={this.handleSearch}>Найти</button>
                </div>
            </div>
            <div className={styles.searchPanel + ' t-search-result'}>
                {elements.map(element => <ShowPreview {...element} />)}
            </div>
        </div>);
    }

}

const mapStateToProps = (state) => {
    return {...state.search}
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchRequest: (search) => {
            dispatch(searchRequest(search))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);