function createCookie(token) {
      return `SalineToken=${token}; Max-Age=${60 * 60 * 24 * 7}`;
}

// @ts-ignore
function sendCookie(res, token) {
      res.setHeader('Set-Cookie', createCookie(token));
}

function refreshCookieExpiration(res, token) {
      sendCookie(res, token);
}

// @ts-ignore
function getCookie(req) {
      const cookie = req.headers.cookie;
      if (cookie) {
            return cookie.split('=')[1];
      }
      return null;
}

module.exports = {
      createCookie,
      sendCookie, 
      refreshCookieExpiration,
      getCookie
};