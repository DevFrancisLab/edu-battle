import { registerUser, loginUser } from '../api/auth';

const handleRegister = async () => {
  try {
    await registerUser(username, email, password);
    alert('Registered! Now login.');
    setIsLogin(true);
  } catch (error) {
    alert('Registration failed');
  }
};

const handleLogin = async () => {
  try {
    const res = await loginUser(username, password);
    localStorage.setItem('access', res.data.access);
    localStorage.setItem('refresh', res.data.refresh);
    onLogin({ username }); // updates parent app state with logged-in user
    onClose();
  } catch (error) {
    alert('Login failed');
  }
};
