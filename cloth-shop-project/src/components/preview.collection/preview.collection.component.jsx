import React from 'react';
import '../preview.collection/preview.styles.scss';
import '../collection.items/collection.items.component';
import CollectionItem from '../collection.items/collection.items.component';

// Functional Component / Stateless
const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
            .filter((item, idx) => idx < 4)
            .map((item) => (
                <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
);

export default CollectionPreview; 