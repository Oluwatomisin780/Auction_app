const BASE_URL = 'http://localhost:4000';

export async function createUser(fullName, email, password) {
  const data = {
    fullName,
    email,
    password,
  };
  try {
    const response = await fetch(`${BASE_URL}/users/create-user`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      const error = await response.json();
      console.log('error: ', error);
      throw new Error(error.message);
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
    console.log(error);
  }
}

export async function signIn(email, password) {
  const data = {
    email,
    password,
  };
  console.log('data: ', data);
  try {
    const response = await fetch('http://localhost:4000/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
      console.log('error: ', error);
    }
    return await response.json();
  } catch (error) {
    console.log('error:', error);
    throw new Error(error.message);
  }
}
