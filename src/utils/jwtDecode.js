const jwt = require("jsonwebtoken");

const validaToken = (token) => {
  try {
    jwt.verify(token, process.env.SECRET);
    return true;
  } catch (error) {
    return false;
  }
};

function jwtDecode(token) {
  if (validaToken(token)) {
    const decoded = jwt.decode(token);
    return decoded;
  } else {
    return false;
  }
}

module.exports = jwtDecode;
