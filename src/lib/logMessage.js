/* eslint no-undef: 0 */
const logMessage = (direction, recipient, message, { ref }) => {
    let node = ref.child(recipient)

    node.push({
        direction: direction,
        message: message,
        date: new Date().toISOString()
    });
}

export default logMessage;