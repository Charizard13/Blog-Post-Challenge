import React from 'react';

class ComponentsError extends React.Component {
    constructor(props) {
        super(props)
        this.state = {hasError: false}
    }
    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    render() {
        if(this.state.hasError) {
            return (
                <div>
                   good job
                </div>
            )
        }
        return <>{this.props.children}</>
    }
}

export default  ComponentsError;
