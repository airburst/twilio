/* eslint no-undef: 0 */
const logMessage = (recipient, message, { ref }) => {
console.log(ref)
    let node = ref.child(recipient);

    node.push({
        message: message,
        date: new Date().toISOString()
    });

}

export default logMessage;