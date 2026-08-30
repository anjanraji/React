import blogsSeed from '../data/blogs.json'
import usersSeed from '../data/users.json'

// The remote API this app used to call is no longer reachable, so this hook
// now reads/writes local JSON data instead of doing network requests.
// Blogs/users are seeded from src/data/*.json on first run, then persisted
// in localStorage so create/edit/delete/signup survive a page reload.

const BLOGS_KEY = 'local_blogs'
const USERS_KEY = 'local_users'

const delay = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms))

const loadBlogs = () => {
    const stored = localStorage.getItem(BLOGS_KEY)

    if (stored) {
        return JSON.parse(stored)
    }

    localStorage.setItem(BLOGS_KEY, JSON.stringify(blogsSeed))
    return blogsSeed
}

const saveBlogs = (blogs) => {
    localStorage.setItem(BLOGS_KEY, JSON.stringify(blogs))
}

const loadUsers = () => {
    const stored = localStorage.getItem(USERS_KEY)

    if (stored) {
        return JSON.parse(stored)
    }

    localStorage.setItem(USERS_KEY, JSON.stringify(usersSeed))
    return usersSeed
}

const saveUsers = (users) => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

const getCurrentUser = () => {
    try {
        return JSON.parse(localStorage.getItem('user'))
    } catch {
        return null
    }
}

const slugify = (text) => (text || '')
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')

const makeId = () => `${Date.now()}-${Math.floor(Math.random() * 10000)}`

const ok = (data, status = 200) => ({ data, ok: true, status, message: null })

const fail = (message, status = 400) => ({
    data: { error: message },
    ok: false,
    status,
    message
})

export const useApi = () => {

    const auth = {
        signup: async function (name, email, password) {
            await delay()

            const users = loadUsers()

            if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
                return fail('An account with this email already exists', 409)
            }

            const newUser = { _id: makeId(), name, email, password }
            saveUsers([...users, newUser])

            const { password: _password, ...safeUser } = newUser

            return ok({ token: `local-${newUser._id}`, user: safeUser })
        },

        login: async function (email, password) {
            await delay()

            const users = loadUsers()
            const found = users.find(
                (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
            )

            if (!found) {
                return fail('Invalid email or password', 401)
            }

            const { password: _password, ...safeUser } = found

            return ok({ token: `local-${found._id}`, user: safeUser })
        }
    }

    const blogs = {
        getAll: async function () {
            await delay()
            return ok(loadBlogs())
        },

        getById: async function (id) {
            await delay()

            const found = loadBlogs().find(
                (b) => b.slug === id || String(b._id) === String(id)
            )

            if (!found) {
                return fail('Blog post not found', 404)
            }

            return ok(found)
        },

        createBlog: async function (blog) {
            await delay()

            const currentUser = getCurrentUser()
            const all = loadBlogs()

            const newBlog = {
                _id: makeId(),
                slug: slugify(blog.title) || makeId(),
                title: blog.title,
                excerpt: blog.excerpt,
                content: blog.content,
                category: blog.category || 'general',
                authorName: currentUser?.name || 'Anonymous',
                authorId: currentUser?._id || 'anonymous',
                createdAt: new Date().toISOString()
            }

            saveBlogs([newBlog, ...all])

            return ok(newBlog, 201)
        },

        updatePost: async function (id, blog) {
            await delay()

            const all = loadBlogs()
            const index = all.findIndex((b) => String(b._id) === String(id))

            if (index === -1) {
                return fail('Blog post not found', 404)
            }

            const updated = {
                ...all[index],
                ...blog,
                slug: blog.title ? slugify(blog.title) : all[index].slug
            }

            const next = [...all]
            next[index] = updated
            saveBlogs(next)

            return ok(updated)
        },

        deletePost: async function (id) {
            await delay()

            const all = loadBlogs()
            const next = all.filter((b) => String(b._id) !== String(id))

            if (next.length === all.length) {
                return fail('Blog post not found', 404)
            }

            saveBlogs(next)

            return ok({ _id: id })
        }
    }

    return { auth, blogs }
}
