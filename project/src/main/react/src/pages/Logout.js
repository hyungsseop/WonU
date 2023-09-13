const Logout = () => {
  let token = localStorage.getItem('login-token')

  localStorage.clear()
  document.location.replace('/');
}

export default Logout