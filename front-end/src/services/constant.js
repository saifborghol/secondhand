export const BASE_URL = 'http://localhost:4000';

export const create_user_url = BASE_URL + '/user/addUser';
export const update_user_url = BASE_URL + '/user/updateUser/';

export const verifTel_user_url = BASE_URL + '/user/verifTel';
export const update_userpass_url = BASE_URL + '/user/updateUserPass/';
export const update_userimage_url = BASE_URL + '/user/updateUserImage/';
export const get_user_url = BASE_URL + '/user/getUser/';
export const login_user_url = BASE_URL + '/user/login';
export const logout_user_url = BASE_URL + '/user/logout';
export const forgotpwd_user_url = BASE_URL + '/user/forgotpassword';
export const resetpwd_user_url = BASE_URL + '/user/resetpassword';

export const PUSHANNONCE_URL = BASE_URL + '/user/pushAnnonce/';
export const PULLANNONCE_URL = BASE_URL + '/user/pullAnnonce/';

//////////////////////////cat + subcat/////////////////////////////

export const GETALL_CATEGORY_URL = BASE_URL + '/category/getAll';
export const GETALL_SUBCATEGORY_URL = BASE_URL + '/subCategory/getAll';
export const GET_SUBCATEGORY_URL = BASE_URL + '/subCategory/getSubCategory/';

export const PUSHANNONCESUBCAT_URL = BASE_URL + '/subcategory/pushAnnonce/';
export const PULLANNONCESUBCAT_URL = BASE_URL + '/subcategory/pullAnnonce/';

//////////////////////////annonce/////////////////////////////

export const ADD_ANNONCE_URL = BASE_URL + '/annonce/addAnnonce';
export const DELETE_ANNONCE_URL = BASE_URL + '/annonce/deleteAnnonce/';


export const GET_ANNONCE_URL = BASE_URL + '/annonce/getAnnonce/';
export const GETALL_ANNONCE_URL = BASE_URL + '/annonce/getAll';

export const UPDATE_ANNONCE_URL = BASE_URL + '/annonce/updateAnnonce/';




