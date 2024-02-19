import { useState } from 'react';
// import { useAuth } from "../context/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config';
import { Redirect } from 'wouter';


const LoginForm = () =>  {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [redirectToHome, setRedirectToHome] = useState(false);


  // const { login } = useAuth();
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      console.log("Usuario Logueado");
      setRedirectToHome(true); // Activar la redirección a la página de inicio


    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });
  

  return (
    <div className="flex flex-col items-center mt-8 rounded-lg shadow-lg p-8 w-72">
      <h2 className="text-2xl font-bold mb-4">Inicio de Sesión</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="email" className="text-sm">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            placeholder="youremail@company.tld"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm">
            Contraseña:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="*************"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Iniciar Sesión
        </button>
      </form>
      {redirectToHome && <Redirect to="/" />}

    </div>
  );
};

export default LoginForm;