import 'dotenv/config'; // 1. Load environment variables from .env file
import express from 'express';
import cors from 'cors'; 
// 1. Use dynamic import for the router since it is a default export
// Note: This requires the use of 'await' or putting the import inside an async function.
import authRoutes from './routes/authRoutes.js'; 

const app = express();
const PORT = process.env.PORT || 3000; // 2. Use environment variable for PORT

// --- Middleware ---
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// --- Routes ---

// Default route
app.get('/', (req, res) => {
  res.status(200).send({ message: 'BridgeUp API is running!' });
});

// 2. Mount the Auth Routes
// All routes in authRoutes.js will be prefixed with /api/auth
// Example: POST /api/auth/mentor-register
app.use('/api/auth', authRoutes);


// --- Server Start ---
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
  console.log('API routes mounted at /api/auth');
});
