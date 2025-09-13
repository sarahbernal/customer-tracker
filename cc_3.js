let customers = [
    {name: "Jeffrey", email: "jeffreychambers@hotmail.com", purchases: ["Red Scarf", "Blue Scarf"]},
    {name: "Stacy", email: "stacyv@hotmail.com", purchases: ["Green Scarf", "Red Scarf", "Purple Scarf"]},
    {name: "Austin", email: "austinmoon@hotmail.com", purchases: ["Striped Scarf", "Blue Scarf"]}
]

const newCustomer = {name: "Henry", email: "Henrycavil@hotmail.com", purchases: ["White Scarf","Blue Scarf"]};
customers.push(newCustomer);

customers.shift();

customers[1].email = "stacyvernon@hotmail.com";
customers[2].purchases.push("White Scarf")

customers.forEach(obj => console.log(`Name: ${obj.name}`,`|Email: ${obj.email}`,`|Purchases: ${obj.purchases.length}`))
