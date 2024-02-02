import React from 'react'

const Navbar = () => {
    return (
        <table className='navbar'>
            <tbody>
                <tr>
                    <td className='brandLogo'>
                        <a href='/'>
                            <img src='https://news.ycombinator.com/y18.svg' alt='brandlogo' className='logoStyle'></img>
                        </a>
                    </td>
                    <td className='navBtnSection'>
                        <span className='pageTop'>
                            <b className='hname'>
                                <a href='/' alt='brand Name'>Hacker News</a>
                            </b>
                            <a href='/'>
                                welcome
                            </a>
                            |
                            <a href='/'>
                                new
                            </a>
                            |
                            <a href='/'>
                                threads
                            </a>
                            |
                            <a href='/'>
                                past
                            </a>
                            |
                            <a href='/'>
                                comments
                            </a>
                            |
                            <a href='/'>
                                ask
                            </a>
                            |
                            <a href='/'>
                                show
                            </a>
                            |
                            <a href='/'>
                                jobs
                            </a>
                            |
                            <a href='/'>
                                submit
                            </a>
                            |
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Navbar