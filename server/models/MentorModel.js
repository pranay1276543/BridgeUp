import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'; // Required for password hashing

const MentorSchema = new mongoose.Schema({
    // --- Registration Fields ---
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    collegeEmail: {
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
        required: true,
    },
    degree: {
        type: Object,
        required: true,
    },
    branch: {
        type: String,
        required: true,
        trim: true,
    },
    certificates: {
        type: [String],
        default: [],
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

    // --- Performance & Rating Fields ---
    no_of_stars: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    no_of_review: {
        type: Number,
        default: 0,
        min: 0,
    },
}, {
    timestamps: true,
});

// PRE-SAVE HOOK: Hash password before saving if it has been modified
MentorSchema.pre('save', async function(next) {
    // Only run this function if password was actually modified
    if (!this.isModified('password')) return next();
    
    // Hash the password with cost 10
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const MentorModel = mongoose.models.Mentor || mongoose.model('Mentor', MentorSchema);
export default MentorModel;
