export default {
    swagger: {
        options: {
            info: {
                title: 'API Documentation',
                version: 'v1.0.0',
                contact: {
                    name: 'Truong Le',
                    email: 'lqtruong@gmail.com',
                },
            },
            grouping: 'tags',
            sortEndpoints: 'ordered',
        },
    },
    status: {
        options: {
            path: '/status',
            title: 'API Monitor',
            routeConfig: {
                auth: false,
            },
        },
    },
    database: {
        connectionString: 'mongodb://localhost:27017/todos'
    }
};