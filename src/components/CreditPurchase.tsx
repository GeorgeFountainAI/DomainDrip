'use client'

import { useState } from 'react'

export default function CreditPurchase() {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    const response = await fetch('/api/checkout', {
      method: 'POST',
    })

    if (!response.ok) {
      alert('Failed to create checkout session')
      setLoading(false)
      return
    }

    const { url } = await response.json()
    window.location.href = url
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {loading ? 'Redirecting…' : 'Buy Credits'}
    </button>
  )
}
