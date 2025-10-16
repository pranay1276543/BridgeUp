import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'; // Required for password hashing

const LearnerSchema = new mongoose.Schema({
    // --- Registration Fields ---
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    password: { // ADDED: Password field
        type: String,
        required: true,
        minlength: 6,
        select: false, // Ensures password is NOT returned by default queries
    },
    college: {
        type: Object,
        default: null,
    },
    degree: {
        type: Object,
        default: null,
    },
    branch: {
        type: String,
        default: null,
        trim: true,
    },

    // --- Authentication & Verification Fields ---
    OTP: {
        type: Number,
        default: -1,
    },
    OtpVerified: {
        type: Boolean,
        default: false,
    },

    // --- Engagement Metrics ---
    no_of_problems: {
        type: Number,
        default: 0,
        min: 0,
    },
    no_of_problem_solved: {
        type: Number,
        default: 0,
        min: 0,
    },
}, {
    timestamps: true,
});

// PRE-SAVE HOOK: Hash password before saving if it has been modified
LearnerSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    
    // Hash the password
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const LearnerModel = mongoose.models.Learner || mongoose.model('Learner', LearnerSchema);
export default LearnerModel;
