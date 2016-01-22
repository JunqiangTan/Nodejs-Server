function route(handle, pathname) {
  console.log('About to router a request for' + pathname);

  if (typeof handle[pathname] === 'function') {
    handle[pathname]();
    return handle[pathname]();
  } else {
    console.log('No request handler found for' + pathname);
    return '404 Not Found.';
  }
}

exports.route = route;