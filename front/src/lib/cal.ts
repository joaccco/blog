export async function getCalToken() {
  const response = await fetch('https://api.cal.com/v1/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.CAL_CLIENT_ID,
      client_secret: process.env.CAL_CLIENT_SECRET,
      grant_type: 'client_credentials',
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to get Cal.com token')
  }

  const data = await response.json()
  return data.access_token
}

export async function getBookings() {
  const token = await getCalToken()

  const response = await fetch('https://api.cal.com/v1/bookings', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch bookings')
  }

  return response.json()
}

