function Logout() {
    localStorage.removeItem('login-token')
    document.location.href = '/';
  }

  export default Logout