import mongoose from 'mongoose';

const ProblemSchema = new mongoose.Schema({
    // --- Core Content ---
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    subject: {
        type: String, // e.g., 'Computer Science', 'Physics'
        required: true,
    },

    // --- User References ---
    learnerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Learner', // Links to the Learner model (The original requester)
    },
    
    // NEW: Array of mentors currently collaborating on the problem
    mentorsWorkingOn: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
        ref: 'Mentor', 
    },

    // NEW: ID of the mentor who officially solved and closed the problem
    solvedByMentorId: {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
        ref: 'Mentor', 
    },
    
    // --- Anonymous Flag ---
    isAnonymous: {
        type: Boolean,
        default: false,
    },

    // --- Status and Metrics ---
    status: {
        type: String,
        enum: ['open', 'assigned', 'solved', 'closed'],
        default: 'open',
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high', 'urgent'],
        default: 'medium',
    },
    timeSpent: {
        type: Number,
        default: 0, // Time (in minutes) spent by the mentor
        min: 0,
    },
}, {
    timestamps: true,
});

const ProblemModel = mongoose.models.Problem || mongoose.model('Problem', ProblemSchema);
export default ProblemModel;
