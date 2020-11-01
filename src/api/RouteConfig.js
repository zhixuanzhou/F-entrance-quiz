// eslint-disable-next-line import/no-unresolved
import axios from 'axios';

const url = `http://localhost:8080/membersList`;

// TODO GTB-工程实践: - RouteConfig.js这种命名在前端一般是用来做前端路由的配置，而不是发API的配置
// TODO GTB-工程实践: - 依然是命名的问题。Members这个命名太宽泛了，建议改为trainee
const Members = {

  newMember: async (member) => {
    // TODO GTB-知识点: - 这个方法没有明确的return语句，那么它的返回值就是undefined
    await axios.post(url, member);
  },

  getMembers: async () => {
    const response = await axios.get(url);
    return response.data;
  },
};

export default Members;