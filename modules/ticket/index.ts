import { createModule, gql } from 'graphql-modules';

const tickets = [
    {
        title: "Title",
        description: "Description",
        ticketNumber: 423,
        status: 'open',
        createdBy: "12nfaj12",
        assignedTo: "12nfaj12",
        priority: "low",
        categories: [],
    },
    {
        title: "Title",
        description: "Description",
        ticketNumber: 424,
        status: 'open',
        createdBy: "12nfaj12",
        assignedTo: "12nfaj12",
        priority: "low",
        categories: [],
    }
]

export const ticketModule = createModule({
    id: 'ticket',
    dirname: __dirname,
    typeDefs: gql`
        type Ticket {
            title: String
            description: String
            ticketNumber: Int
            status: String
            createdBy: ID
            assignedTo: ID
            priority: String
            categories: [String]
        }

        type Query {
            tickets: [Ticket]
        }
    `,
    resolvers: {
        Query: {
            tickets: () => tickets,
        },
    },
});