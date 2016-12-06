const verifyUser = ({ userId: id }) => {
  // { userId: id } - rename userId to id
  return User.update({ id, verified: true });
}