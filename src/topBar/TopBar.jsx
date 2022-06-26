import './TopBar.css'

export default function TopBar() {
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>

        <i className="topIcon fa-brands fa-twitter-square"></i>

        <i className="topIcon fa-brands fa-pinterest-square"></i>

        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className='topListItem'>Home</li>
          <li className='topListItem'>About</li>
          <li className='topListItem'>Contact</li>
          <li className='topListItem'>Write</li>
          <li className='topListItem'>LogOut</li>
        </ul>
      </div>
      <div className="topRight">
        <img className='topImage' src="https://scontent.fdac11-2.fna.fbcdn.net/v/t39.30808-6/273842403_10227407100869001_8943212038244427710_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFj8ATkBeb4MZfGsg-tF5X8hK73sSP4iiOErvexI_iKI6UoWzhZSOIIcgbUxEh8Fw90MPlSjLAqTD19PptMxCc_&_nc_ohc=s18_-S3JNJEAX_FBhgG&_nc_ht=scontent.fdac11-2.fna&oh=00_AT_VxgR5DEkFuGOlDbvc9i8eSBa8Zc9EP6KllS4lis9OAA&oe=62BDB6E3" alt="" />

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
