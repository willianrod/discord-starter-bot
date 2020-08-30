import Axios from 'axios';

const { DISCORD_WEBHOOK_URL } = process.env;

export default Axios.create({
  baseURL: DISCORD_WEBHOOK_URL,
});
