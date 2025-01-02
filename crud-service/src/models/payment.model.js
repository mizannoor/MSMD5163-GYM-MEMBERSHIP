import mongoose from 'mongoose'; 
import { v4 as uuidv4 } from 'uuid';

const paymentSchema = new mongoose.Schema({ 
    payment_id: { type: String, required: true, unique: true, default: uuidv4 }, 
    user_id: { type: String, required: true, ref: 'User' }, 
    membership_id: { type: String, required: true, ref: 'Membership' }, 
    amount: { type: Number, required: true }, 
    date: { type: Date, required: true }, 
    status: { type: String, required: true, enum: ['Paid', 'Pending', 'Failed'] } 
}, { timestamps: true }); 
 
export default mongoose.model('Payment', paymentSchema); 
