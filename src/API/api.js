// import cat from '../assets/images/myPets/cat.png';
// import dog from '../assets/images/myPets/dog.png';
import axios from 'axios';
// const URL = process.env.REACT_APP_BASE_URL;
// console.log(URL);

const BASE_URL = 'https://pet-support-project.onrender.com/api';

const instance = axios.create({
  baseURL: BASE_URL,
});

const setToken = {
  set(token) {
    token
      ? (instance.defaults.headers.common.Authorization = `Bearer ${token}`)
      : (instance.defaults.headers.common.Authorization = '');
  },
  unset() {
    instance.defaults.headers.common.Authorization = '';
  },
};

const setCurrentToken = token => {
  if (token) {
    setToken.set(token);
    return;
  }
  setToken.unset();
};

//======================== AUNTIFICATION  ==========================

export async function register(signupData) {
  const { data } = await instance.post('auth/signup', signupData);
  return data.data;
}

export async function login(signupData) {
  const { data } = await instance.post('auth/login', signupData);
  setToken.set(data.data.token);
  return data.data;
}

export async function fetchCurrent(token) {
  try {
    setCurrentToken(token);
  } catch (error) {
    setCurrentToken();
    throw error;
  }
}

export async function logout() {
  const { data } = await instance.post('auth/logout');
  setToken.unset();
  return data.data;
}

//======================== NOTICES  ==========================

export async function requestNotices(req) {
  try {
    const { data } = await instance.get('/notices', req);
    // console.log(data)
    return data.data.result;
  } catch (error) {
    throw error;
  }
}

export async function removNoticesById(id) {
  console.log('id', id);
  try {
    // const { data } = await instance.delete(`user/notices/${id}`, id);
    // console.log('remove data', data);
    // return data.data.result;
  } catch (error) {
    throw error;
  }
}

//========================== FAVORITE  =============================

export async function togleFavorite(id, token, req) {
  console.log('id', id);
  console.log('token', token);
  console.log('req', req);

  setToken.set(token);

  try {
    const { data } = await instance[req](`user/notices/${id}/favorite`);
    console.log('favAdd data', data);
    return data.data.result;
  } catch (error) {
    throw error;
  }
}

//========================== USER  =============================

export async function requestUserData() {
  try {
    const { data } = await instance.get('/user');
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateUserData(data) {
  console.log('data: ', data);

  const userData = await requestUserData();

  Object.keys(userData).forEach(item => {
    if (item === data.name) {
      userData[item] = data.value;
    }
  });

  const newUserData = { ...userData };

  return newUserData;
}

export async function deletePet(_id) {
  try {
    const response = await instance.delete(`/user/pets/${_id}`);
    if (response.status === 200) {
      return { status: response.status, petID: _id };
    }
  } catch (error) {
    throw error;
  }
}
export async function addPet(pet) {
  try {
    const response = await instance.post(`/user/pets`, pet);
    if (response.status === 201) {
      return { status: response.status, pet: response.data };
    }
  } catch (error) {
    throw error;
  }
}

//======================== NEWS  ==========================

export async function getAllNews() {
  try {
    const { data } = await instance.get('/news');
    // console.log(data.data);
    return data.data.result;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getSearchNews(search) {
  try {
    const { data } = await instance.get('/news', { params: { search } });
    return data.data.result;
  } catch (error) {
    throw new Error(error.message);
  }
}

//========================== OUR FRIENDS  =============================

export async function getOurFriends() {
  try {
    const { data } = await instance.get('/friends');
    return data.data.result;
  } catch (error) {
    throw new Error(error.message);
  }
}

// =================================================================
