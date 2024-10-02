import logo from '../assets/logo.svg'

export function Header(){
    return (
        <div className='flex items-center gap-5 py-2'>
            <img src={logo} alt="logo"  />
            <nav className='flex items-center gap-5'>
                <a href='' className='font-medium text-sm text-zinc-300'>Eventos</a>
                <a href='' className='font-medium text-sm'>Participações</a>
                
            </nav>
        </div>
    )
}

export function Header(){
    return (
        <div className='flex items-center gap-5 py-2'>
            <img src={logo} alt="logo"  />
            <nav className='flex items-center gap-5'>
                <a href='' className='font-medium text-sm text-zinc-300'>Eventos</a>
                <a href='' className='font-medium text-sm'>Participações</a>
                
            </nav>
        </div>
=======
import nlwUniteIcon from '../assets/nlw-unite-icon.svg'

export function Header(){
    return (
       <div>
        <img src={nlwUniteIcon} alt="logo"/>

       </div>
>>>>>>> 641d44b8a37688866710ea0a7f08fa3a766c4dc3
    )
}