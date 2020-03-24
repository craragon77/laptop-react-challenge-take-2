import React, {Component} from 'react';
import slugify from 'slugify';
import { render } from 'react-dom';

export default class RadioButton extends Component {
    render () {
        const item = Object.values(this.props.selected)
        for (let i = 0; i <item.length; i++){
            console.log(item[i])
        }
            //console.log(this.props.conversion.format(item))
            const itemHash = slugify(JSON.stringify(this.props.featureHash));
            
            return (
                <div key={itemHash} className="feature__item">
                    <input
                        type="radio"
                        id={itemHash}
                        className="feature__option"
                        //the dreaded 13th line #GazeIntoTheAbyss
                        name={slugify(this.props.feature)}
                        checked={item.name === this.props.selected[this.props.feature].name}
                        //now its mad at this line #whyGodwhy
                        onChange={e => this.props.update(this.props.feature, item)}
                    />
                    <label htmlFor={itemHash} className="feature__label">
                        {item.name} {this.props.conversion.format(item.cost)}
                    </label>
                </div>
            )
    }
}