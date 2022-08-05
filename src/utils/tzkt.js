// TODO 8 - Fetch storage of the Lottery by completing fetchStorage

import axios from "axios";

export const fetchStorage = async () => {
  const res = await axios.get(
    "https://api.jakartanet.tzkt.io/v1/contracts/KT1JBg7YpaFymX53y8cpVNiPG9pcRHLeQNNC/storage"
  );
  return res.data;
};