const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  messages: [{ timeAndDate: { type: String } }],
});

const Message = model('Message', messageSchema);
