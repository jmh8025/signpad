import React, { Component } from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native";
import { connect } from "react-redux";
import * as actions from "../../actions/loginAction"

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : "",
            password : ""
        }
    }
    login() {
        this.props.login(this.state.id, this.state.password).done(()=>{
            if(this.props.error){
                alert(this.props.error);
            }else{
                alert("id : " + this.props.id + "            " + "pw : " + this.props.password);
            }
        });
    }

    render() {
        const {actionLogin} = this.props;
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.formTop}>경기대학교 서명 시스템 로그인</Text>
                </View>
                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder="아이디" 
                        onChangeText={id => this.setState({ id })}
                        value={this.state.id}></TextInput>
                    <TextInput style={styles.input} placeholder="비밀번호" secureTextEntry={true} 
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}></TextInput>
                    <TouchableOpacity onPress={() => this.login()}>
                    <Text style={styles.button}>
                        로그인
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    formTop : {
        fontSize : 40,
        color : "#6ebddd",
        marginBottom : 20
    }, 
    form : {
        padding : 20,
        paddingBottom: 10,
        width : 500,
        borderWidth : 2,
        borderColor: "#6ebddd",
    },
    input : {
        minWidth: 200,
        borderBottomWidth : 1,
        fontSize: 20,
    },
    button : {
        marginTop: 20,
        color : "#FFFFFF",
        backgroundColor : "#4E8DF5",
        minHeight : 35,
        borderRadius : 2,
        justifyContent : "center",
        alignItems : "center",
        textAlign : "center",
        textAlignVertical : "center",
        fontSize : 20
    }
});

const mapStateToProps = state => (
    console.log("state",state),
    {
    id : state.auth.id,
    password : state.auth.password,
    error : state.auth.error
});

const mapDispatchToProps = dispatch => ({
    login:(id, password) => dispatch(actions.login({id, password}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;
