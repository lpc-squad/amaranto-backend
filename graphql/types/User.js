module.exports=
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
}
type Mutation {
    addUser(input: UserInput): User
}

input UserInput {
    username: String,
    password: String,
    first_name: String,
    last_name: String,
    genre: String,
    birth_date: Date,
    phone: String,
    address: AddressInput, 
    identification: IdentificationInput,
    email: String
}
input AddressInput {
    country: String,
    city: String,
    street: String,
    state: String,
    aditional_info: String
}
input IdentificationInput{
    identification_type: String,
    identification_num: String
}
`;
