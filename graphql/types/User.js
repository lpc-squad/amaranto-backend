export default
`type User{
    _id: ID!,
    username: String,
    password: String,
    enabled: Boolean,
    first_name: String,
    last_name: String,
    genre: String,
    birth_date: Date,
    phone: String,
    address: Address, 
    _verified: Boolean,
    identification: Identification,
    email: String,
    _createdAt: Date,
    _updatedAt: Date
}

type Query{
    users: [User]
}`;
