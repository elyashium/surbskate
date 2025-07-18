import Link from 'next/link'
import React from 'react'
import { ButtonLink } from './ButtonLink'

type Props = {}

export function Header({ }: Props) {
    return (
        <header>
            <div className="flex">
                <Link href="/">Logo</Link>


                <nav>
                    <ul>
                        <li>
                            boards
                        </li>
                    </ul>
                </nav>

                <div className="">
                    <ButtonLink href = "" color='purple' 
                    aria-label = "Cart(1)">
                        Cart (1)
                    </ButtonLink>
                </div>
            </div>



        </header>
    )
}