import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';

import { TodoList } from '~/components/TodoList';

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div className="container mx-auto p-4">
          Signed in as {session.user?.email} <br />
          <button className="p-3 bg-gray-300" onClick={() => signOut()}>
            Sign out
          </button>
          <TodoList />
        </div>
      ) : (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </>
  );
};

export default Home;
