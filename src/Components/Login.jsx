import React from 'react'
import logo from '../assets/logo.png'

function Login() {
    const handleClick = () => {
        const clientId = 'b743ef55be844c68b30d09fe81767205'
        const redirectUrl = 'http://localhost:3000/'
        const apiUrl = "https://accounts.spotify.com/authorize";

        const scope = ['user-read-email', 'user-read-private', 'user-modify-playback-state', 'user-read-playback-state', 'user-read-currently-playing', 'user-read-recently-played', 'user-read-playback-position', 'user-top-read', 'user-follow-modify', 'user-follow-read', 
        'playlist-read-private', 'playlist-read-collaborative', 'playlist-modify-private', 'playlist-modify-public', 'app-remote-control', 'streaming', 'ugc-image-upload', 'user-library-modify', 'user-library-read'    
    ]

        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
            " "
          )}&response_type=token&show_dialog=true`;
    }
  return (
    <div className='login'>
        <img src={logo} alt="spotify logo" />
        <button className='btn' onClick={handleClick}>connect to spotify</button>
    </div>
  )
}

export default Login