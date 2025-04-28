const BASE_URL = 'http://localhost:3000';

export async function getAllAuction(token) {
  try {
    const response = await fetch(`${BASE_URL}/auctions`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer  ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createAuction(auction, token) {
  try {
    const response = await fetch(`${BASE_URL}/auction`, {
      method: 'POST',
      body: JSON.stringify(auction),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getAuction(id, token) {
  try {
    const response = await fetch(`${BASE_URL}/auction/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.table(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateAuction(auction, id, token) {
  try {
    const response = await fetch(`${BASE_URL}/auction/${id}`, {
      method: 'Post',
      body: JSON.stringify(auction),
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
export async function deleteAuction(id, token) {
  try {
    const response = await fetch(`${BASE_URL}/auction/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
