import React, {Component} from 'react';
import slugify from 'slugify';
import { render } from 'react-dom';

export default class RadioButton extends Component {
    render () {
        const item = this.props.store[this.props.feature].map((i) =>{
            console.log(i.name)
            const itemHash = slugify(JSON.stringify(i));
            return (
                <div key={itemHash} className="feature__item">
                    <input
                        type="radio"
                        id={itemHash}
                        className="feature__option"
                        //the dreaded 13th line #GazeIntoTheAbyss
                        name={slugify(i.name)}
                        checked={i.name === this.props.selected[this.props.feature].name}
                        //now its mad at this line #whyGodwhy
                        onChange={e => this.props.update(this.props.feature, i)}
                    />
                    <label htmlFor={itemHash} className="feature__label">
                        {i.name} {this.props.conversion.format(i.cost)}
                    </label>
                </div>
            )
        })
        return(
            item
        )
    }
}