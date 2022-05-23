import React, { Component } from "react";

class SkillRow extends Component {
    getRandomColor() {
        let r = Math.floor(Math.random() * 150);
        let g = Math.floor(Math.random() * 150);
        let b = Math.floor(Math.random() * 150);
        let color = `rgb(${r}, ${g}, ${b})`;
        return color;
    }

    render() {
        if (!this.props.data) return null;

        const index = this.props.index;
        const className = "bar-expand " + index;
        const backgroundColor = this.getRandomColor();
        const skillName = this.props.data.name;

        const enumSkills = this.props.data.enumSkills.map((enumSkills, index) => {
            return (
                <button key={index} type="button" class="btn" style={{ backgroundColor }}>{enumSkills.skill}</button>  
            );
        });

        return (
            <li key={index}>
                <span className={className + " btn-group"}>{enumSkills}</span>
                <em>{skillName}</em>
            </li>
        );
    }
}

export default SkillRow;
