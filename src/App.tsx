import { createSignal } from "solid-js";

const add = (a: number) => (b: number) => a + b;
const subtract = (a: number) => (b: number) => b - a;

export default function Home() {
  const [totalScore, setTotalScore] = createSignal(0);
  return (
    <main class="text-center mx-auto text-gray-700 p-4 font-thin">
      <h1 class="text-6xl flex justify-center items-center gap-2 pb-4">
        <button onClick={() => setTotalScore(subtract(1))}>-</button> $
        {totalScore()}k <button onClick={() => setTotalScore(add(1))}>+</button>
      </h1>
      <div class="flex flex-col gap-2 font-normal">
        <button
          onClick={() => setTotalScore(add(1))}
          class="bg-orange-700 text-white p-4 rounded"
        >
          $1k - Penny Jar
        </button>
        <button
          onClick={() => setTotalScore(add(5))}
          class="bg-purple-700 text-white p-4 rounded"
        >
          $5k - Comic Books
        </button>
        <button
          onClick={() => setTotalScore(add(5))}
          class="bg-yellow-300 text-black p-4 rounded"
        >
          $5k - Model Trains
        </button>
        <button
          onClick={() => setTotalScore(add(5))}
          class="bg-orange-500 text-white p-4 rounded"
        >
          $5k - Piano
        </button>
        <button
          onClick={() => setTotalScore(add(10))}
          class="bg-lime-300 text-black p-4 rounded"
        >
          $10k - Cash Under the Mattress
        </button>
        <button
          onClick={() => setTotalScore(add(10))}
          class="bg-pink-800 text-white p-4 rounded"
        >
          $10k - Jewels
        </button>
        <button
          onClick={() => setTotalScore(add(15))}
          class="bg-blue-500 text-white p-4 rounded"
        >
          $15k - Stunt Plane
        </button>
        <button
          onClick={() => setTotalScore(add(15))}
          class="bg-red-500 text-white p-4 rounded"
        >
          $15k - Classic Auto
        </button>
        <button
          onClick={() => setTotalScore(add(15))}
          class="bg-teal-300 text-black p-4 rounded"
        >
          $15k - Scooter
        </button>
        <button
          onClick={() => setTotalScore(add(20))}
          class="bg-amber-900 text-white p-4 rounded"
        >
          $20k - Log Cabin
        </button>
        <button
          onClick={() => setTotalScore(add(25))}
          class="bg-zinc-200 text-black p-4 rounded"
        >
          $25k - Silver
        </button>
        <button
          onClick={() => setTotalScore(add(50))}
          class="bg-amber-300 text-black p-4 rounded"
        >
          $50k - Gold
        </button>
      </div>
    </main>
  );
}
