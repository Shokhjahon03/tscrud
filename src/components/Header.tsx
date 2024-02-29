import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
// import { CgProfile } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';
type bb={
  setuser:(a:boolean)=>void
}
const Header = ({setuser}:bb) => {
  const isLoggedIn = true;
  const avatarUrl =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
    let navg=useNavigate()

  return (
    <div className="w-full">
      <Navbar className="bg-gray-100">
        <div className="w-full flex justify-end">
          {isLoggedIn ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="User settings" img={avatarUrl} rounded />}
            >
              <Dropdown.Item onClick={()=>navg('/profile')}>Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={()=>setuser(false)}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="login">
              <Button gradientDuoTone="purpleToBlue" outline>
                Login
              </Button>
            </Link>
          )}
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
