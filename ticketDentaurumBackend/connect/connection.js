const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);


mongoose.connect(
    'mongodb://care_dentaurum:careD3nt4urum@localhost:27017/CARE_DENTAURUM', { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    console.log('Connected to database!')
}).catch(() => {
    console.log('Connection failed!')
});

module.exports = mongoose;
