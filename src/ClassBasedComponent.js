
// What are function components => it is just a function (returning some JSX)...!!!

// import React from 'react'

// const ClassBasedComponent = ({props}) => {
//   return (
//     <div>ClassBasedComponent</div>
//   )
// }

// export default ClassBasedComponent



// What are class based components? ==> Just a class which return some JSX


import React from 'react'

class ClassBasedComponent extends React.Component {

    constructor(props) {
        super(props);
        //console.log(props);
        // Constructor is the best place to initialize states

        this.state = {
            count: 0
        }

    }

    componentDidMount() {
        console.log("Component did mount called.....");
        // Write some logic here

        // This is called only once when your component is rendered first time
        // This is best place to write or call some APIs (using fetch) which will give us one time info to store


    }

    componentDidUpdate() {
        console.log("Component did Update called.....");

        //
    }

    componentWillUnmount() {
        console.log(" Component will unmount");    
    }

    handleIncrementClick() {
        //console.log("Increement Clicked....");
        // Here we now want to increement our count state variable

        // In class components, there is only one method for all states
        console.log(this);
        this.setState(()=>({
            count: this.state.count+1
        }));

    }

    render() {
        // Always return your JSX through render function       
        return (
            <div>
                Count: {this.state.count}
                <button onClick={()=>this.handleIncrementClick()}>Increment</button>
    
            </div>
        )
    }
}

export default ClassBasedComponent