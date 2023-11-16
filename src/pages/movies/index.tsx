import Heading from "../../components/Heading";
import Image from "next/image";

// You can use the utils/movieData.json file to get movie data, or use the utils/requests.js file to make HTTP requests to get data.
// HAVE FUN CODING!!!!!

export default function Movies() {
  return (
    <>
      <title>Movie Page</title>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex lg:flex-col">
          <div className="mb-3 lg:mb-10">
            <Heading>Hello world!</Heading>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Oppenheimer"
            width={500}
            height={500}
          />
        </div>
      </main>
    </>
  );
}
