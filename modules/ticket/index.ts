import { createModule, gql } from 'graphql-modules';

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
    `,
    resolvers: {},
});