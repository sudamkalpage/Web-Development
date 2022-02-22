import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ["tag1","tag2", "tag3"]
    };
    
    render() { 
        return (
        <div>
            <span style={{fontSize: 30}} className={this.spanClassDefine()}>{this.formatCount()}</span>
            <button className='btn btn-secondary btn-sm'>Increment</button>
            {this.renderTags()}   
            {this.state.tags.length === 0 && <p>Please add Tags to display</p>}        
        </div>
            );
    }

    renderTags(){
        return this.state.tags.length === 0 ? <p>There are no tags to display</p> :<ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
    </ul>
    }

    spanClassDefine() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;
