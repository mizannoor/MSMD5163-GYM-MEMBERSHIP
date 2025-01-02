import mongoose from 'mongoose'; 
import { v4 as uuidv4 } from 'uuid';

const logSchema = new mongoose.Schema({ 
    log_id: { type: String, required: true, unique: true, default: uuidv4 }, 
    user_id: { type: String, required: true, ref: 'User' }, 
    action: { type: String, required: true }, 
    timestamp: { type: Date, default: Date.now }, 
    details: { type: String, required: true } 
}); 
 
export default mongoose.model('Log', logSchema); 
