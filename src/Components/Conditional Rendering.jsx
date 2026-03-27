const ConditionalRendring = () => {

    const isLoggedIn = false;
    return (
        <>
        <h1>Conditional Rendring</h1>
        <div>
      {isLoggedIn ? <h1>Welcome User</h1> : <h1>Please Login</h1>}
    </div>
        
        </>
      );
}
 
export default ConditionalRendring;