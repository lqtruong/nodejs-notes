const customContext = {
    title: 'My Node.js HAPI website'
};
const routes = [
    {
        method: 'GET',
        path: '/',
        handler: {
            view: {
                template: 'index',
                context: customContext
            }
        }
    }
];

export default routes;