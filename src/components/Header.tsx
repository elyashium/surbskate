import Link from 'next/link'
import React from 'react'
import { ButtonLink } from './ButtonLink'

type Props = {}

export function Header({ }: Props) {
    return (
        <header className='header absolute top-0 left-0 right-0 z-50 ~h-32/48 ~px-4/6 ~py-4/6 hd:h-32'>
            <div className="mx-auto grid w-full max-w-6xl grid-cols-[auto,auto] items-center gap-6 md:grid-cols-[1fr,auto,1fr]">
                <Link href="/" className='justify-self-start'>Logo</Link>
                <nav aria-label='Main' className='col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1'>
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