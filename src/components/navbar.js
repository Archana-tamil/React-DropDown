import image from "./down-arrow.png";
function Navbar(){
    return (
        <>
        <nav class="navbar bg-body-tertiary">
           <div class="container-fluid">
           <span class="navbar-brand">
            <img src={image} alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
              React DropDown
           </span>
          </div>
         </nav>
         </>
    )
}
export default Navbar;