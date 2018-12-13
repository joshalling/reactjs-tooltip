import React, { Component } from "react";
import styles from "./styles";

class Tooltip extends Component {
    state = {
        isOpen: false,
        position: {}
    };

    _handleMouseIn = () => {
        this.setState(() => ({ isOpen: true }));
    };

    _handleMouseOut = () => {
        this.setState(() => ({ isOpen: false }));
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isOpen !== this.state.isOpen && this.state.isOpen === true) {
            this.setState(() => ({
                position: styles.positioner(this.contentRef, this.props.placement)
            }));
        }
    }

    render() {
        return (
            <span
                style={{ ...styles.container, ...this.props.style }}
                onMouseOver={this._handleMouseIn}
                onMouseOut={this._handleMouseOut}
            >
                {this.props.children}
                {this.state.isOpen && (
                    <div
                        style={{ ...styles.tooltip, ...this.state.position }}
                        ref={ref => (this.contentRef = ref)}
                    >
                        {this.props.content}
                    </div>
                )}
            </span>
        );
    }
}

export default Tooltip;
