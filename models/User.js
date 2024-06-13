
import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, 'Email is Requires'],
        unique: [true, 'Email already exists'],
    },
    image: {
        type: String,
    },
    bookmarks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Property',
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});

const User = models.User || model('User', UserSchema);
export default User;

