// A chat application receives message metadata as an object. Write a program to rename
// key properties while extracting them. (→ Renaming properties)

const message = {
    msg_id_long: 101,
    msg_time_long: "12:30 PM",
    msg_sender_long: "Amit"
};

const {
    msg_id_long: id,
    msg_time_long: time,
    msg_sender_long: sender
} = message;

console.log(id, time, sender);
