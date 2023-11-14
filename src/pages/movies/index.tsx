import Heading from "../../components/Heading";

// You can use the utils/movieData.json file to get movie data, or use the utils/requests.js file to make HTTP requests to get data.
// HAVE FUN CODING!!!!!

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
