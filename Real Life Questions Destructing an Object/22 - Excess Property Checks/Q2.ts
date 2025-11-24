//  An event registration form sometimes contains unwanted fields. Demonstrate handling of
// excess properties. (→ Excess property checks)

interface EventRegistration {
    participant: string;
    event: string;
}

const eventData = {
    participant: "Aman",
    event: "Hackathon",
    temp: "extra"
};

const eventForm: EventRegistration = eventData; // allowed

console.log(eventForm);

