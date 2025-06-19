import mongoose  from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        tpye: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        select: false, // Exclude password from queries by default
    },
    industry: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    skills: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    message: [
        {
            role: {
                type: String,
                enum: ['user', 'Cora'],
                required: true
            },
            content: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
})
 
export const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;