"use client";
import { signIn } from "next-auth/react";

const Home = () => {
  return (
    <main>
      <button onClick={() => signIn()}>Login</button>
    </main>
  );
};

export default Home;
