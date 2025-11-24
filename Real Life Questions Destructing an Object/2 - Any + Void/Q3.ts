// A web portal receives dynamic user input of unknown type and also needs a function that
// only logs messages without returning anything. Write a program to demonstrate this case.
// (→ any + void)

function logWebPortalInput(data: any): void {
    console.log("Web portal log:", data);
}

logWebPortalInput("Clicked on banner");
logWebPortalInput({ page: "/home", time: 12.45 });