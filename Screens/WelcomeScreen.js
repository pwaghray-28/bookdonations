import React from 'react'
import{Text,View,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import firebase from 'firebase'
import db from '../Config'
export default class WelcomeScreen extends React.Component{
    constructor(){
        super()
        this.state = {email:"",password:""}
    }
    signup = ()=>{
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(()=>{return alert("User is added successfully")})
        .catch(function(error){
            return alert(error)
        })
    }
    login = ()=>{
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(()=>{return alert("Successfully logged in")})
        .catch(function(error){
            return alert(error)
        })
    }
    render(){
        return(
            <View style = {styles.container}>
            <View style = {styles.buttonContainer}>
            <Text>
            Find a Book
            </Text>
            <TextInput style = {styles.loginBox} placeholder = "email.id" keyboardType = "email-address" onChangeText = {Text=>this.setState({email:Text})}>
            </TextInput>
            <TextInput style = {styles.loginBox} placeholder = "password" secureTextEntry = {true} onChangeText = {Text=>this.setState({password:Text})}>
            </TextInput>
            <TouchableOpacity onPress = {()=>this.login()} style = {styles.button}>
            <Text style = {styles.buttonText}>
            Login
            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {()=>this.signup()} style = {styles.button}>
            <Text style = {styles.buttonText}>
            Sign-Up
            </Text>
            </TouchableOpacity>
            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({ container:{ flex:1, backgroundColor:'#F8BE85' }, profileContainer:{ flex:1, justifyContent:'center', alignItems:'center', }, title :{ fontSize:65, fontWeight:'300', paddingBottom:30, color : '#ff3d00' }, loginBox:{ width: 300, height: 40, borderBottomWidth: 1.5, borderColor : '#ff8a65', fontSize: 20, margin:10, paddingLeft:10 }, 
button:{ marginTop:20 , width:300, height:50, justifyContent:'center', alignItems:'center', borderRadius:25, backgroundColor:"#ff9800", shadowColor: "#000", shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.30, shadowRadius: 10.32, elevation: 16, }, 
buttonText:{ color:'#ffff', fontWeight:'200', fontSize:20 }, buttonContainer:{ flex:1, alignItems:'center' } })