import { useState } from 'react';
// import { useAuth } from "../context/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config';
import { Redirect, Link } from 'wouter';


const Login = () =>  {
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
    <>
    <div className="m-2 p-2 flex items-end">
    <h1 className="mr-6 text-[#430199] text-3xl">
      Inicio de sesión
    </h1>
    <div className="flex-grow h-0.5 bg-[#430199]"></div>
  </div>

    <div className="flex flex-col items-center mt-2 rounded-lg shadow-lg p-6 w-72 mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col text-left gap-4 mb-2">
        <div>
          <label htmlFor="email" className="text-sm ">
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
          className="px-4 py-2 bg-[#430199] text-white rounded-md hover:bg-blue-600"
        >
          Confirmar
        </button>
      </form>
      {redirectToHome && <Redirect to="/" />}
    <Link href="/register">
    <span className='text-sm'>No tenés cuenta? Registrate aquí
    </span>
    </Link>
    </div>
    </>
  );
};

export default Login;