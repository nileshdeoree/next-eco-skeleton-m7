import React from 'react'
import Link from 'next/link'

const productpage = ({products}) => {
  return (
    <div>
        <ul>
            {
                products.map(product => (
                    <li key={product.slug}>
                        <Link href={`product/${product.slug}`}><a>{product.title}</a></Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export async function getStaticProps(){
    let res = await fetch('http://localhost:3000/api/getproducts')
    let products = await res.json()

    return {
        props: {
            products
        }
    }
}

export default productpage