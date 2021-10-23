import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getPlayers = async (uid) => {
  const playerList = await axios.get(
    `${dbUrl}/.json?orderBy="uid"&equalTo="${uid}"`,
  );

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
  const playerList = await getPlayers(obj.uid);

  return playerList;
};

const updatePlayer = async (uid, firebaseKey, updateObj) => {
  await axios.patch(`${dbUrl}/${firebaseKey}.json`, updateObj);
  return getPlayers(uid);
};

const deletePlayer = async (uid, firebaseKey) => {
  axios.delete(`${dbUrl}/${firebaseKey}.json`);
  return getPlayers(uid);
};

export {
  getPlayers, getPlayerData, createPlayer, updatePlayer, deletePlayer,
};
