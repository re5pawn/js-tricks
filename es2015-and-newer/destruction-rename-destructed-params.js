const getUserId = ({ id: userId }) => {
  // { id: userId } - rename id to userid
  return { userId };
}

// Usage example
getUserId(123); // { userId: 123 }
