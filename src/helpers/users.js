const isEmpty = function(obj) {
  return Object.keys(obj).length === 0;
}

export const isAdmin = function(user) {
  var isAdmin;
  
  if (!user || isEmpty(user)) {
    isAdmin = false
  } else {
    if (user.roles && user.roles.length !== 0) {
      isAdmin = (user.roles[0].name === 'superadmin');
    } else {
      isAdmin = false
    }
  }

  return isAdmin;
}