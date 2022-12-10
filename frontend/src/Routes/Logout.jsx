import React from 'react';

export default function Logout() {

  console.log(document.cookie);
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:01 GMT";
  document.location.href = "http://localhost:3000/loginsignup"
  // console.log(document.cookie);

  return (
    <div>
      {/* <LoginSignup/> */}
    </div>
  )
}
