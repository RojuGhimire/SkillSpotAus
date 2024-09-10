

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f2e6df]  font-overpass flex items-center justify-center">
      <div className="flex flex-col lg:flex-row  bg-white rounded-lg shadow-xl">
        {/* Left Side: Login Form */}
        <div className="flex flex-col items-center lg:h-[521px] p-10  lg:w-[432px]">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="Skill Spot Australia Logo"
            className="h-[105px] w-[115px] mb-6"
          />

          {/* User Name Input */}
          <div className="w-full text-[#6C757D]  mt-2 mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="username">
              User Name
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="w-full p-3 border rounded-md text-sm outline-none focus:border-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="w-full text-[#6C757D] mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="************"
              className="w-full p-3 border rounded-md text-sm outline-none focus:border-blue-500"
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex justify-between text-[#6C757D] w-full mb-10">
            <div className="flex items-center">
              <input id="remember" type="checkbox" className="mr-2" />
              <label htmlFor="remember" className="text-sm">
                Remember me?
              </label>
            </div>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Forget password?
            </a>
          </div>

          {/* Login Button */}
          <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-800 transition duration-200">
            Login
          </button>
        </div>

        {/* Right Side: Illustration */}
       
      </div>
      <div className="hidden  lg:flex justify-center ml-[150px] items-end p-10">
          <img
            src="/login.png"
            alt="Login Illustration"
            className="w-[500px] h-[500px]"
          />
        </div>
        {/* <img src="/left.png" alt="" className=" w-[55px] h-[820px]  ml-40 "/> */}
      
    </div>
  );
};

export default Login;
