import React, { useEffect } from 'react'

const TypeformEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//embed.typeform.com/next/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return <div data-tf-live='01J1CDB9FCV42QX256SBD7EY80'></div>
}

export default TypeformEmbed
