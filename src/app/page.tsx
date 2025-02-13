import type { FC } from 'react';

import { HelloWorldLabel } from './_components/hello-world-label';

const Home: FC = () => {
  return (
    <main>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center">
          <HelloWorldLabel />
        </div>
      </div>
    </main>
  );
};
export default Home;
