function navbar(){
    return `<div id="navbar">
                <a id="active" href="index.html">
                    <img id="logo" src="https://s3.ap-south-1.amazonaws.com/playo-website/company/logonew-playo-03.png" alt="">
                </a>

                <ul id="nav_options">
                    <li><a href="venues.html"><span class="link-btn">Book Venues</span></a></li>
                    <li><a href="activities.html"><span class="link-btn">Activites</span></a></li>
                    <li><a href="blog.html"><span class="link-btn">Blog</span></a></li>
                </ul>
            </div>`;
}

export default navbar;