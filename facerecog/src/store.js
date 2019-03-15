import createStore from 'unistore';

export const store = createStore({
    isLogin : false,
    imgUrl : "",
    emotion : "",
    age : 0,
    username : "",
    password : "",
    email : "",
    listMovies : [],
    listSquare : []
});


export const actions = store => ({
    setListMovies : async (state, response) => {
        return {listMovies : response};
    },
    setListSquare : async (state, response) => {
        return {listSquare : response};
    },
    setImgUrl : async (state, response) => {
        return {imgUrl : response};
    },
    setAgeEmotion : (state, age, emotion) => {
        return {age : age, emotion : emotion};
    },
    postSignout : async (state) => {
        return { isLogin : false }
    },
    setLogin : (state, username, email,  img) =>{
        return {email : email, username : username, isLogin : true,}
    },
    setUserPassword : (state, event) => {
        return {[event.target.name] : event.target.value}
    }
});



