const flagColor = status => {
  const color = String(status).toLowerCase() === 'success' ? 'green' : 'orange';
  return color;
};

export {flagColor};
