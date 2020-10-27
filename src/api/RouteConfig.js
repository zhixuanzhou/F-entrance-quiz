// eslint-disable-next-line import/no-unresolved
import axios from 'axios';

const url = `http://localhost:8080/membersList`;

const Members = {

  newMember: async (member) => {
    await axios.post(url, member);
  },

  getMembers: async () => {
    const response = await axios.get(url);
    return response.data;
  },
};

export default Members;