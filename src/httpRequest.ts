import axios from "axios";
import { useEffect, useState } from "react";

//=============================================================
interface IPok {
  name: string;
  url: string;
}

interface IAllPokemons {
  count: number;
  results: IPok[];
}

const [pokemon, setPokemon] = useState<IPok[]>([]);

if (pokemon.length !== 0) {
  console.log("pokemon", pokemon[2].name);
}

useEffect(() => {
  async function getPokemon() {
    const response = await axios.get<IAllPokemons>(
      "https://pokeapi.co/api/v2/pokemon"
    );

    setPokemon(response.data.results);
  }
  getPokemon();
}, []);

//=============================================================

interface IContact {
  creat: number;
  createdAt: string;
  favorites: boolean;
  id: string;
  name: string;
  number: string;
}

const [contact, setContact] = useState<IContact[]>([]);
console.log("contact", contact);

useEffect(() => {
  async function getContact() {
    const response = await axios.get<IContact[]>(
      "https://62e65af1de23e263792af968.mockapi.io/api/stars-numbers/contacts"
    );

    setContact(response.data);
  }
  getContact();
}, []);

//=============================================================

// ============= Универсальный Template http Запрос ==================
async function http<T>(request: string): Promise<T> {
  const response = await fetch(request);
  const data = await response.json();
  return data;
}

//=============================================================

interface IPokemon {
  id: number;
  name: string;
  height: number;
  order: number;
  species: {
    name: string;
    url: string;
  };
}

interface IAllDataOfPokemon {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
}

async function getAllPokemons() {
  const { data } = await axios.get<IAllDataOfPokemon>(
    "https://pokeapi.co/api/v2/pokemon"
  );
  console.log(data);
}
getAllPokemons();

async function getPokemonById(id: number) {
  const { data } = await axios.get<IPokemon>(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );
  console.log(data.name);
}
getPokemonById(14);
