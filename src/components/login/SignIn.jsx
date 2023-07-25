import { signInWithGoogle, signOutUser } from "./Firebase";

export default function SignIn() {
  const handleLogout = () => {
    signOutUser();
  };

  return (
    <>
      <div>
        {localStorage.getItem("name") ? (
          <>
            <h1>{localStorage.getItem("name")}</h1>
            <p>{localStorage.getItem("email")}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button onClick={signInWithGoogle}>Sign In</button>
        )}
      </div>
    </>
  );
}
