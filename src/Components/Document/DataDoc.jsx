import React from 'react'
import {Field , reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {login} from "../../Redux/user_reducer";
import s from "../Main/Man.module.css";

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"email"} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={'input'}/> данные введены верно
            </div>
            <div>
                <button  className={s.but}>
                    подписать
                </button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        debugger
        console.log(formData)
        props.login(formData.login, formData.rememberMe, 1)
    }
    if(props.link) {
        return <Redirect to={'/'}/>
    }
    return<div>
        <h1>отправить документ на почту</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    link: state.documentW.link,
    id: state.docConf.id
})
export default connect(mapStateToProps, {login}) (Login)