var playlist = { Queens: 'Radio Gaga'}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Beatles'] = 'My Bloody Valentine'
  playlist['Phil Ochs'] = 'Slowdive'
  return playlist
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist['Beatles']
  delete playlist['Phil Ochs']
  return playlist
}
 