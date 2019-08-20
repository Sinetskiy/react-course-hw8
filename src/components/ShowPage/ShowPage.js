// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action

import React, {PureComponent} from 'react';
import styles from './ShowPage.module.css'
import {showRequest} from "../../middlewares/actions";
import {connect} from "react-redux";

class ShowPage extends PureComponent {

    componentDidMount() {
        const {match, showRequest} = this.props;
        showRequest(match.params.id);
    }

    render() {

        const {name, summary, image, _embedded} = this.props.currentElement;

        return <div>
            <p>{name}</p>
            <img src={image && image.medium} alt={name}/>
            <div>{summary ? <p dangerouslySetInnerHTML={{__html: summary}}/> : ''}</div>
            <div className={styles.cast}>
                {_embedded && _embedded.cast && _embedded.cast.map(cast =>
                    <React.Fragment key={cast.person && cast.person.id}>
                        <div className="t-person"><p>{cast.person && cast.person.name}</p>
                            {cast.person && cast.person.image ?
                                <img src={cast.person.image.medium} alt={cast.person && cast.person.name}/> : ''}
                        </div>
                    </React.Fragment>)}
            </div>
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {...state.shows}
};

const mapDispatchToProps = (dispatch) => {
    return {
        showRequest: (show) => {
            dispatch(showRequest(show))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);