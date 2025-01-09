import P from '../assets/Images/userAsset/p.png'

export default function Navbar(){
    return(
        <header className='flex w-full p-6 md:p-8 align-middle justify-between'>
            <div className="logo flex flex-row items-baseline md:gap-2 ml-0 gap-1">
                <img src={P} className='md:w-10 w-8' alt="#" />
                <h2 className="logoText md:text-3xl text-2xl m-[-8px]">riyanshu Kumar</h2>
            </div>

            <nav className="flex">
                <ul className='flex flex-row md:gap-4 gap-3 md:text-xl text-lg'>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contactMe">Contact Me</a></li>
                </ul>
                
            </nav>
        </header>


    )
    
}