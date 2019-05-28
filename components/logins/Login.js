import React, { Component } from 'react';
import {Container, Text, Input,Form, Item, Label, Button} from 'native-base';
import {StyleSheet} from "react-native";
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
            <Container style={styles.container}>
                <Form>
                    <Text style={styles.formTop}>경기대학교 서명 시스템 로그인</Text>
                </Form>
                <Form style={styles.form}>
                    <Item floatingLabel>
                        <Label>아이디</Label>
                        <Input 
                            onChangeText={id => this.setState({ id })}
                            value={this.state.id}></Input>
                    </Item>
                    <Item floatingLabel>
                        <Label>비밀번호</Label>
                        <Input secureTextEntry={true} 
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}></Input>
                    </Item>
                </Form>
                    <Button block style={styles.button} onPress={() => this.login()}>
                    <Text>
                        로그인
                    </Text>
                    </Button>
            </Container>
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
        width : 500,
        borderWidth : 4,
        borderColor: "#6ebddd",
    },
    button : {
        marginLeft: 385, 
        marginRight: 385, 
        marginTop: 20
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
