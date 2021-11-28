

export const getUser = () => {
  const userStr = sessionStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  else return null;
}

export const getToken = () => {
  return sessionStorage.getItem('token') || null;
}
export const removeUserSession = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
}
export const setUserSession = (token, user) => {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('user', JSON.stringify(user));
}


export const getPerson = () => {
  const personStr = sessionStorage.getItem('person');
  if (personStr) return JSON.parse(personStr);
  else return null;
}
export const getPersonToken = () => {
  return sessionStorage.getItem('tokenPerson') || null;
}
export const removePersonSession = () => {
  sessionStorage.removeItem('tokenPerson');
  sessionStorage.removeItem('person');
}
export const setPersonSession = (tokenPerson, person) => {
  sessionStorage.setItem('tokenPerson', tokenPerson);
  sessionStorage.setItem('person', JSON.stringify(person));
}