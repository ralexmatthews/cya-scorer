import { Meta, Title } from "@solidjs/meta";
import { createSignal } from "solid-js";

const add = (a: number) => (b: number) => a + b;
const subtract = (a: number) => (b: number) => b - a;

export default function Home() {
  const [totalScore, setTotalScore] = createSignal(0);
  return (
    <main class="text-center mx-auto text-gray-700 p-4 font-thin">
      <Title>CYA Scorer</Title>
      <Meta
        name="description"
        content="An app to help calculate the score of a game of Cover Your Assets"
      />
      <h1 class="text-6xl flex justify-center items-center gap-2 pb-4">
        <button
          onClick={(e) => {
            e.preventDefault();
            setTotalScore(subtract(1));
          }}
        >
          -
        </button>{" "}
        ${totalScore()}k{" "}
        <button
          onClick={(e) => {
            e.preventDefault();
            setTotalScore(add(1));
          }}
        >
          +
        </button>
      </h1>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 font-normal">
        <button
          onClick={(e) => {
            e.preventDefault();
            setTotalScore(add(5));
          }}
          class="min-w-48 bg-purple-700 text-white p-4 rounded text-left align-middle"
        >
          <span class="text-xl font-bold">$5k</span> Comic Books
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setTotalScore(add(5));
          }}
          class="min-w-48 bg-yellow-300 text-black p-4 rounded text-left align-middle"
        >
          <span class="text-xl font-bold">$5k</span> Model Trains
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setTotalScore(add(5));
          }}
          class="min-w-48 bg-orange-500 text-white p-4 rounded text-left align-middle"
        >
          <span class="text-xl font-bold">$5k</span> Piano
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setTotalScore(add(10));
          }}
          class="min-w-48 bg-lime-300 text-black p-4 rounded text-left align-middle"
        >
          <span class="text-xl font-bold">$10k</span> Cash
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setTotalScore(add(10));
          }}
          class="min-w-48 bg-pink-400 text-white p-4 rounded text-left align-middle"
        >
          <span class="text-xl font-bold">$10k</span> Piggy Bank
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setTotalScore(add(10));
          }}
          class="min-w-48 bg-pink-800 text-white p-4 rounded text-left align-middle"
        >
          <span class="text-xl font-bold">$10k</span> Jewels
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setTotalScore(add(15));
          }}
          class="min-w-48 bg-blue-500 text-white p-4 rounded text-left align-middle"
        >
          <span class="text-xl font-bold">$15k</span> Stunt Plane
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setTotalScore(add(15));
          }}
          class="min-w-48 bg-red-500 text-white p-4 rounded text-left align-middle"
        >
          <span class="text-xl font-bold">$15k</span> Classic Auto
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setTotalScore(add(15));
          }}
          class="min-w-48 bg-teal-300 text-black p-4 rounded text-left align-middle"
        >
          <span class="text-xl font-bold">$15k</span> Scooter
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setTotalScore(add(20));
          }}
          class="min-w-48 bg-amber-900 text-white p-4 rounded text-left align-middle"
        >
          <span class="text-xl font-bold">$20k</span> Log Cabin
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setTotalScore(add(25));
          }}
          class="min-w-48 bg-zinc-200 text-black p-4 rounded text-left align-middle"
        >
          <span class="text-xl font-bold">$25k</span> Silver
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setTotalScore(add(50));
          }}
          class="min-w-48 bg-amber-300 text-black p-4 rounded text-left align-middle"
        >
          <span class="text-xl font-bold">$50k</span> Gold
        </button>
      </div>
    </main>
  );
}
