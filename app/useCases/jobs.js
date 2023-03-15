export default {
  _find: ({ level = { $regex: "" }, role = { $regex: "" } }) => ({
    level,
    role,
  }),

  _sort: ({ _sort = "postedAt" }) => ({}), // nao faz nada
};
