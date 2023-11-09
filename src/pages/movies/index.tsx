import "../../app/globals.css";

import Heading from "../../components/Heading";

export default function Movies() {
  return (
    <>
      <title>Movie Page</title>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <Heading>Hello world!</Heading>
        </div>
      </main>
    </>
  );
}
