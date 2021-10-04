module.exports = (io, socket) => {
    const sendMessage = (data, room) => {
      socket.to(room).emit('receive:message', data);
    }
  
    const joinRoom = (room, cb) => {
      socket.join(room);
      cb(`Joined room: ${room}`);
    }  
    socket.on("send:message", sendMessage);
    socket.on("join:room", joinRoom);
  }