const token = 'dce0ad28a5602cdd39be84a310926844a42fe4408186a215'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://flask-digital-library-lhc7.onrender.com/api/books`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://flask-digital-library-lhc7.onrender.com/api/books`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to add new data to the server')
        }

        return await response.json()
    },

    update: async (id: string, data:any = {}) => {
        const response = await fetch(`https://flask-digital-library-lhc7.onrender.com/api/books/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async (id: string) => {
        const response = await fetch(`https://flask-digital-library-lhc7.onrender.com/api/books/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
        })

        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }

        return;
    },
}