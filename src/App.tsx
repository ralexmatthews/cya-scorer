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
        <div class="flex gap-2">
          <button
            onClick={() => setTotalScore(add(1))}
            class="w-full bg-orange-700 text-white p-4 rounded text-left align-middle"
          >
            <span class="text-xl font-bold">$1k</span> Penny Jar
          </button>
          <button
            onClick={() => setTotalScore(add(5))}
            class="w-full bg-purple-700 text-white p-4 rounded text-left align-middle"
          >
            <span class="text-xl font-bold">$5k</span> Comic Books
          </button>
        </div>
        <div class="flex gap-2">
          <button
            onClick={() => setTotalScore(add(5))}
            class="w-full bg-yellow-300 text-black p-4 rounded text-left align-middle"
          >
            <span class="text-xl font-bold">$5k</span> Model Trains
          </button>
          <button
            onClick={() => setTotalScore(add(5))}
            class="w-full bg-orange-500 text-white p-4 rounded text-left align-middle"
          >
            <span class="text-xl font-bold">$5k</span> Piano
          </button>
        </div>
        <div class="flex gap-2">
          <button
            onClick={() => setTotalScore(add(10))}
            class="w-full bg-lime-300 text-black p-4 rounded text-left align-middle"
          >
            <span class="text-xl font-bold">$10k</span> Cash
          </button>
          <button
            onClick={() => setTotalScore(add(10))}
            class="w-full bg-pink-800 text-white p-4 rounded text-left align-middle"
          >
            <span class="text-xl font-bold">$10k</span> Jewels
          </button>
        </div>
        <div class="flex gap-2">
          <button
            onClick={() => setTotalScore(add(15))}
            class="w-full bg-blue-500 text-white p-4 rounded text-left align-middle"
          >
            <span class="text-xl font-bold">$15k</span> Stunt Plane
          </button>
          <button
            onClick={() => setTotalScore(add(15))}
            class="w-full bg-red-500 text-white p-4 rounded text-left align-middle"
          >
            <span class="text-xl font-bold">$15k</span> Classic Auto
          </button>
        </div>
        <div class="flex gap-2">
          <button
            onClick={() => setTotalScore(add(15))}
            class="w-full bg-teal-300 text-black p-4 rounded text-left align-middle"
          >
            <span class="text-xl font-bold">$15k</span> Scooter
          </button>
          <button
            onClick={() => setTotalScore(add(20))}
            class="w-full bg-amber-900 text-white p-4 rounded text-left align-middle"
          >
            <span class="text-xl font-bold">$20k</span> Log Cabin
          </button>
        </div>
        <div class="flex gap-2">
          <button
            onClick={() => setTotalScore(add(25))}
            class="w-full bg-zinc-200 text-black p-4 rounded text-left align-middle"
          >
            <span class="text-xl font-bold">$25k</span> Silver
          </button>
          <button
            onClick={() => setTotalScore(add(50))}
            class="w-full bg-amber-300 text-black p-4 rounded text-left align-middle"
          >
            <span class="text-xl font-bold">$50k</span> Gold
          </button>
        </div>
      </div>
    </main>
  );
}
