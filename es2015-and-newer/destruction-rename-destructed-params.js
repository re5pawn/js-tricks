const getUserId = ({ id: userId }) => {
  // { id: userId } - rename id to userId
  return { userId };
}

// usage
getUserId(123); // { userId: 123 }
