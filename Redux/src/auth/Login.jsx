import React from "react"

const Login = () => {

     return (
          <div>
               <form action="">
               <div>
               <input
                    type="text"
                    name="userName"
                    className={styles.input}
                    placeholder="Enter your username"
                    onChange={handleChange}
                    value={data.username}
                    required
                    />
               </div>
               <div>
               <input
                    type="text"
                    name="passWord"
                    className={styles.input}
                    placeholder="Enter your password"
                    onChange={handleChange}
                    value={data.username}
                    required
                    />
               </div>
               </form>
          </div>
     );
}


export default Login;