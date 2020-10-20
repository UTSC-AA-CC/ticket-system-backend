import { createApplication } from 'graphql-modules';
import { ticketModule } from './modules/ticket';

export const application = createApplication({
    modules: [ticketModule],
});