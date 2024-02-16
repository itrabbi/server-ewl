const express = require('express');
const cors = require('cors');
const {connect} = require('mongoose');
require('dotenv');


const app = express();

app.listen(500, () => console.log("Server running on port 5000"))