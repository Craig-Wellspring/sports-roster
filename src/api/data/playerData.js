import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getPlayers = async () => {
  const playerList = await axios.get(`${dbUrl}/.json`);
  console.warn(playerList.data);

  return Object.values(playerList.data);
};

const getPlayerData = async (key) => {
  const playerData = await axios.get(`${dbUrl}/${key}.json`);

  return Object.values(playerData.data);
};

const createPlayer = async (obj) => {
  const newPlayer = await axios.post(`${dbUrl}/.json`, obj);
  const firebaseKey = newPlayer.data.name;
  await axios.patch(`${dbUrl}/${firebaseKey}.json`, { firebaseKey });

  return getPlayers();
};

export { getPlayers, getPlayerData, createPlayer };
