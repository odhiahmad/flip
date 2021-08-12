const sort = (data, type) => {
  if (type === 'asc') {
    return data.sort((a, b) => {
      var nameA = a.beneficiary_name.toUpperCase();
      var nameB = b.beneficiary_name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  } else if (type === 'desc') {
    return data.sort((a, b) => {
      var nameA = a.beneficiary_name.toUpperCase();
      var nameB = b.beneficiary_name.toUpperCase();
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
  } else if (type === 'tanggal-desc') {
    return data.sort((a, b) => {
      var nameA = new Date(a.created_at.substring(0, 10));
      var nameB = new Date(b.created_at.substring(0, 10));
      if (nameA > nameB) {
        return 1;
      }

      return -1;
    });
  } else if (type === 'tanggal-asc') {
    return data.sort((a, b) => {
      var nameA = new Date(a.created_at.substring(0, 10));
      var nameB = new Date(b.created_at.substring(0, 10));

      if (nameA < nameB) {
        return 1;
      }
      return -1;
    });
  } else {
    return data;
  }
};

export {sort};
