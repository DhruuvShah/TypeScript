// A government portal stores citizen details with long property names. Extract and rename them
// for shorter reference. (→ Rename properties)

const citizen = {
    citizen_full_name: "Kiran",
    citizen_residential_city: "Delhi",
};

const {
    citizen_full_name: cName,
    citizen_residential_city: cCity,
} = citizen;

console.log(cName, cCity);
