import React from 'react';
import ListItem from "./ListItem";

const InsideContentList = ({tiles}) => {
    return (
        <div className="inside_content list">
            {
                tiles.map(
                    (value) => {
                        return <ListItem obj={value} key={value.id}/>
                    }
                )
            }
        </div>
    );
};

export default InsideContentList;