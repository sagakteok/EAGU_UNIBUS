const path = require('path');
 const renderController = (req, res) => {
     res.sendFile(path.join(__dirname,"../../../dist","index.html"));
};

 module.exports = renderController
