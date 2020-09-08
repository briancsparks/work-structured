
export default (req, res) => {

  const interesting = getInteresting(req);


  res.statusCode = 200
  res.json({
    ...interesting,
  });

  // res.json({
  //   host,
  // });
}

function getInteresting(req) {

  const {
    headers,
    url,
    method,
    cookies,
    query,
    body,
  } = req;

  const {
    host,
    accept,
  } = headers;

  return {
    headers,
    host,
    accept,
    contentType:  headers['content-type'],
    acceptEncoding:  headers['accept-encoding'],
    acceptLanguage:  headers['accept-language'],
    url,
    method,
    cookies,
    query,
    body,
  };
  
}

function getInterestingIsh(req) {
  
  const {
    headers,
    httpVersionMajor,
    httpVersionMinor,
    httpVersion,
    upgrade,
    rawHeaders,
    trailers,
    rawTrailers,
    statusCode,
    statusMessage,
  } = req;

  return {
    headers,
    httpVersionMajor,
    httpVersionMinor,
    httpVersion,
    upgrade,
    rawHeaders,
    trailers,
    rawTrailers,
    statusCode,
    statusMessage,
    keys: Object.keys(req),
  };
  
}

