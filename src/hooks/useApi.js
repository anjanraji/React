const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const useApi = () => {

    const getToken = () => {
        return localStorage.getItem('token')
    }

    async function apiRequest(endpoint, options = {}) {
        const token = getToken()

        const headers = {
            "Content-Type": "application/json"
        }

        if (token) {
            headers.Authorization = `Bearer ${token}`
        }

        if (options.headers) {
            Object.assign(headers, options.headers)
        }

        const config = {
            method: options.method || "GET",
            headers
        }

        if (options.body) {
            config.body = options.body
        }

        const response = await fetch(`${API_BASE_URL}${endpoint}`, config)

        const data = await response.json()

        // if (!response.ok) {
        //     throw new Error(data.error || "Request failed")
        // }

        return {
            data,
            ok: response.ok,
            status: response.status,
            message: data?.error || data?.message || response?.message || null
        }
    }

    const auth = {
        signup: async function (name, email, password) {
            return apiRequest("/auth/signup", {
                method: "POST",
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })
        },

        login: async function (email, password) {
            return apiRequest("/auth/login", {
                method: "POST",
                body: JSON.stringify({
                    email,
                    password
                })
            })
        }
    }

    const blogs = {
        getAll: async function () {
            return apiRequest("/blogs")
        },

        getById: async function (id) {
            return apiRequest(`/blogs/${id}`)
        },

        createBlog: async function (blog) {
            return apiRequest('/blogs', {
                method: 'POST',
                body: JSON.stringify(blog)
            })
        },

        updatePost: async function (id, blog) {
            return apiRequest(`/blogs/${id}`, {
                method: 'PUT',
                body: JSON.stringify(blog)
            })
        },

        deletePost: async function (id) {
            return apiRequest(`/blogs/${id}`, {
                method: 'DELETE'
            })
        }
    }

    return { auth, blogs }
}
