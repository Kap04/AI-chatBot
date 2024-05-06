import { AppBar, Toolbar } from '@mui/material'

import Logo from './shared/Logo'
import { useAuth } from '../context/AuthContext'
import NavigationLink from './shared/NavigationLink';

function Header() {
  const auth = useAuth();
  return (
    <AppBar sx = {{bgcolor:"transparent" , position:"static" , boxShadow: "none"}}>
      <Toolbar sx={{display:"flex"}} >
        <Logo/>
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink bg='#00fffc' text='Go to Chat' to='/chat' textcolor='black' />
              <NavigationLink bg='51538f' textcolor='white' to='/' text='Logout' onClick={auth.logout} />
            </>
          ) : (
            <>
              <NavigationLink bg='#00fffc' text='Login' to='/login' textcolor='black' />
              <NavigationLink bg='51538f' textcolor='white' to='/signup' text='Signup'  />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header