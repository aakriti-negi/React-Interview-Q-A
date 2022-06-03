//Each component in react has a lifecycle, which you can monitor and manipulate during its phases

//1.Initial Phase
//2.Mounting Phase - Divided in 4 parts -->
// a. constructor() - called before anything else, going to be called with the props and you should start by calling super(props) & it is going to be initial phase in out react lifecycle

// b.getDerivedStateFromProps() - method which is called before rendering the elements in the D.O.M. It takes state as an argument and returns 
//c. render() - it is required and will always be called, others are optional
//d. componentDidMount() - called after component is rendered. This is where you run the statements that requires that the component is already placed in the DOM.

//3.Updating Phase
// a.getDerivedStateFromProps() - first method that is called after component gets updated 
//b.shouldComponentUpdate() - called before updating, depends on the true or false. By default it is true
//c.render
//d.getSnapshotBeforeUpdate()- will remember the last change value  and remember componentDidMount()
//e. componentDidUpdate()- it is called after update has rendered in DOM.
//4.Unmounting Phase() - the component will unmount
// a. ComponentWillUnMount() - called when component is about to be removed from the DOM.