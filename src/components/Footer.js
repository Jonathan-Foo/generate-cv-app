import { Link } from '@mui/material';
import React, { Component } from 'react'
import { FaGithub } from 'react-icons/fa'

export default class Footer extends Component {
 

    render() {
        return (
            <div className='footer'>
            <p className="copyright">copyright © 2021 jonathan-foo</p>
            <Link href="https://github.com/Jonathan-Foo" target="_blank">
                <FaGithub />
            </Link>
            </div>
        )
    }
}
