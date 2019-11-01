- [ ] Why would you use class component over function components (removing hooks from the question)?

A reason I would use a class component over a functional component is the ability to set state so that all the state is listed together for an entire component. We don't have to separate our state with different variables like we do with hooks, we can list it all together in one object. Another reason is that most big companies will still use class components over functional components.

- [ ] Name three lifecycle methods and their purposes.

The Birth/Mounting Phase – componentDidMount - This is the phase when the component is being built out from ground up. Whatever initial data you’ll have access to will be defined on the constructor of this phase
The Growth/Updating Phase – shouldComponentUpdate/setState - This lifecycle method renders UI to the page as the page is updated while the user uses the site.
The Death/Unmounting Phase – Component is removed from the screen. componentWillUnmount is called and can be used for any clean up you may need to do.

- [ ] What is the purpose of a custom hook?

They allow greater control over the functionality of components in apps. We can create hooks to perform multiple functions at once - such as save to local storage and prevent default effects from happening that we don't want, or setting darkmode!. The possibilities are endless.

- [ ] Why is it important to test our apps?

We write tests for apps to minimize the risk of letting bugs into the code. It allows us to trust our code more. Automated testing is much faster than manual testing.