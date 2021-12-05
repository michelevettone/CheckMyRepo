import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import colors from '../../assets/colors';

interface InsertUserViewProps {
    route: {
        params: {
            username: string;
            setUsername: any;
        };
    };
}

export const InsertUserView: React.FC<InsertUserViewProps> = (props) => {
    const { username, setUsername } = props.route.params;
    const navigation = useNavigation();
    const [text, setText] = useState<string>(username);

    const done = (text: string) => {
        setUsername(text);
        navigation.goBack();
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.innerContainer}>
                <TextInput
                    keyboardAppearance={'light'}
                    style={styles.textInput}
                    placeholder={'Type your github username'}
                    allowFontScaling={false}
                    value={text}
                    placeholderTextColor={colors.GREY}
                    onChangeText={(text: string) => setText(text)}
                />
                <View style={styles.bottomView}>
                    <TouchableOpacity onPress={() => done(text)} style={styles.checkButton}>
                        <Text style={styles.checkButtonLabel}>DONE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        marginTop: 60,
        marginBottom: 30,
        marginHorizontal: 40,
    },
    textInput: {
        borderBottomWidth: 3,
        fontSize: 24,
    },
    bottomView: {
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    checkButton: {
        alignSelf: 'flex-end',
    },
    checkButtonLabel: {
        fontWeight: 'bold',
        fontSize: 22,
    },
});
