import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000
const DIST_DIR = path.join(__dirname, "dist")

// Serve the Vite build output
app.use(express.static(DIST_DIR))

// SPA fallback: any route not matched by a static file goes to index.html
// (react-router handles routing client-side)
app.use((req, res) => {
    res.sendFile(path.join(DIST_DIR, "index.html"))
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
