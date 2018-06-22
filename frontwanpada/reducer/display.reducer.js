export default function display(state = false, action){
    if(action.type == 'userSignin'){

        return true

    }
    else if(action.type == 'userSignUp'){

        return true
    }
    else if(action.type == 'poweroff'){
        return false
    }
    else{

        return false
    }

}
