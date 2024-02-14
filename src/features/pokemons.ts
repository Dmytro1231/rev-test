/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPokemons } from '../api/getPokemons';
import { PokemonSpecies } from '../types/PokemonSpecies';

interface PokemonState {
  data: PokemonSpecies[] | null,
  loading: boolean,
  error: string,
}

const initialState: PokemonState = {
  data: null,
  loading: false,
  error: '',
};

export const fetchData = createAsyncThunk('characters/fetch', () => {
  return getPokemons();
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    clear: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload.pokemon_species;
      state.loading = false;
    });

    builder.addCase(fetchData.rejected, (state) => {
      state.loading = false;
      state.error = 'Error';
    });
  },
});

export default pokemonSlice.reducer;
export const { clear } = pokemonSlice.actions;
