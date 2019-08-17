// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.


import React from 'react';
import styles from './ShowPreview.module.css';

const ShowPreview = (props) => {
    const {name, id, summary, image} = props;

    return <div className={styles.container + ' t-preview'}>
        <div>
            <a className="t-link" href={`/shows/${id}`}>{name}</a>
            {image ? <img src={image.medium} alt={name}/> : ''}
        </div>
        <div>{summary ? <p dangerouslySetInnerHTML={{__html: summary}}/> : ''}</div>
    </div>;
};

export default ShowPreview;

