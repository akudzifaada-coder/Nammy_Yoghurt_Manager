import mockUser from './json/user.json'

// Simulates network delay, like a real API call would have
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function loginRequest({ email, password }) {
  await delay(800) // simulate network latency

  const registeredEmail = mockUser.data.user.email
  const validPassword = 'password123' // hardcoded mock password for testing

  if (email === registeredEmail && password === validPassword) {
    return mockUser
  }

  return {
    success: false,
    message: 'Invalid email or password',
    data: null
  }
}

export async function signupRequest({ firstName, lastName, email, password }) {
  await delay(800)

  // In a real backend, this would create a new user.
  // Here, we just simulate a successful signup using the submitted data.
  return {
    success: true,
    message: 'Signup successful',
    data: {
      user: {
        id: 2,
        firstName,
        lastName,
        email,
        username: email.split('@')[0],
        role: 'user',
        isVerified: false,
        profile: {
          avatar: '/images/avatar.png',
          bio: ''
        }
      },
      tokens: {
        accessToken: 'mock-access-token-signup',
        refreshToken: 'mock-refresh-token-signup'
      }
    }
  }
}