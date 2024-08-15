import { Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, {useState } from 'react'
import styles from '../serviceProviderLogin/styles'
import { useNavigation } from '@react-navigation/native';

const ServiceProviderLogin = () => {
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [error, setError ] = useState('');
    const navigation = useNavigation();

    //TEMP DATA
    const email = '123';
    const password = '123';

    const checkIfCredentialsCorrect = () => {
        if ((email === inputEmail) && (password === inputPassword)){
            setError('Succes!');
            navigation.navigate('serviceProviderManagement',{ isLoggedIn: true });
        }
        else if(email !== inputEmail){
            setError('Error! email or password is incorrect');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.credentialsContainer}>
                    <Text style={styles.loginText}>Login to your{'\n'}Service Provider Account</Text>
                    <TextInput
                        style={[styles.credentials, emailFocused && styles.focused]}
                        placeholder='Enter your e-mail'
                        onFocus={() => setEmailFocused(true)}
                        onBlur={() => setEmailFocused(false)}
                        onChangeText={text => setInputEmail(text)}
                        value={inputEmail}
                    />
                    <TextInput
                        style={[styles.credentials, passwordFocused && styles.focused]}
                        placeholder='Enter your password'
                        onFocus={() => setPasswordFocused(true)}
                        onBlur={() => setPasswordFocused(false)}
                        secureTextEntry={!showPassword}
                        onChangeText={text => setInputPassword(text)}
                        value={inputPassword}
                    />
                    <View style={styles.showPasswordContainer}>
                        <TouchableOpacity style={styles.showPasswordButton} onPress={() => setShowPassword(!showPassword)}>
                            <View style={showPassword ? styles.showPasswordDot : styles.dontShowPasswordDot} />
                        </TouchableOpacity>
                        <Text style={showPassword ? styles.showPasswordText : styles.dontShowPasswordText} >show my password</Text>
                    </View>
                    <TouchableOpacity style={styles.loginButton} onPress={checkIfCredentialsCorrect}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                    {error ? <Text style={styles.errorText}>{error}</Text> : null}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ServiceProviderLogin