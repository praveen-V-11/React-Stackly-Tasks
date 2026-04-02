const PromisContainer = () => {

    const promise = new Promise((resolve, reject) => {
    let success = false;

    if (success) {
        resolve("Data received");
    } else {
        reject("Error occurred");
    }
});

promise
    .then(res => console.log(res))
    .catch(err => console.log(err));
    return ( 
        <>
        <h1>Promise Example</h1>
        </>
     );
}
 
export default PromisContainer;
